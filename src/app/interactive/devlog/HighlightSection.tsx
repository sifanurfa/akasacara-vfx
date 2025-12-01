"use client";

import React, { useEffect, useState } from "react";
import Image from 'next/image';
import "./Devlog.css"
import { AnnouncementInteractiveApi } from "@/lib/api";
import { AnnouncementInteractive } from "@/types/api/types";

export default function HighlightSection() {
    const [highlight, setHighlight] = useState<AnnouncementInteractive[]>([]);

    useEffect(() => {
        const fetchData = async () => {
        try {
            const data = await AnnouncementInteractiveApi.getHighlightDevlog();
            setHighlight(data);
        } catch (err) {
            console.error("Failed to fetch Highlight:", err);
        }
        };
        fetchData();
    }, []);

    const item = highlight[0];
    if (!item) {
        return null; // or a loading indicator
    }

    // buka halaman article / eksternal link
    const handlePress = () => {
        window.open(item.urlMedia, "_blank", "noopener,noreferrer");
    };

    return (
        <div className="flex flex-col py-section items-start gap-l self-stretch border-b-2 border-white">
            <div className="relative w-full aspect-16/5 self-stretch overflow-hidden">
                <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                />
            </div>

            <div className="flex gap-3xl self-stretch items-center">
                <div className="headline-1 vfx-text-title">Highlight</div>
                <div className="flex flex-col pr-l justify-center items-start gap-s flex-1 self-stretch vfx-text-title">
                    <div className="self-stretch judul">{item.title}</div>
                    <div className="description self-stretch">{item.item}</div>
                </div>
                <div className="flex py-s px-m justify-center items-center bg-white cursor-pointer">
                    <div onClick={handlePress} className="read-more">Read More</div>
                </div>
            </div>
        </div>
    )
}