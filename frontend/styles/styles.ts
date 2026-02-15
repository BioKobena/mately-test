import { COLORS } from "@/constant/colors";
import { StyleSheet } from "react-native"
import { StatusBar } from "react-native"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
})


export const buttonStyle = StyleSheet.create({
    container: {

    }
})