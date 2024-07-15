'use server'
import { PrismaClient } from '@prisma/client'
import { IJob } from '@/interfaces/Ijob'
import { revalidatePath } from 'next/cache';
const prisma = new PrismaClient()

export const createJob = async (data:{title: string, description: string, orgName: string, remote: string,user_Id: string})=>{
    const job = await prisma.job.create({data});
    console.log(job)
    revalidatePath('/list-job');
}