# Gestionnaire de tâches collaboratif

Prototype mobile pour le suivi de tâches avec mise à jour quasi-temps réel, simulant un environnement multi-utilisateurs.

## Description

Application mobile permettant d'afficher une liste de tâches et de voir automatiquement les nouvelles tâches créées côté backend. Un simulateur génère 10 tâches espacées de 5 secondes pour imiter plusieurs utilisateurs ajoutant des tâches.

## Architecture

### Backend (Node.js + MongoDB)

- **Framework** : Express.js avec TypeScript
- **Base de données** : MongoDB avec Prisma ORM
- **Endpoints** :
  - `GET /tasks?after=<date>` : Retourne les tâches créées après une date donnée (max 20)
  - `POST /simulate` : Crée automatiquement 10 tâches espacées de 5 secondes

### Frontend (React Native)

- **Framework** : React Native avec Expo
- **Fonctionnalités** :
  - Affichage dynamique avec FlatList
  - Fetch automatique toutes les 5 secondes pour récupérer les dernières tâches
  - Ajout incrémental sans rechargement complet
  - Animation d'apparition des nouvelles tâches
  - Coloration visuelle selon le statut (Todo, In progress, Done)

## Installation

### Prérequis

- Node.js (v18 ou supérieur)
- MongoDB (instance locale ou Atlas) : utilisation de MongoDB Atlas dans mon cas 

### Backend

```bash
cd backend
npm install
```

Créer un fichier `.env` à la racine du dossier backend :

```
Que vous pouvez alimenter avec les différentes variables 
DATABASE_URL
PORT=8080
```

Générer le client Prisma et synchroniser la base :

```bash
npx prisma generate
npx prisma db push
```

Lancer le serveur :

```bash
npm run start
```

Le serveur démarre sur `http://localhost:8080`

### Frontend

```bash
cd frontend
npm install
```

Modifier l'URL de l'API dans `api/api.ts` pour pointer vers votre serveur backend (utiliser votre IP locale pour tester sur mobile) :

```typescript
const API_URL = 'http://192.168.x.x:8080';
```

Lancer l'application :

```bash
npx expo start
```

Scanner le QR code avec Expo Go (iOS/Android) ou lancer sur simulateur.

## Utilisation

1. Lancer le backend
2. Lancer l'application mobile
3. Appuyer sur "Lancer la simulation" pour créer 10 tâches espacées de 5 secondes
4. Observer l'affichage automatique des tâches dans la liste

Le fetch se fait automatiquement toutes les 5 secondes pour récupérer les nouvelles tâches sans recharger la liste complète.

## Modèle de données

```typescript
Task {
  id: string
  title: string
  status: "todo" | "in_progress" | "done"
  createdAt: Date
}
```

## Choix techniques

### Backend

- **Prisma v6** : ORM typé pour MongoDB, version stable avec support MongoDB complet
- **Index sur createdAt** : Optimise les requêtes avec filtre `after` pour le fetch
- **Simulation asynchrone** : Le endpoint `/simulate` répond immédiatement et crée les tâches en arrière-plan pour ne pas bloquer le client

### Frontend

- **Fetch avec setTimeInterval au lieu de WebSockets** : Solution plus simple pour un prototype, suffisante pour du quasi-temps réel (j'ai choisi axios dans ce cadre, j'aurai pu utiliser fetch )
- **Animation avec Animated API** : Fade in + slide up pour une apparition fluide des nouvelles tâches

## Auteur

Développé dans le cadre d'un test technique Mately by Bio Paul KOBENA