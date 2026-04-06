"use client";

import "yugioh-card-react/dist/style.css";
import { Card, Data } from "yugioh-card-react";
import { Puppy } from "@/data/puppies";
import { useRef, useState, useEffect } from "react";

const ASSET_PREFIX =
  "https://raw.githubusercontent.com/kooriookami/yugioh-card/refs/heads/master/src/assets/yugioh-card";

const NATURAL_W = 1394;
const NATURAL_H = 2031;
const DEFAULT_SCALE = 0.3;

function puppyToCard(puppy: Puppy): Data.Card {
  return {
    name: puppy.name,
    desc: `${puppy.description}\n\n${puppy.longDescription}`,
    type: Data.Type.Fusion | Data.Type.Effect,
    attribute: Data.Attribute.Dark,
    level: puppy.level,
    attack: puppy.atk === "∞" ? -2 : parseInt(puppy.atk),
    defense: puppy.def === "∞" ? -2 : parseInt(puppy.def),
    subtype_text: puppy.type,
    pack_info: puppy.code,
    metas: [],
  };
}

interface YuGiOhCardProps {
  puppy: Puppy;
}

export default function YuGiOhCard({ puppy }: YuGiOhCardProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(DEFAULT_SCALE);

  useEffect(() => {
    if (!wrapperRef.current) return;
    const observer = new ResizeObserver(([entry]) => {
      const w = entry.contentRect.width;
      setScale(w / NATURAL_W);
    });
    observer.observe(wrapperRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    // Wrapper fills its parent width, height follows the card aspect ratio
    <div ref={wrapperRef} style={{ width: "100%", height: NATURAL_H * scale, overflow: "hidden" }}>
      <Card
        card={puppyToCard(puppy)}
        image={puppy.imageUrl}
        lang={Data.Language.EN}
        asset_prefix={ASSET_PREFIX}
        style={{
          width: NATURAL_W,
          height: NATURAL_H,
          transform: `scale(${scale})`,
          transformOrigin: "top left",
        }}
      />
    </div>
  );
}
