import { redirect } from "react-router-dom";
import { deleteContact } from "../contacs";

export async function action({params}) {
    throw new console.error();
    
    await deleteContact(params.contactId);
    return redirect("/")   
}