import { useState } from "react"



const useViewModel = () => {

    const [isVisible, setIsVisible] = useState(false);
    const [item, setItem] = useState<any | {}>({});
    const dataOutTest = (value: any) => {
      setIsVisible(true);
      setItem(value);
    };

    return{
        setIsVisible,
        isVisible,
        item,
        setItem,
        dataOutTest


    }
}
export default useViewModel;
