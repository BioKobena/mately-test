import { Text, View, StatusBar, FlatList } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { styles } from '@/styles/styles'
import { COLORS } from '@/constant/colors'
import { getTask, simulate } from '@/api/taskApi';
import { Task } from '@/types/Task';
import Item from '@/components/Card/Item';
import Simulate from '@/components/Button/Add';


const index = () => {

    const [tasks, setTasks] = useState<Task[]>([])
    const [lastCreatedAt, setLastCreatedAt] = useState<string | undefined>()

    useEffect(() => {
        getTask().then(res => {
            if (res.length > 0) {
                setTasks(res)
                setLastCreatedAt(res[res.length - 1].createdAt)
            }
        })
    }, [])

    const fetchNewTask = useCallback(async () => {
        const newTasks = await getTask(lastCreatedAt)
        if (!newTasks || newTasks.length === 0) return

        setTasks(prev => {
            const existingIds = new Set(prev.map((t: Task) => t.id))
            const uniqueNew = newTasks.filter((t: Task) => !existingIds.has(t.id))
            if (uniqueNew.length === 0) return prev
            return [...prev, ...uniqueNew]
        })

        setLastCreatedAt(newTasks[newTasks.length - 1].createdAt)
    }, [lastCreatedAt])

   

    useEffect(() => {
        const interval = setInterval(fetchNewTask, 5000)
        return () => clearInterval(interval)
    }, [fetchNewTask])


    const handleSimulate = useCallback(async () => {
        await simulate()
    }, [])


    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor={COLORS.statutsBarColor} />

            <View style={styles.header}>
                <Text style={styles.headerTitle}>Gestionnaire de tâches</Text>
            </View>

            <FlatList
                data={tasks}
                contentContainerStyle={styles.listContent}
                renderItem={({ item }) => <Item title={item.title} status={item.status} />}
                keyExtractor={item => item.id}
                ListEmptyComponent={
                    <View style={styles.emptyList}>
                        <Text style={styles.emptyText}>Aucune tâche</Text>
                    </View>
                }
            />

            <Simulate handleCreateTask={handleSimulate} />
        </View>
    )
}

export default index
