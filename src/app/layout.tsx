// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Atlas Finance Automation — Lead Response & Follow-Up",
  description:
    "Done-for-you lead response + follow-up automation for finance firms. Fast replies, clean routing, audit trails, and human-in-the-loop controls.",
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        {children}

        <style>{`
          :root{
            --bg:#0b0d12;
            --panel:#111522;
            --panel2:#0f1320;
            --text:#eef1f7;
            --muted:#a9b1c2;
            --line:rgba(255,255,255,.10);
            --line2:rgba(255,255,255,.14);
            --accent:#7c5cff;
            --accent2:#19d3ff;
            --ok:#2ee59d;

            --radius:16px;
            --radius2:22px;
            --shadow: 0 18px 55px rgba(0,0,0,.55);
          }

          *{ box-sizing:border-box; }
          html,body{ height:100%; }
          body{
            margin:0;
            background: var(--bg);
            color: var(--text);
            line-height: 1.5;
          }

          a{ color: inherit; text-decoration: none; }
          a:hover{ opacity: .95; }

          .container{
            max-width: 1040px;
            margin: 0 auto;
            padding: 0 18px;
            width: 100%;
          }

          .topbar{
            border-bottom: 1px solid var(--line);
            background: rgba(11,13,18,.85);
            position: sticky;
            top: 0;
            z-index: 50;
            backdrop-filter: blur(10px);
          }

          .topbarInner{
            display:flex;
            align-items:center;
            justify-content:space-between;
            gap: 14px;
            padding: 14px 0;
          }

          .brand{
            display:flex;
            align-items:center;
            gap: 10px;
            min-width: 220px;
          }
          .mark{
            width: 10px;
            height: 10px;
            border-radius: 999px;
            background: linear-gradient(135deg, var(--accent), var(--accent2));
            box-shadow: 0 0 0 4px rgba(124,92,255,.16);
          }
          .brandText{
            display:flex;
            flex-direction:column;
            line-height: 1.15;
          }
          .brandText strong{ font-size: 13px; letter-spacing:.2px; }
          .brandText span{ font-size: 12px; color: var(--muted); }

          .navActions{
            display:flex;
            align-items:center;
            gap: 10px;
            flex-wrap: wrap;
            justify-content:flex-end;
          }

          .btn{
            display:inline-flex;
            align-items:center;
            justify-content:center;
            border-radius: 999px;
            padding: 11px 14px;
            font-size: 13px;
            font-weight: 600;
            border: 1px solid var(--line);
            background: transparent;
            cursor: pointer;
            transition: transform .12s ease, border-color .12s ease, background .12s ease;
            user-select:none;
            white-space:nowrap;
          }
          .btn:hover{
            transform: translateY(-1px);
            border-color: var(--line2);
            background: rgba(255,255,255,.03);
          }
          .btnPrimary{
            border-color: rgba(124,92,255,.5);
            background: linear-gradient(135deg, rgba(124,92,255,.92), rgba(25,211,255,.75));
            color: #081021;
          }
          .btnPrimary:hover{
            border-color: rgba(124,92,255,.7);
            background: linear-gradient(135deg, rgba(124,92,255,.98), rgba(25,211,255,.82));
          }

          .section{
            padding: 44px 0;
          }

          .hero{
            padding: 44px 0 24px;
          }

          .grid{
            display:grid;
            grid-template-columns: 1.1fr .9fr;
            gap: 16px;
            align-items: start;
          }
          @media (max-width: 960px){
            .grid{ grid-template-columns: 1fr; }
          }

          h1{
            margin: 0 0 10px;
            font-size: 46px;
            line-height: 1.05;
            letter-spacing: -1px;
          }
          @media (max-width: 560px){
            h1{ font-size: 36px; }
          }

          .lead{
            margin: 0 0 18px;
            color: var(--muted);
            font-size: 15px;
            max-width: 60ch;
          }

          .inlineNote{
            display:inline-flex;
            gap: 8px;
            align-items:center;
            padding: 8px 10px;
            border: 1px solid var(--line);
            border-radius: 999px;
            color: var(--muted);
            font-size: 12px;
            margin-bottom: 14px;
          }

          .dot{
            width: 7px;
            height: 7px;
            border-radius: 999px;
            background: var(--ok);
          }

          .panel{
            border: 1px solid var(--line);
            background: var(--panel2);
            border-radius: var(--radius2);
            overflow: hidden;
          }

          .panelHeader{
            padding: 14px 14px 10px;
            border-bottom: 1px solid var(--line);
            display:flex;
            justify-content:space-between;
            gap: 10px;
            align-items: baseline;
          }
          .panelHeader strong{ font-size: 13px; }
          .panelHeader span{ font-size: 12px; color: var(--muted); }

          .vsl{
            width: 100%;
            aspect-ratio: 16 / 9;
            background: rgba(0,0,0,.25);
          }

          .stack{
            display:grid;
            gap: 10px;
          }

          .card{
            border: 1px solid var(--line);
            background: var(--panel);
            border-radius: var(--radius);
            padding: 14px;
          }
          .card h2{
            margin: 0 0 6px;
            font-size: 18px;
            letter-spacing: -.2px;
          }
          .card h3{
            margin: 0 0 6px;
            font-size: 14px;
          }
          .card p{
            margin: 0;
            color: var(--muted);
            font-size: 13px;
          }

          .split{
            display:grid;
            grid-template-columns: 1fr 1fr;
            gap: 12px;
          }
          @media (max-width: 900px){
            .split{ grid-template-columns: 1fr; }
          }

          ul.clean{
            list-style:none;
            margin: 10px 0 0;
            padding: 0;
            display:grid;
            gap: 8px;
          }
          li.item{
            display:flex;
            gap: 10px;
            align-items:flex-start;
            padding: 10px 12px;
            border-radius: 14px;
            border: 1px solid var(--line);
            background: rgba(255,255,255,.02);
            color: var(--muted);
            font-size: 13px;
          }

          .check{
            width: 18px;
            height: 18px;
            flex: 0 0 auto;
            margin-top: 1px;
            color: var(--text);
          }

          .subtle{
            color: var(--muted);
            font-size: 12px;
          }

          .anchor{ scroll-margin-top: 92px; }

          .faq{
            border: 1px solid var(--line);
            border-radius: var(--radius2);
            overflow: hidden;
            background: var(--panel2);
          }
          details{
            border-top: 1px solid var(--line);
            padding: 14px;
          }
          details:first-child{ border-top: none; }
          summary{
            cursor:pointer;
            font-size: 14px;
            font-weight: 600;
            list-style:none;
          }
          summary::-webkit-details-marker{ display:none; }
          details p{
            margin: 10px 0 0;
            color: var(--muted);
            font-size: 13px;
          }

          form{
            display:grid;
            gap: 10px;
          }
          .row2{
            display:grid;
            grid-template-columns: 1fr 1fr;
            gap: 10px;
          }
          @media (max-width: 720px){
            .row2{ grid-template-columns: 1fr; }
          }

          label{
            display:grid;
            gap: 6px;
            font-size: 12px;
            color: var(--muted);
          }
          input, textarea{
            border: 1px solid var(--line);
            background: rgba(255,255,255,.02);
            color: var(--text);
            border-radius: 14px;
            padding: 12px;
            font-size: 14px;
            outline: none;
          }
          textarea{ min-height: 110px; resize: vertical; }
          input:focus, textarea:focus{
            border-color: rgba(124,92,255,.65);
            box-shadow: 0 0 0 4px rgba(124,92,255,.16);
          }

          .footer{
            border-top: 1px solid var(--line);
            padding: 22px 0 44px;
            color: var(--muted);
            font-size: 12px;
          }

          .mutedLink{
            text-decoration: underline;
            text-underline-offset: 3px;
            color: var(--muted);
          }
        `}</style>
      </body>
    </html>
  );
}
