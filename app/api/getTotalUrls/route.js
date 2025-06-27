import clientPromise from "@/app/lib/mongodb";


export async function GET() {

    const client = await clientPromise;
    const db = client.db('quickurl');
    const collection = db.collection('links');

    // Get Total Urls from the Database
    const totalUrls = await collection.countDocuments();

    return Response.json({ success: true, error: false, message: 'Total Count of URLs Sent Successfully', data: totalUrls });

}
