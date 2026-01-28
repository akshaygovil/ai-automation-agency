// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Atlas Finance Automation — Lead Response & Follow-Up, Done-For-You",
  description:
    "A done-for-you AI + automation system that captures, qualifies, responds, and follows up with inbound leads for finance firms — without risking compliance or brand trust.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Atlas Finance Automation",
    description:
      "Capture, qualify, respond, and follow up with inbound leads in under 60 seconds — done for you.",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  themeColor: "#0B0F19",
  colorScheme: "dark light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        {children}

        {/* Global styles kept inline so you only need layout.tsx + page.tsx */}
        <style>{`
          :root{
            --bg: #070A12;
            --bg2:#0B1020;
            --card:#0C1224;
            --card2:#0D162E;
            --text:#EAF0FF;
            --muted:#A8B3CF;
            --muted2:#7E8AA8;
            --line: rgba(255,255,255,0.10);
            --line2: rgba(255,255,255,0.14);
            --brand: #7C5CFF;
            --brand2:#19D3FF;
            --ok:#2EE59D;
            --warn:#FFD37C;
            --shadow: 0 18px 60px rgba(0,0,0,0.55);
            --shadow2: 0 10px 35px rgba(0,0,0,0.35);
            --radius: 18px;
            --radius2: 24px;
          }

          *{ box-sizing:border-box; }
          html,body{ height:100%; }
          body{
            margin:0;
            color:var(--text);
            background:
              radial-gradient(1200px 800px at 10% 0%, rgba(124,92,255,0.18), transparent 55%),
              radial-gradient(900px 700px at 85% 10%, rgba(25,211,255,0.14), transparent 55%),
              radial-gradient(900px 900px at 50% 90%, rgba(46,229,157,0.08), transparent 55%),
              linear-gradient(180deg, var(--bg), var(--bg2));
            line-height:1.5;
          }

          a{ color:inherit; text-decoration:none; }
          a:hover{ opacity:0.95; }

          ::selection{ background: rgba(124,92,255,0.35); }

          .container{
            width:100%;
            max-width:1120px;
            margin:0 auto;
            padding:0 20px;
          }

          .nav{
            position:sticky;
            top:0;
            z-index:50;
            backdrop-filter: blur(10px);
            background: rgba(7,10,18,0.65);
            border-bottom: 1px solid var(--line);
          }

          .navInner{
            display:flex;
            align-items:center;
            justify-content:space-between;
            padding:14px 0;
            gap:14px;
          }

          .brand{
            display:flex;
            align-items:center;
            gap:10px;
            min-width: 220px;
          }

          .mark{
            width:34px;
            height:34px;
            border-radius: 12px;
            background:
              radial-gradient(12px 12px at 30% 30%, rgba(255,255,255,0.55), transparent 60%),
              linear-gradient(135deg, var(--brand), var(--brand2));
            box-shadow: 0 10px 30px rgba(124,92,255,0.18);
          }

          .brandName{
            display:flex;
            flex-direction:column;
            line-height:1.15;
          }

          .brandName strong{
            font-size:14px;
            letter-spacing:0.2px;
          }

          .brandName span{
            font-size:12px;
            color:var(--muted2);
          }

          .navLinks{
            display:flex;
            align-items:center;
            gap:14px;
            flex-wrap:wrap;
            justify-content:flex-end;
          }

          .pill{
            font-size:12px;
            color:var(--muted);
            border: 1px solid var(--line);
            background: rgba(255,255,255,0.03);
            padding:8px 10px;
            border-radius: 999px;
          }

          .btn{
            display:inline-flex;
            align-items:center;
            justify-content:center;
            gap:10px;
            border-radius: 999px;
            padding: 12px 16px;
            font-weight: 600;
            font-size: 14px;
            border: 1px solid var(--line2);
            background: rgba(255,255,255,0.04);
            transition: transform 0.12s ease, background 0.12s ease, border-color 0.12s ease;
            cursor:pointer;
            user-select:none;
          }

          .btn:hover{
            transform: translateY(-1px);
            background: rgba(255,255,255,0.06);
            border-color: rgba(255,255,255,0.18);
          }

          .btnPrimary{
            border: 1px solid rgba(124,92,255,0.55);
            background: linear-gradient(135deg, rgba(124,92,255,0.9), rgba(25,211,255,0.75));
            color: #081021;
            box-shadow: 0 18px 45px rgba(124,92,255,0.22);
          }

          .btnPrimary:hover{
            border-color: rgba(124,92,255,0.72);
            background: linear-gradient(135deg, rgba(124,92,255,0.95), rgba(25,211,255,0.82));
          }

          .btnGhost{
            background: transparent;
            border: 1px solid var(--line);
          }

          .hero{
            padding: 60px 0 24px;
          }

          .heroGrid{
            display:grid;
            grid-template-columns: 1.05fr 0.95fr;
            gap: 22px;
            align-items:start;
          }

          @media (max-width: 960px){
            .heroGrid{ grid-template-columns: 1fr; }
            .brand{ min-width: unset; }
          }

          .kicker{
            display:inline-flex;
            align-items:center;
            gap:10px;
            padding: 8px 12px;
            border-radius: 999px;
            border: 1px solid rgba(124,92,255,0.28);
            background: rgba(124,92,255,0.08);
            color: var(--muted);
            font-size: 13px;
            margin-bottom: 14px;
          }

          .dot{
            width:8px;height:8px;border-radius:999px;
            background: linear-gradient(135deg, var(--brand), var(--brand2));
            box-shadow: 0 10px 25px rgba(25,211,255,0.25);
          }

          h1{
            font-size: 52px;
            line-height: 1.02;
            margin: 0 0 14px;
            letter-spacing: -1.2px;
          }

          @media (max-width: 560px){
            h1{ font-size: 40px; letter-spacing: -0.8px; }
          }

          .subhead{
            font-size: 17px;
            color: var(--muted);
            margin: 0 0 18px;
            max-width: 62ch;
          }

          .bullets{
            display:grid;
            gap:10px;
            margin: 14px 0 22px;
          }

          .bullet{
            display:flex;
            gap:10px;
            align-items:flex-start;
            padding: 10px 12px;
            border-radius: 14px;
            border: 1px solid var(--line);
            background: rgba(255,255,255,0.03);
          }

          .bullet svg{ flex: 0 0 auto; margin-top:2px; }
          .bullet strong{ font-size: 14px; }
          .bullet span{ display:block; font-size: 13px; color: var(--muted2); margin-top: 2px; }

          .ctaRow{
            display:flex;
            flex-wrap:wrap;
            gap:12px;
            align-items:center;
            margin: 14px 0 10px;
          }

          .microTrust{
            display:flex;
            flex-wrap:wrap;
            gap:10px;
            margin-top: 10px;
            color: var(--muted2);
            font-size: 12px;
          }

          .vslCard{
            border-radius: var(--radius2);
            border: 1px solid var(--line);
            background: linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02));
            box-shadow: var(--shadow2);
            overflow:hidden;
          }

          .vslTop{
            padding: 14px 14px 0;
            display:flex;
            justify-content:space-between;
            align-items:center;
            gap:12px;
          }

          .vslTop strong{
            font-size: 14px;
            letter-spacing:0.2px;
          }

          .vslTop span{
            font-size: 12px;
            color: var(--muted2);
          }

          .vsl{
            width:100%;
            aspect-ratio: 16/9;
            border-top: 1px solid var(--line);
            background: rgba(0,0,0,0.25);
          }

          .section{
            padding: 38px 0;
          }

          .sectionHeader{
            display:flex;
            align-items:flex-end;
            justify-content:space-between;
            gap:14px;
            margin-bottom: 16px;
          }

          .sectionHeader h2{
            font-size: 28px;
            margin:0;
            letter-spacing:-0.5px;
          }

          .sectionHeader p{
            margin:0;
            max-width: 62ch;
            color: var(--muted);
            font-size: 14px;
          }

          .grid3{
            display:grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 14px;
          }
          @media (max-width: 960px){
            .grid3{ grid-template-columns: 1fr; }
          }

          .card{
            border-radius: var(--radius);
            border: 1px solid var(--line);
            background: linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.015));
            padding: 16px;
            box-shadow: 0 10px 28px rgba(0,0,0,0.22);
          }

          .card h3{
            margin: 0 0 6px;
            font-size: 15px;
            letter-spacing: 0.1px;
          }
          .card p{
            margin: 0;
            color: var(--muted2);
            font-size: 13px;
          }

          .split{
            display:grid;
            grid-template-columns: 1fr 1fr;
            gap: 14px;
          }
          @media (max-width: 960px){
            .split{ grid-template-columns: 1fr; }
          }

          .offer{
            border-radius: var(--radius2);
            border: 1px solid rgba(124,92,255,0.28);
            background:
              radial-gradient(700px 240px at 20% 0%, rgba(124,92,255,0.20), transparent 60%),
              radial-gradient(700px 240px at 80% 0%, rgba(25,211,255,0.14), transparent 60%),
              linear-gradient(180deg, rgba(255,255,255,0.035), rgba(255,255,255,0.02));
            padding: 18px;
            box-shadow: var(--shadow);
          }

          .priceRow{
            display:flex;
            align-items:baseline;
            justify-content:space-between;
            gap: 10px;
            flex-wrap: wrap;
            border-bottom: 1px solid var(--line);
            padding-bottom: 12px;
            margin-bottom: 12px;
          }

          .priceRow strong{
            font-size: 18px;
          }

          .price{
            font-size: 28px;
            letter-spacing: -0.5px;
          }

          .fine{
            font-size: 12px;
            color: var(--muted2);
            margin-top: 6px;
          }

          .list{
            display:grid;
            gap:10px;
            margin: 12px 0 0;
            padding:0;
            list-style:none;
          }

          .li{
            display:flex;
            gap:10px;
            align-items:flex-start;
            padding: 10px 12px;
            border-radius: 14px;
            border: 1px solid var(--line);
            background: rgba(255,255,255,0.03);
          }

          .li span{
            font-size: 13px;
            color: var(--muted);
          }

          .steps{
            display:grid;
            gap: 12px;
          }

          .step{
            border-radius: var(--radius);
            border: 1px solid var(--line);
            background: rgba(255,255,255,0.02);
            padding: 14px;
          }

          .stepTop{
            display:flex;
            justify-content:space-between;
            gap: 12px;
            align-items:flex-start;
            margin-bottom: 6px;
          }

          .badge{
            display:inline-flex;
            align-items:center;
            gap:8px;
            border-radius: 999px;
            border: 1px solid var(--line);
            background: rgba(255,255,255,0.03);
            padding: 6px 10px;
            color: var(--muted);
            font-size: 12px;
            white-space: nowrap;
          }

          .faq{
            border-radius: var(--radius2);
            border: 1px solid var(--line);
            background: rgba(255,255,255,0.02);
            overflow:hidden;
          }

          details{
            border-top: 1px solid var(--line);
            padding: 14px 16px;
          }
          details:first-child{ border-top: none; }
          summary{
            cursor:pointer;
            font-weight: 600;
            font-size: 14px;
            list-style:none;
          }
          summary::-webkit-details-marker{ display:none; }
          details p{
            margin: 10px 0 0;
            color: var(--muted);
            font-size: 13px;
          }

          .form{
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
            color: var(--muted2);
          }

          input, textarea{
            width:100%;
            border-radius: 14px;
            border: 1px solid var(--line);
            background: rgba(255,255,255,0.03);
            color: var(--text);
            padding: 12px 12px;
            font-size: 14px;
            outline:none;
          }

          textarea{ min-height: 110px; resize: vertical; }

          input:focus, textarea:focus{
            border-color: rgba(124,92,255,0.55);
            box-shadow: 0 0 0 4px rgba(124,92,255,0.15);
          }

          .footer{
            padding: 26px 0 46px;
            color: var(--muted2);
            font-size: 12px;
            border-top: 1px solid var(--line);
            margin-top: 22px;
          }

          .mutedLink{
            color: var(--muted);
            text-decoration: underline;
            text-underline-offset: 3px;
          }

          .anchor{ scroll-margin-top: 88px; }
        `}</style>
      </body>
    </html>
  );
}
