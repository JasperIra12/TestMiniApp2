import { useState } from "react"
import type { sampleDataOut } from "src/types";

type Props = {
  dataOut: sampleDataOut;
}

const useViewModel = ({dataOut}: Props) => {

    const [isVisible, setIsVisible] = useState(false);
    const [item, setItem] = useState<any | {}>({});

    const dataOutTest = (value: any) => {
      setIsVisible(true);
      setItem(value);
      
    };
    const onPressAddToCart = (value:any) => {
      dataOut(value);
      setIsVisible(false);
    }

    return{
        setIsVisible,
        isVisible,
        item,
        setItem,
        dataOutTest,
        onPressAddToCart


    }
}
export default useViewModel;
