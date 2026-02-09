"use client";

import { Calendar } from "@/components/ui/calendar";
import Footer from "@/components/ui/Footer";
import { ptBR } from "date-fns/locale";
import { useState } from "react";
import Image from "next/image";

export default function Capsule() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  return (
    <div className=" w-full min-h-dvh flex flex-col items-center justify-between py-8 pb-4 px-6 paper-texture">
      <span className="text-xs font-bold uppercase tracking-[0.2em] mb-10">
        Dear Future Me
      </span>

      <form action="" className="flex flex-col gap-6 items-center">
        <div className="flex gap-2 flex-col md:flex-row">
          <textarea
            name="message"
            id="message"
            className="w-80 min-h-64 p-4 border rounded-lg bg-[#E9E7DB] border-none font-serif"
            placeholder="Querido eu do futuro..."
          ></textarea>

          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            locale={ptBR}
            disabled={{ before: new Date() }}
            className="rounded-lg border w-80 md:w-auto bg-[#E9E7DB] border-none"
          />
        </div>

        <div className="flex gap-1 items-center">
          <Image
            src="/dear_future_me.png"
            width={86}
            height={86}
            alt="Cápsula Temporal"
          />
          <button
            type="submit"
            className="px-12 py-2 h-12 bg-primary rounded-full  gold-gradient font-serif transition-transform hover:scale-105 active:scale-95"
          >
            Selar Cápsula
          </button>
        </div>
      </form>

      <Footer />
    </div>
  );
}
