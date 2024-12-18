import React from 'react'

interface TeamProps {
    picture: {
        large: string;
    }
    name: {
        first: string;
        last: string;
    }
}
export default function TeamCard(props: TeamProps) {
      const roles = [
        "Software Developer",
        "UI/UX Designer",
        "Product Manager",
        "Quality Assurance",
        "Data Scientist",
        "Marketing Specialist",
        "Chief Executive Officer (CEO)",
        "Human Resources (HR)",
      ];
    
      return (
        <div className="mb-16 p-4" suppressHydrationWarning>
          <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">Meet Our Team</h2>
    
          {/* Marquee Section: Scrolling text */}
          <div className="mb-8">
            
              {roles.map((role, index) => (
                <span key={index} className="text-lg font-semibold text-gray-800 mx-4">
                  {role}
                </span>
              ))}
            
          </div>
    
          {/* Team Members Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teams.map((member: any, index: number) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
                <Image
                  src={member.picture.large}
                  alt={member.name.first}
                  width={50}
                  height={50}
                  className="w-24 h-24 mx-auto rounded-full mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-800">
                  {member.name.first} {member.name.last}
                </h3>
                <p className="text-gray-600">{roles[index % roles.length]}</p> {/* Display role based on index */}
              </div>
            ))}
          </div>
        </div>
      );
    }
    
  )
}
