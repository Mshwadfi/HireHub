import Hero from "@/components/Hero";
import RecentJobs from "@/components/RecentJobs";
import { auth, currentUser } from "@clerk/nextjs/server";

export default function Home() {
  // const userData = auth();
  // console.log(userData)
  
  return (
   <div>
      <Hero />
      <RecentJobs />
   </div>
  );
}
