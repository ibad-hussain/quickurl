"use client"
import React from 'react';
import styles from '@/styles/Navbar.module.css';
import Image from "next/image";
import Link from 'next/link';
import { useRouter } from 'next/navigation';


const Navbar = () => {
    const router = useRouter()

    return (
        <div className={styles.main_navbar}>

            <div>
                <Link href={'/'} className={styles.navbar_logo}>
                    <span>
                        <Image alt='QuickURL Logo' src={'/QuickURL_Logo.png'} width={40} height={40} />
                    </span>
                    <span className={styles.navbar_logo_text}>
                        QuickURL
                    </span>
                </Link>
            </div>

            <div className={styles.navbar_links}>
                <p><Link href={'/'}>Home</Link></p>
                <p><Link href={'/about'}>About</Link></p>
                <p><button type="button" onClick={() => router.push('/shorten')}>Shorten</button></p>
            </div>

        </div>
    )
}

export default Navbar
