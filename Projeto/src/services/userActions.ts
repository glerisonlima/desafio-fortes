'use server'
 
import { cookies } from 'next/headers'

export async function createCookies() {
    const cookieStore = await cookies()
   
    cookieStore.set("token", "", { httpOnly: true })   
}
 
export async function deleteCookies() {
  (await cookies()).delete('token')
}