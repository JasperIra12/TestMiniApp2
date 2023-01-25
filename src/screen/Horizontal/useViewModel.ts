import { useState } from "react"

const [screenType, setScreenType] = useState<string | any>('horizontal')


const useViewModel = () => {

    const ChangeType = () => {
        setScreenType('vertical')
    }

    return{
        screenType,
        ChangeType

    }
}
export default useViewModel;
