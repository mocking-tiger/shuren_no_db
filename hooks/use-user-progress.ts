import { UserProgress } from "@/types/types";
import { useEffect, useState } from "react";

export const useUserProgress = () => {
    const [userProgress, setUserProgress] = useState<UserProgress | null>(null);

    useEffect(() => {
        const localStorageData = localStorage.getItem("userProgress");
        if (localStorageData) {
            setUserProgress(JSON.parse(localStorageData));
        } else {
            const defaultProgress: UserProgress = {
                currentGrade: 9,
                exp: 0,
                isMaster: false
            };
            setUserProgress(defaultProgress);
            localStorage.setItem("userProgress", JSON.stringify(defaultProgress));
        }
    }, []);

    const updateUserProgress = (newProgress: UserProgress) => {
        setUserProgress(newProgress);
        localStorage.setItem("userProgress", JSON.stringify(newProgress));
    }

    return { userProgress, updateUserProgress };
}