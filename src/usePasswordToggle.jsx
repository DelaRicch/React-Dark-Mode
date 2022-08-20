import React, { useState } from 'react'
import { BsEye, BsEyeSlash } from "react-icons/bs";

const usePasswordToggle = () => {

    const [visible, setVisible] = useState(false)

    const icon = (
        <div onClick={() => setVisible(visible => !visible)}>
            { visible ? <BsEyeSlash /> : <BsEye /> }
        </div>
    )

    const inputType = visible ? 'text' : 'password' 

  return [inputType, icon]
}

export default usePasswordToggle