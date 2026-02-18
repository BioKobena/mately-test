import { COLORS } from "@/constant/colors";
import { StyleSheet } from "react-native"


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.whiteBackgroud,
    },
    header: {
        paddingTop: 30,
        paddingBottom: 20,
        paddingHorizontal: 20,
        backgroundColor: COLORS.inProgressColor,
    },
    headerTitle: {
        fontSize: 28,
        color: COLORS.whiteBackgroud,
        letterSpacing: 0.5,
        fontFamily:"Ubuntu-Regular"
    },
    headerSubtitle: {
        fontSize: 13,
        color: COLORS.defaultTask,
        marginTop: 4,
    },
    listContent: {
        paddingHorizontal: 16,
        paddingTop: 12,
        paddingBottom: 100,
    },
    emptyList: {
        alignItems: "center",
        marginTop: 80,
        opacity: 0.5,
        borderWidth: 0.1,
        backgroundColor: COLORS.emptyBackground,
        borderRadius: 5,
        height: 50
    },
    emptyText: {
        fontSize: 16,
        color: COLORS.darkText,
        marginTop: 12,
        fontFamily: "Ubuntu-Medium"
    },
})

export const itemStyle = StyleSheet.create({
    card: {
        backgroundColor: COLORS.whiteBackgroud,
        borderRadius: 7,
        padding: 12,
        marginVertical: 6,
        flexDirection: "row",
        alignItems: "center",
        shadowColor: COLORS.shadowColor,
        shadowOffset: { width: 0, height: 21 },
        shadowOpacity: 0.06,
        shadowRadius: 2,
        elevation: 0.8,
        borderColor: COLORS.statutsBarColor,
        borderWidth: 0.1
    },
    statusDot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        marginRight: 14,
        position: "absolute",
        right: 2,
        top: 10

    },
    content: {
        flex: 1,
    },
    itemTitle: {
        fontSize: 15,
        fontFamily: "Ubuntu-Medium",
        color: COLORS.itemTextColor,
        marginBottom: 6,
    },
    item: {
        alignSelf: "flex-start",
        paddingHorizontal: 8,
        paddingVertical: 3,
        borderRadius: 10,
    },
    itemText: {
        fontSize: 11,
        fontFamily: "Ubuntu-Bold",
        textTransform: "uppercase",
        letterSpacing: 0.5,
    },
})

export const buttonStyle = StyleSheet.create({
    container: {
        position: "absolute",
        bottom: 40,
        left: 20,
        right: 20,
    },
    buttonPress: {
        backgroundColor: COLORS.inProgressColor,
        borderRadius: 8,
        height: 54,
        alignItems: "center",
        justifyContent: "center",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 6,
    },
    textButton: {
        color: COLORS.whiteBackgroud,
        fontSize: 18,
        letterSpacing: 0.5,
        fontFamily: "Ubuntu-Bold"
    }
})