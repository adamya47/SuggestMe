import conf from "../conf/conf";
import { ID,Client,Account } from "appwrite";

export class AuthService{
    client=new Client();
    account;
    constructor(){
    
       this.client.setEndpoint(
           conf.appwriteUrl
       ).setProject(conf.appwriteProjectId);
       
       this.account=new Account(this.client);
   
    }

async createAccount({email,password}){
    try {
        console.log("REACHED PEHLE")
        const userAccount=await this.account.create(ID.unique(),email,password);
        console.log("Reached")
        if(userAccount){
 return this.login({email,password});
        }
        else{
            // return userAccount
            console.log("error in obtaining user data")
        }
        
    } catch (error) {
        throw error
    }


 }
 




 async login({email,password}){
 try {
    return await this.account.createEmailPasswordSession(email,password);

 } catch (error) {
    throw error;
    
 }

 }

 async getCurrentUser(){

    try {
        return await this.account.get();
        
    } catch (error) {
        
        console.log("Appwrite Service :: getCurrentUser::error",error)
    }
    return null;//taki kuch na kuch toh return ho just another way can also do if and else

 }
 async logout() {

    try {
        await this.account.deleteSessions();
    } catch (error) {
        console.log("Appwrite service :: logout :: error", error);
    }
}





}


const authService=new AuthService();

export default authService









