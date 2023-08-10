import { useState } from "react"

export const usePost = (funcFromAPI) => {

    const request = async () => {
        const result = await funcFromAPI();
        console.log(result)
        return result.data;

    };
    request()
}