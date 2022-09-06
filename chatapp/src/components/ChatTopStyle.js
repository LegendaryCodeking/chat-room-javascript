import { makeStyles } from "@mui/styles";


const ChatTopStyle = makeStyles({
    Top: {
        paddingLeft: "1vw",
        paddingRight: "1vw",
        userSelect: "none",
        display: "flex",
        flexDirection: "row",
        margin: "1vh",
        alignItems: "center",
        justifyContent: "space-between"
    },
    AvatarName: {
        display: "flex",
        flexDirection: "row",
        gap: "1vw",
        alignItems: "center",
    }
});

export default ChatTopStyle;