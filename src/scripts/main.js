import { fetchPlumbers, fetchRequests, fetchCompletions } from "./dataAccess.js"
import { SinkRepair } from "./SinkRepair.js"


const mainContainer = document.querySelector("#container")

const render = () => {
    fetchRequests()
        .then(() => fetchCompletions())
        .then(() => fetchPlumbers())
        .then(() => {mainContainer.innerHTML = SinkRepair()}
        )
}

render()

mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    }
)

