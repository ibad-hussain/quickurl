import { NextResponse } from "next/server";
import clientPromise from "@/app/lib/mongodb";


export async function POST(request) {

    const body = await request.json();

    const client = await clientPromise;
    const db = client.db('quickurl');
    const collection = db.collection('links');

    // Check if inputs are empty
    if (body.url.trim() === "" || body.shorturl.trim() === "") {
        return NextResponse.json({ success: false, error: true, message: 'Missing Inputs from server' });
    }

    // Check if URL already exists
    const doc = await collection.findOne({ shorturl: body.shorturl });
    if (doc) {
        return NextResponse.json({ success: false, error: true, message: 'URL Already Exists' });
    }

    // Inserting urls and shorturls in the database
    await collection.insertOne({
        url: body.url,
        shorturl: body.shorturl
    })

    return NextResponse.json({ success: true, error: false, message: 'URL Generated Successfully' });

}
