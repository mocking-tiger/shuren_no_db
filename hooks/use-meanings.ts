import { useEffect, useState } from "react";

export const useMeanings = () => {
    const [meanings, setMeanings] = useState<string[]>([]);

    useEffect(() => {
        fetchMeanings();
    }, []);

    const fetchMeanings = async () => {
        const response = await fetch("/words.csv");
        const csvData = await response.text();
        const lines = csvData.split("\n");
        const allMeanings: string[] = lines.map((line) => {
            const [word, wordKana, wordMeaning, example, exampleKana, exampleMeaning, level] = line.split(",");
            return wordMeaning.trim();
        }).slice(1); // 一行目はヘッダーなので除外
        const uniqueMeanings = Array.from(new Set(allMeanings)); // 重複を除外
        setMeanings(uniqueMeanings);
    };

    return { meanings };
};
