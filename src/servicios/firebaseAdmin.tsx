//Funciones de autanticacion de firebase
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, User } from "firebase/auth";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import 'firebase/firestore'

//Modulo de autenticacion de firebase
import { auth, db } from '../firebaseConfig'
import { useEffect, useState } from "react";
import { toast } from "../components/toast";

function createAdmin(email:string, password:string)
{
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredentials)=>{
        toast("Se ha creado el administrador con: "+email);
    }).catch((error)=>{
        toast("Se podido crear el administrador ");
    });
}
export function signInAdmin(email:string, password:string)
{
    console.log("Comprobando informacion")
    //Checking admins
    async function getAdmins()
    {
        let exist = false;
        {
            console.log("Verificando permisos")
            const q = query(collection(db, "administradores"), where("email", "==", email));
            const querySnapshot = await getDocs(q);
            exist = querySnapshot.docs.length!=0
        }
        return exist;
    }
    getAdmins()
        .then((exist: boolean) => {
            signInWithEmailAndPassword(auth, email, password)
            .then((userCredentials) => {
                console.log("Ingreso correctamente")
            }).catch((error) => {
                console.log("Credenciales invalidas")
            });  
        })
        .catch(()=>
        {
            console.log("No cuenta con credenciales necesarias")
        })
}
export function logOutAdmin()
{
    return signOut(auth);
}
export function useAdminAuth()
{
    const [currentUser, setCurrentUser] = useState<User | null>()
    useEffect(() => {
        const unsub = onAuthStateChanged(auth, user => setCurrentUser(user));
        return unsub;
    }, []);
    return currentUser;
}
export async function createCategory(categoryName:string, categoryDesc:string)
{
    await addDoc(collection(db, "categorias"), {
        categoria: categoryName,
        descripcion: categoryDesc
    });
}
export async function createHeading(headingName:string, headingDesc:string)
{
    await addDoc(collection(db, "rubros"), {
        rubro: headingName,
        descripcion: headingDesc
    });
}