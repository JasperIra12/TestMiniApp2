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
      dataOut(value);
      
    };

    return{
        setIsVisible,
        isVisible,
        item,
        setItem,
        dataOutTest,
        


    }
}
export default useViewModel;
