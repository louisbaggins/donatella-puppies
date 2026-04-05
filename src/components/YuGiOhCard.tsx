"use client";

import "yugioh-card-react/dist/style.css";
import { Card, Data } from "yugioh-card-react";
import { Puppy } from "@/data/puppies";
import { YugiohCard } from "yugioh-card";
const ASSET_PREFIX =
  "https://raw.githubusercontent.com/kooriookami/yugioh-card/refs/heads/master/src/assets/yugioh-card";

// Card natural size
const NATURAL_W = 1994;
const NATURAL_H = 2031;
const SCALE = 0.3;

function puppyToCard(puppy: Puppy): Data.Card {
  return {
    name: puppy.name,
    desc: `${puppy.description}\n\n${puppy.longDescription}`,
    name_color: 'ドラゴン[族(ぞく)]',
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
  // Outer div reserves the scaled space in the layout
  // Card itself is rendered at natural size and scaled down via CSS transform
  // style is spread onto .yugioh-container via rest_props
  return (
    <div style={{ width: NATURAL_W * SCALE, height: NATURAL_H * SCALE, overflow: "hidden" }}>
      <Card
        card={puppyToCard(puppy)}
        image={puppy.imageUrl}
        lang={Data.Language.EN}
        asset_prefix={ASSET_PREFIX}
        style={{
          width: NATURAL_W,
          height: NATURAL_H,
          transform: `scale(${SCALE})`,
          transformOrigin: "top left",
        }}
      />
    </div>
  );
}
