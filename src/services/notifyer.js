const Notifyer = {
    async init() {
        console.log("Teste", Notification)
        const permission = await Notification.requestPermission()
        if (permission !== "granted") {
            alert("É necessario permitir as notificações do navegador para que nós te avisamos quando o tempo esgotar")
        }
    },

    notify({ title, body, icon }) {
        new Notification(title, {
            body,
            icon
        })
    }
}

export { Notifyer }