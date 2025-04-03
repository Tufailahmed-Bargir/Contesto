import { fetchCodeChefContests, fetchCodeChefPastContests, fetchCodeforcesContests, fetchCodeforcesPastContests, fetchLeetContests } from "@/lib/fetchALl";
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(){
    try {
        const codeforcesContests = await fetchCodeforcesContests();
        const codeChefContests = await fetchCodeChefContests();
        const leetcodeContests = await fetchLeetContests();
        const codeForcePast = await fetchCodeforcesPastContests();
        const codeChefPast = await fetchCodeChefPastContests();
         
    
        const allContests = [
          ...codeforcesContests.map((c) => ({ ...c, platform: "Codeforces" })),
          ...codeChefContests.map((c) => ({ ...c, platform: "CodeChef" })),
          ...leetcodeContests.map((c) => ({ ...c, platform: "LeetCode" })),
          ...codeForcePast.map((c) => ({ ...c, platform: "Codeforces" })),
          ...codeChefPast.map((c) => ({ ...c, platform: "CodeChef" })),
           
        ];
    
        // Upsert each contest (insert if new, update if existing)
        for (const contest of allContests) {
          await prisma.contest.upsert({
            where: { url: contest.url }, // Unique identifier
            update: {
              name: contest.name,
              date: new Date(contest.date),
              time: contest.time,
              duration: contest.duration,
              status: contest.status,
            },
            create: {
              name: contest.name,
              platform: contest.platform,
              date: new Date(contest.date),
              time: contest.time,
              duration: contest.duration,
              status: contest.status,
              url: contest.url,
            },
          });
        }
    
        // const allData = await prisma.contest.findMany({})
        const allData = await prisma.contest.findMany({
          orderBy: {
            status: "desc",
          },
        });
    
       return NextResponse.json({ contests: allData });
      } catch (error) {
        console.error("Error storing contests:", error);
        return NextResponse.json({ error: "Failed to fetch and store contests" });
      }
}