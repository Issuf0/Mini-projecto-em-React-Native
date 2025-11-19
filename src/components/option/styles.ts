import { StyleSheet } from "react-native"
import { colors } from "@/styles/colors"

export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
    },
    primaryTitle: {
        color: colors.green[300],
        fontSize: 16,
        fontWeight: "600",
    },
    secondaryTitle: {
        color: colors.gray[400],
        fontSize: 16.
    },
    modalFooter: {
        flexDirection: "row",
        marginTop: 32,
        width: "100%",
        justifyContent: "space-between",
        borderTopWidth: 1,
        borderTopColor: colors.gray[600],
        paddingVertical: 14,
    }
})