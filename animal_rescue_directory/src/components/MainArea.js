import DisplayArea from "./DisplayArea"
import Input from "./Input"

const MainArea = () => {
    return (
        <main>
            <h4>Enter an address, city, or zip code to get started</h4>
            <Input />
            <DisplayArea />
        </main>
    )
}

export default MainArea
