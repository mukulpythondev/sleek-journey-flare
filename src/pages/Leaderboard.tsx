
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SectionTitle from '@/components/ui/SectionTitle';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface LeaderboardUser {
  rank: number;
  name: string;
  githubUsername: string;
  prsMerged: number;
  moneyEarned: string;
  avatarUrl: string;
}

const Leaderboard = () => {
  // Mock data for the leaderboard
  const users: LeaderboardUser[] = [
    {
      rank: 1,
      name: "Sarah Chen",
      githubUsername: "sarahcoder",
      prsMerged: 47,
      moneyEarned: "2,850 APT",
      avatarUrl: "https://avatars.githubusercontent.com/u/12345678",
    },
    {
      rank: 2,
      name: "Alex Rodriguez",
      githubUsername: "alexrdev",
      prsMerged: 38,
      moneyEarned: "2,240 APT",
      avatarUrl: "https://avatars.githubusercontent.com/u/23456789",
    },
    {
      rank: 3,
      name: "Jamie Taylor",
      githubUsername: "jtaylor42",
      prsMerged: 35,
      moneyEarned: "1,980 APT",
      avatarUrl: "https://avatars.githubusercontent.com/u/34567890",
    },
    {
      rank: 4,
      name: "Raj Patel",
      githubUsername: "rajpatel",
      prsMerged: 29,
      moneyEarned: "1,740 APT",
      avatarUrl: "https://avatars.githubusercontent.com/u/45678901",
    },
    {
      rank: 5,
      name: "Elena Petrova",
      githubUsername: "elenadev",
      prsMerged: 26,
      moneyEarned: "1,560 APT",
      avatarUrl: "https://avatars.githubusercontent.com/u/56789012",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />
      
      <main className="flex-1 pt-24 pb-12">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle 
            title="Developer Leaderboard" 
            subtitle="TOP CONTRIBUTORS"
            alignment="center"
            className="mt-10"
          />
          
          <div className="mt-12 glass p-6 rounded-xl max-w-4xl mx-auto">
            <Table>
              <TableCaption>Top contributors by PRs merged and earnings</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[50px] text-center">Rank</TableHead>
                  <TableHead className="min-w-[180px]">Developer</TableHead>
                  <TableHead className="text-center">PRs Merged</TableHead>
                  <TableHead className="text-right">Money Earned</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users.map((user) => (
                  <TableRow key={user.githubUsername} className="hover:bg-primary/5">
                    <TableCell className="font-medium text-center">
                      {user.rank === 1 ? '🥇' : user.rank === 2 ? '🥈' : user.rank === 3 ? '🥉' : user.rank}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full overflow-hidden">
                          <img 
                            src={user.avatarUrl} 
                            alt={user.name}
                            className="w-full h-full object-cover" 
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = "https://github.com/identicons/jasonlong.png";
                            }}
                          />
                        </div>
                        <div>
                          <div className="font-medium text-sm">{user.name}</div>
                          <div className="text-xs text-neutral-400">@{user.githubUsername}</div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="text-center">{user.prsMerged}</TableCell>
                    <TableCell className="text-right font-medium text-primary">{user.moneyEarned}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Leaderboard;
