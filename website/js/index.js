import {createEneiEditor} from "@olton/enei-editor"
import "../css/index.less"

createEneiEditor({
    shortcut: "alt+ctrl+e",
    serverEndpoint: "http://localhost:5232"
})