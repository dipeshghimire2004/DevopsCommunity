"use client";
import { SITE_CONTENT } from "../constants";
import Card from "./Card";
import { TeamMember } from "../constants";

const Team = () => {
  const groupedTeam = SITE_CONTENT.team.members.reduce(
    (acc: Record<string, TeamMember[]>, member: TeamMember) => {
      if (!acc[member.category]) acc[member.category] = [];
      acc[member.category].push(member);
      return acc;
    },
    {} as Record<string, TeamMember[]>
  );

  return (
    <section id="team" className="py-20 bg-gray-100 text-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-primary text-center mb-10">
          {SITE_CONTENT.team.title}
        </h2>
        {Object.entries(groupedTeam).map(([category, members]) => (
          <div key={category} className="mb-12 ">
            <h3 className="text-2xl flex flex-col font-semibold text-primary mb-6">
              {category}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {members.map((member) => (
                <Card
                  key={member.id}
                  title={member.name}
                  subtitle={member.role}
                  description={member.category}
                  image={member.image}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
