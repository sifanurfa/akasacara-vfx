"use client";

import { useState, useEffect } from "react";
import "./Showcase.css"
import ContentCard from '@/components/vfx/showcase/ContentCard';
import LatestBreakdown from './LatestBreakdownSection';
import Breakdown from '@/components/vfx/showcase/Breakdown';
import Footer from '@/components/Footer';
import Navbar from "@/components/Navbar";

import { VFXApi } from "@/lib/api";
import { VFX } from "@/types/api/types";

function VFXShowcase() {
  const [VFX, setVFX] = useState<VFX[]>([]);

  useEffect(() => {
      const fetchData = async () => {
        try {
          const data = await VFXApi.getAll();
          setVFX(data);
        } catch (err) {
          console.error("Failed to fetch works:", err);
        }
      };
      fetchData();
  }, []);

  return (
    <>
      <div className="flex flex-col items-center gap-[26px] bg-vfx">
          {/* Navbar */}
          <Navbar/>
          <div className="flex py-section px-container justify-center items-center self-stretch">
              <div className={`flex-1 vfx-text-title text-center tagline`}>How is <span className="cinematic">cinematic illusion</span> crafted through <span className="cinematic">light and layers</span> ?</div>
          </div>

        {/* slider */}
        <div className="flex pb-section justify-center items-center gap-4xl self-stretch overflow-hidden">
            <LatestBreakdown/>
        </div>

        <div className="flex px-container pt-section justify-between items-center self-stretch">
            <div className="headline-1 vfx-text-title">Breakdown Series</div>
        </div>

        {/* interactice breakdown */}
        <Breakdown/>

          {/* list content */}
          <div className="flex py-section px-container flex-col items-start gap-2xl self-stretch">
              <div className="grid grid-cols-2 gap-2xl items-start self-stretch">
                  {VFX.map((item) => (
                      <ContentCard
                          key={item.id}
                          id={item.id}
                          title={item.title}
                          description={item.description}
                          link={item.link}
                          image={item.image}
                      />
                  ))}
              </div>
          </div>
      </div>
      <Footer/>
    </>
  )
}

export default VFXShowcase