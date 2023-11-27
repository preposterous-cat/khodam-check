"use client"
import { Button } from "../ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from "../ui/card";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { FaArrowLeftLong } from "react-icons/fa6";

import { useEffect, useState } from "react";
import jsonData from "../../data/data.json";


const CardForm = () => {
    // console.log(jsonData.hewan.length);
    const [name, setName] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [animalIndex, setAnimalIndex] = useState(0);
    const [colorIndex, setColorIndex] = useState(0);
    const [wangsitIndex, setWangsitIndex] = useState(0);

    function getRandomNumber(min, max) {
        // Menghasilkan angka acak antara 0 (inklusif) dan 1 (eksklusif)
        const randomFraction = Math.random();

        // Mengalikan dengan selisih max dan min, dan menambahkan nilai min
        const randomNumberInRange = randomFraction * (max - min) + min;

        // Pembulatan angka jika diperlukan
        const roundedNumber = Math.floor(randomNumberInRange);

        return roundedNumber;
    }

    const changeNameHandler = (e) => {
        setName(e.target.value);
    }

    const processHandler = (e) => {
        e.preventDefault();

        let animal_number = getRandomNumber(0, jsonData.hewan.length);
        setAnimalIndex(animal_number);
        let color_number = getRandomNumber(0, jsonData.warna.length);
        setColorIndex(color_number);
        let wangsit_number = getRandomNumber(0, jsonData.words.length);
        setWangsitIndex(wangsit_number);

        setIsSubmitted(true);
    }

    const backHandler = () => {
        setIsSubmitted(false);
        setName('');
        setAnimalIndex(0);
        setColorIndex(0);
        setWangsitIndex(0);
    }

    return (
        isSubmitted ?
            <Card className="w-5/6 mx-auto">
                <CardHeader>
                    <CardTitle className={`text-6xl text-center leading-relaxed`}>{name}, Khodam kamu adalah {jsonData.hewan[animalIndex]} {jsonData.warna[colorIndex]}!</CardTitle>
                </CardHeader>
                <CardContent>
                    {jsonData.words[wangsitIndex]}
                </CardContent>
                <CardFooter className="flex justify-between">
                    <Button className="font-bold tracking-wider" onClick={backHandler}><FaArrowLeftLong className="me-2" /> Back</Button>
                </CardFooter>
            </Card>
            :
            <Card className="w-[350px]" id="card-parent" >
                <CardHeader>
                    <CardTitle>Kenali Penjagamu</CardTitle>
                    <CardDescription>Tak kenal maka tak sayang. Sayangi khodam-mu tiap hari</CardDescription>
                </CardHeader>
                <form onSubmit={processHandler}>
                    <CardContent>
                        <div className="grid w-full items-center gap-4">
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="name">Tuliskan namamu</Label>
                                <Input id="name" name="nama" required placeholder="Tulis di sini..." autoComplete="off" onChange={changeNameHandler} />
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                        <Button className="font-bold tracking-wider" type="submit"> Check</Button>
                    </CardFooter>
                </form>
            </Card>

    );
}

export default CardForm;