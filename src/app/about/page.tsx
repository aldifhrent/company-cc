import { getTeams } from "@/action/teams";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Teams from "@/components/teams";
import React from "react";

const AboutPage = async () => {
  const teams = await getTeams(); // Fetch data
  console.log(teams);
  return (
    <div className="">
      <Header/>
      <div className="py-16">
        
    
      <div className="container mx-auto px-6 lg:px-16">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">About OBS TECH</h1>
          <p className="text-lg text-gray-600">
            Discover our story, meet the team, and explore the values that drive our innovation.
          </p>
        </div>

        {/* Company History */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Story</h2>
          <p className="text-gray-600 leading-relaxed">
            Founded in 2015, OBS TECH began as a small group of passionate tech enthusiasts with a
            vision to revolutionize the digital landscape. Over the years, we’ve grown into a
            global technology company, achieving key milestones such as launching our first
            AI-powered platform in 2018 and expanding into international markets in 2021. Our
            journey is fueled by a relentless pursuit of innovation and a commitment to helping
            businesses thrive in the digital age.
          </p>
        </div>

        {/* Team Section */}
<Teams/>

        {/* Culture Section */}
        <div>
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Culture</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            At OBS TECH, we believe in fostering a collaborative and inclusive work environment
            where creativity thrives. Our culture is defined by our core values:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>
              <strong>Innovation:</strong> Continuously pushing boundaries to create impactful
              solutions.
            </li>
            <li>
              <strong>Integrity:</strong> Building trust through transparency and ethical practices.
            </li>
            <li>
              <strong>Collaboration:</strong> Achieving greatness together by valuing every voice.
            </li>
            <li>
              <strong>Excellence:</strong> Delivering the highest quality in everything we do.
            </li>
          </ul>
          <p className="text-gray-600 leading-relaxed mt-6">
            Working at OBS TECH means being part of a dynamic, fast-paced environment where your
            ideas can make a real difference. Join us and be a part of our journey to shape the
            future of technology.
          </p>
        </div>
        
      </div>
      
    </div>
    <Footer/>
    </div>
  );
};

export default AboutPage;
