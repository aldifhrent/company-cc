import { TypeProductCompanySkeleton } from "@/contentful/types";
import { client } from "@/lib/client";

export default async function getServices() {
  try {
    const res = await client.getEntries<TypeProductCompanySkeleton>({
      content_type: "productCompany",
    });
    console.log("Fetch Services", res);
    return res.items || []; // Return an empty array if items is undefined
  } catch (err) {
    console.error("Error fetching services:", err);
    return []; // Return an empty array on error
  }
}
