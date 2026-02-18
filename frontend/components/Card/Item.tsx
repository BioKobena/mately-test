import { Text, View } from "react-native";
import { itemStyle } from "@/styles/styles";
import { COLORS } from "@/constant/colors";
import { Animated } from 'react-native'
import { useEffect, useRef } from "react";

type ItemProps = { title: string, status: string };

function statusConfig(status: string) {
    switch (status) {
        case "todo": return { color: COLORS.todoColor, label: "Todo", bg: COLORS.bgTodo }
        case "in_progress": return { color: COLORS.inProgressColor, label: "In Progress", bg: COLORS.bgProgress }
        case "done": return { color: COLORS.doneColor, label: "Done", bg: COLORS.bgDone }
        default: return { color: COLORS.todoColor, label: status, bg: COLORS.bgTodo }
    }
}

const Item = ({ title, status }: ItemProps) => {
    const { color, label, bg } = statusConfig(status)
    const fadeAnim = useRef(new Animated.Value(0)).current
    const slideAnim = useRef(new Animated.Value(30)).current

    useEffect(() => {
        Animated.parallel([
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 500,
                useNativeDriver: true,
            }),
            Animated.timing(slideAnim, {
                toValue: 0,
                duration: 500,
                useNativeDriver: true,
            })
        ]).start()
    }, [])
    return (
        <Animated.View style={[itemStyle.card, {
            opacity: fadeAnim,
            transform: [{ translateY: slideAnim }]
        }]}>
            <View style={[itemStyle.statusDot, { backgroundColor: color }]} />
            <View style={itemStyle.content}>
                <Text style={itemStyle.itemTitle}>{title}</Text>
                <View style={[itemStyle.item, { backgroundColor: bg }]}>
                    <Text style={[itemStyle.itemText, { color }]}>{label}</Text>
                </View>
            </View>
        </Animated.View>
    )
}


export default Item;

