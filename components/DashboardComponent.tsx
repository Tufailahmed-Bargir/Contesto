 
import { ContestCard } from "./Card";
import prisma from "@/lib/prisma";

 

export   async function DashboardComponent() {
    const data = await prisma.contest.findMany()
    console.log('data is', data);
    
  return (
    <div className="container mx-auto px-4 py-8">
      
      <div className="flex flex-col m-20 justify-center items-center">

      
        <h1 className="text-4xl font-bold mb-2">Coding Contest Tracker</h1>
        <p className="text-lg text-foreground/70">
          Track upcoming and past coding contests from popular platforms
        </p>
        </div>
     

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">

    {data.map((contest, index)=>{
        console.log('contests are mapped', contest);
        
        return <ContestCard contest={contest} index={index} key={contest.id} />
    })}
       
</div>
    </div>
  );
}
