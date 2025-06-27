"use client"
import React, { useState } from 'react';
import styles from '@/styles/Shorten.module.css';
import Link from 'next/link';
import toast from "react-hot-toast";


const Page = () => {

    const [url, setUrl] = useState("");
    const [shorturl, setShorturl] = useState("");
    const [generated, setGenerated] = useState("");

    const generate = () => {
        if (url.trim() === "" || shorturl.trim() === "") {
            toast.error('Missing Inputs', {
                duration: 3000,
                position: 'top-center',
                style: {
                    background: '#fa0000',
                    color: '#fff',
                },
            });
            return;
        }

        if (/\s/.test(shorturl)) {
            toast.error('URL text must be a single word', {
                duration: 3000,
                position: 'top-center',
                style: {
                    background: '#fa0000',
                    color: '#fff',
                },
            });
            return;
        }

        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "url": url,
            "shorturl": shorturl
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch("/api/generate", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                if (result.success) {
                    setGenerated(`${process.env.NEXT_PUBLIC_HOST}/url/${shorturl}`);
                    setUrl("");
                    setShorturl("");
                    toast.success(result.message, {
                        duration: 3000,
                        position: 'top-center',
                        style: {
                            background: '#00742c',
                            color: '#fff',
                        },
                    });
                } else {
                    toast.error(result.message, {
                        duration: 3000,
                        position: 'top-center',
                        style: {
                            background: '#d000fa',
                            color: '#fff',
                        },
                    });
                }
            })
            .catch((error) => {
                console.error(error);
                toast.error("Server Error. Try Again", {
                    duration: 3000,
                    position: 'top-center',
                    style: {
                        background: '#fa4f00',
                        color: '#fff',
                    },
                });
            })
    }

    return (
        <div className={styles.main_shorten}>

            <div className={styles.shorten_main_div}>
                <div className={styles.shorten_container}>

                    <div className={styles.shorten_heading}>Generate Your Quick URLs</div>

                    <div className={styles.shorten_input_container}>
                        <input
                            type='text'
                            placeholder='Enter your URL'
                            value={url}
                            onChange={e => { setUrl(e.target.value) }}
                        />
                        <input
                            type='text'
                            placeholder='Enter your preferred short URL text'
                            pattern="^\S+$"
                            title="Only a single word allowed"
                            value={shorturl}
                            onChange={e => { setShorturl(e.target.value) }}
                        />
                        <div className={styles.shorten_input_container_btn}>
                            <button type='button' onClick={generate} className={styles.shorten_btn}>Generate</button>
                        </div>
                    </div>

                </div>

                {generated &&
                    <div className={styles.shorten_url_container}>
                        <div>
                            Your Link:&nbsp;&nbsp;<Link href={generated} target='_blank'>{generated}</Link>
                        </div>
                    </div>
                }
            </div>

        </div>
    )
}

export default Page
