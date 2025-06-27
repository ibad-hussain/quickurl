import clientPromise from "@/app/lib/mongodb";
import { redirect } from "next/navigation";


export default async function Page({ params }) {

    const { shorturl } = await params;

    const client = await clientPromise;
    const db = client.db('quickurl');
    const collection = db.collection('links');

    const doc = await collection.findOne({ shorturl: shorturl });
    if (doc) {
        redirect(doc.url);
    } else {
        redirect(`${process.env.NEXT_PUBLIC_HOST}`);
    }

}
