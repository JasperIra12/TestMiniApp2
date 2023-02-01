import { useState } from "react"
import type { sampleDataOut } from "src/types";

type Props = {
  dataOut: sampleDataOut;
}

const useViewModel = ({dataOut}: Props) => {

    const [item, setItem] = useState<any | {}>({});

    const dataOutTest = (value: any) => {
      setItem(value);
      dataOut(value);
      
    };

    return{
        item,
        setItem,
        dataOutTest,
        


    }
}
export default useViewModel;
