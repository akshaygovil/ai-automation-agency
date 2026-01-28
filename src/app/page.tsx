// app/page.tsx
import Link from "next/link";
import { redirect } from "next/navigation";

const BRAND_NAME = "Atlas Finance Automation"; // change if you want
const CALENDLY_URL = "https://calendly.com/YOUR_CALENDLY/fit-call"; // <-- replace
const VSL_EMBED_URL =
  "https://www.youtube-nocookie.com/embed/YOUR_VIDEO_ID?rel=0&modestbranding=1"; // <-- replace

// Optional: set LEAD_WEBHOOK_URL in your env (Vercel/host) to capture leads into n8n / Make / Zapier webhook.
// Example: LEAD_WEBHOOK_URL=https://your-n8n-webhook-url
async function submitLead(formData: FormData) {
  "use server";

  const payload = {
    name: String(formData.get("name") || ""),
    company: String(formData.get("company") || ""),
    email: String(formData.get("email") || ""),
    phone: String(formData.get("phone") || ""),
    website: String(formData.get("website") || ""),
    role: String(formData.get("role") || ""),
    volume: String(formData.get("volume") || ""),
    message: String(formData.get("message") || ""),
    submittedAt: new Date().toISOString(),
    source: "landing-page",
  };

  // Basic validation
  if (!payload.email || !payload.company) {
    redirect("/?submitted=0#apply");
  }

  const webhook = process.env.LEAD_WEBHOOK_URL;

  if (webhook) {
    try {
      await fetch(webhook, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });
    } catch {
      // Swallow errors so we don't block conversion; you can inspect server logs.
    }
  } else {
    // If no webhook configured, you'll still be able to use the "Book a call" CTA.
    // Consider setting LEAD_WEBHOOK_URL to your n8n webhook to capture applications.
    console.log("[lead]", payload);
  }

  redirect("/?submitted=1#apply");
}

function IconCheck(props: { size?: number }) {
  const s = props.size ?? 18;
  return (
    <svg
      width={s}
      height={s}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M20 7L10.5 16.5L4 10"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconShield(props: { size?: number }) {
  const s = props.size ?? 18;
  return (
    <svg
      width={s}
      height={s}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12 2l8 4v6c0 5-3.4 9.4-8 10-4.6-.6-8-5-8-10V6l8-4z"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      <path
        d="M9.5 12.2l1.8 1.8 3.8-4"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconBolt(props: { size?: number }) {
  const s = props.size ?? 18;
  return (
    <svg
      width={s}
      height={s}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M13 2L3 14h7l-1 8 12-14h-7l-1-6z"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconInbox(props: { size?: number }) {
  const s = props.size ?? 18;
  return (
    <svg
      width={s}
      height={s}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 4h16v12H4V4z"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      <path
        d="M4 16l4 6h8l4-6"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      <path
        d="M9 12h6"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Page({
  searchParams,
}: {
  searchParams?: { submitted?: string };
}) {
  const submitted = searchParams?.submitted === "1";
  const submittedFail = searchParams?.submitted === "0";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: BRAND_NAME,
    areaServed: "AU",
    description:
      "Done-for-you lead response + follow-up automation for finance firms: capture, qualify, respond, route, follow up, and report — with compliance-minded controls.",
    serviceType: "Lead response automation",
  };

  return (
    <>
      {/* Structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* NAV */}
      <header className="nav">
        <div className="container">
          <div className="navInner">
            <div className="brand">
              <div className="mark" aria-hidden="true" />
              <div className="brandName">
                <strong>{BRAND_NAME}</strong>
                <span>Lead response + follow-up automation for finance</span>
              </div>
            </div>

            <nav className="navLinks" aria-label="Primary">
              <span className="pill">Compliance-minded • Human-in-the-loop</span>
              <Link className="btn btnGhost" href="#offer">
                See the offer
              </Link>
              <Link className="btn btnPrimary" href={CALENDLY_URL}>
                Book a 15-min fit call
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* HERO */}
      <main>
        <section className="hero">
          <div className="container">
            <div className="heroGrid">
              <div>
                <div className="kicker">
                  <span className="dot" aria-hidden="true" />
                  Stop losing leads to slow replies and weak follow-up.
                </div>

                <h1>
                  Respond to every inbound lead in{" "}
                  <span style={{ color: "var(--brand2)" }}>under 60 seconds</span>
                  — and follow up until they book.
                </h1>

                <p className="subhead">
                  We install a done-for-you AI + automation layer that captures,
                  qualifies, routes, replies (safely), and runs follow-up across
                  email/SMS/DMs — so your team only talks to the right people at
                  the right time.
                </p>

                <div className="bullets">
                  <div className="bullet">
                    <IconBolt />
                    <div>
                      <strong>Immediate first response (brand-safe)</strong>
                      <span>
                        Acknowledgement + next step, with strict guardrails and
                        handoff rules.
                      </span>
                    </div>
                  </div>
                  <div className="bullet">
                    <IconInbox />
                    <div>
                      <strong>Qualification + routing</strong>
                      <span>
                        Spam filtering, intent tagging, enrichment, and
                        assignment to the right person.
                      </span>
                    </div>
                  </div>
                  <div className="bullet">
                    <IconShield />
                    <div>
                      <strong>Auditability + compliance posture</strong>
                      <span>
                        Templates, approvals, logs, and “human-in-the-loop” for
                        anything sensitive.
                      </span>
                    </div>
                  </div>
                </div>

                <div className="ctaRow">
                  <Link className="btn btnPrimary" href={CALENDLY_URL}>
                    Book a 15-min fit call
                  </Link>
                  <Link className="btn" href="#apply">
                    Apply for an install slot
                  </Link>
                  <Link className="btn btnGhost" href="#how">
                    See how it works
                  </Link>
                </div>

                <div className="microTrust">
                  <span>✓ Works with Gmail / Outlook</span>
                  <span>✓ SMS via Twilio</span>
                  <span>✓ CRM updates</span>
                  <span>✓ No “AI free-for-all”</span>
                </div>
              </div>

              {/* VSL */}
              <aside className="vslCard" aria-label="Video sales letter">
                <div className="vslTop">
                  <div>
                    <strong>Watch the 6-minute breakdown</strong>
                    <div style={{ marginTop: 2 }}>
                      <span>What we install • How it boosts conversions</span>
                    </div>
                  </div>
                  <span className="badge">
                    <span className="dot" aria-hidden="true" /> VSL
                  </span>
                </div>

                <div className="vsl">
                  <iframe
                    title="Video Sales Letter"
                    src={VSL_EMBED_URL}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>

                <div style={{ padding: 14 }}>
                  <div className="ctaRow" style={{ margin: 0 }}>
                    <Link className="btn btnPrimary" href={CALENDLY_URL}>
                      Book a 15-min fit call
                    </Link>
                    <Link className="btn btnGhost" href="#apply">
                      Apply
                    </Link>
                  </div>
                  <div className="fine">
                    Prefer email?{" "}
                    <a className="mutedLink" href="mailto:hello@yourdomain.com">
                      hello@yourdomain.com
                    </a>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* WHAT THIS FIXES */}
        <section className="section" id="how">
          <div className="container">
            <div className="sectionHeader">
              <div>
                <h2>What actually changes in your business</h2>
                <p>
                  You’re not buying “AI.” You’re buying a measurable outcome:
                  fewer missed enquiries, faster replies, higher booked calls,
                  and a follow-up engine that doesn’t get tired.
                </p>
              </div>
            </div>

            <div className="grid3">
              <div className="card">
                <h3>Lead capture across channels</h3>
                <p>
                  Website forms, email inboxes, SMS, and (optionally) social DMs
                  are normalized into one pipeline.
                </p>
              </div>
              <div className="card">
                <h3>Instant acknowledgement + next steps</h3>
                <p>
                  Every legit enquiry gets a fast, professional response that
                  moves them forward—without risky claims.
                </p>
              </div>
              <div className="card">
                <h3>Qualification, prioritization, routing</h3>
                <p>
                  Intent + urgency tagging, spam/junk filtering, enrichment, and
                  assignment rules (team, region, product).
                </p>
              </div>
              <div className="card">
                <h3>Follow-up sequences that book</h3>
                <p>
                  Multi-touch follow-up via email/SMS until they respond or
                  request a call—based on behavior and rules.
                </p>
              </div>
              <div className="card">
                <h3>CRM + calendar updates</h3>
                <p>
                  Contacts, activities, notes, and outcomes are logged. Your
                  team sees the full trail in one place.
                </p>
              </div>
              <div className="card">
                <h3>Reporting you can act on</h3>
                <p>
                  Weekly summary: speed-to-lead, booked calls, response rates,
                  lead sources, and pipeline hygiene.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* OFFER */}
        <section className="section anchor" id="offer">
          <div className="container">
            <div className="sectionHeader">
              <div>
                <h2>The $10k/month offer (for finance firms)</h2>
                <p>
                  A done-for-you “Revenue Response System” installed into your
                  workflows. Built to protect trust, prevent compliance
                  disasters, and increase booked appointments.
                </p>
              </div>
            </div>

            <div className="split">
              <div className="offer">
                <div className="priceRow">
                  <div>
                    <strong>Revenue Response System</strong>
                    <div className="fine">Implementation + ongoing management</div>
                  </div>
                  <div>
                    <div className="price">A$10,000 / month</div>
                    <div className="fine">Typically paid monthly • cancel anytime after month 2</div>
                  </div>
                </div>

                <ul className="list">
                  <li className="li">
                    <IconCheck />
                    <span>
                      <strong>Under-60-second first response</strong> for qualified enquiries (with strict guardrails + fallbacks).
                    </span>
                  </li>
                  <li className="li">
                    <IconCheck />
                    <span>
                      <strong>Channel ingestion</strong>: forms, inbox(es), SMS; unify into one lead pipeline.
                    </span>
                  </li>
                  <li className="li">
                    <IconCheck />
                    <span>
                      <strong>Spam & low-quality filtering</strong> using deterministic rules + model classification.
                    </span>
                  </li>
                  <li className="li">
                    <IconCheck />
                    <span>
                      <strong>Qualification + routing</strong>: intent, urgency, product type, location, budget, timeframes.
                    </span>
                  </li>
                  <li className="li">
                    <IconCheck />
                    <span>
                      <strong>Follow-up engine</strong>: multi-touch sequences, reminders, and escalation paths.
                    </span>
                  </li>
                  <li className="li">
                    <IconCheck />
                    <span>
                      <strong>CRM + calendar logging</strong>: contact creation, notes, summaries, outcomes, next steps.
                    </span>
                  </li>
                  <li className="li">
                    <IconCheck />
                    <span>
                      <strong>Weekly reporting</strong>: speed-to-lead, conversion, booked calls, and leak points.
                    </span>
                  </li>
                </ul>

                <div className="fine" style={{ marginTop: 12 }}>
                  Risk reversal: if we can’t improve your speed-to-lead and follow-up coverage in the first 30 days, we keep optimizing for free until we do (or you cancel).
                </div>

                <div className="ctaRow" style={{ marginTop: 14 }}>
                  <Link className="btn btnPrimary" href={CALENDLY_URL}>
                    Book a 15-min fit call
                  </Link>
                  <Link className="btn btnGhost" href="#apply">
                    Apply now
                  </Link>
                </div>
              </div>

              <div className="card">
                <h3>Who this is for</h3>
                <p style={{ marginBottom: 12 }}>
                  If your enquiries matter (and trust matters more), this is for you.
                </p>

                <ul className="list">
                  <li className="li">
                    <IconCheck />
                    <span>
                      Mortgage brokers & lending teams that miss leads after hours or between meetings.
                    </span>
                  </li>
                  <li className="li">
                    <IconCheck />
                    <span>
                      Accounting/financial advisory firms with slow response times and inconsistent follow-up.
                    </span>
                  </li>
                  <li className="li">
                    <IconCheck />
                    <span>
                      Any finance business where the “first 5 minutes” decides whether the prospect keeps looking.
                    </span>
                  </li>
                </ul>

                <div style={{ height: 12 }} />

                <h3>What we won’t do</h3>
                <p style={{ marginBottom: 12 }}>
                  We don’t run uncontrolled AI that can hallucinate promises or give regulated advice.
                </p>

                <ul className="list">
                  <li className="li">
                    <IconShield />
                    <span>
                      No financial advice generation. Anything sensitive triggers a human handoff.
                    </span>
                  </li>
                  <li className="li">
                    <IconShield />
                    <span>
                      No “black box” messaging. Templates + approvals + audit logs.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* IMPLEMENTATION */}
        <section className="section">
          <div className="container">
            <div className="sectionHeader">
              <div>
                <h2>Installation process (so it stays trustworthy)</h2>
                <p>
                  This is engineered like a production system: constraints, failure modes, monitoring, and safe defaults.
                </p>
              </div>
            </div>

            <div className="steps">
              <div className="step">
                <div className="stepTop">
                  <strong>Week 1 — Map your lead flow + define guardrails</strong>
                  <span className="badge">Audit</span>
                </div>
                <div className="fine">
                  We map every inbound channel → your current handling → where leads leak. Then we define allowed responses,
                  approval rules, and handoff triggers.
                </div>
              </div>

              <div className="step">
                <div className="stepTop">
                  <strong>Week 2 — Build + connect (email/SMS/CRM)</strong>
                  <span className="badge">Implementation</span>
                </div>
                <div className="fine">
                  Connect inboxes, forms, SMS, calendars, CRM. Build classification, routing, logging, and follow-up sequences.
                  Everything is testable and reversible.
                </div>
              </div>

              <div className="step">
                <div className="stepTop">
                  <strong>Week 3 — Test in parallel (no risk)</strong>
                  <span className="badge">Shadow Mode</span>
                </div>
                <div className="fine">
                  Run “shadow mode” first: the system drafts responses, classifies leads, and logs actions while humans approve.
                  We tune until it’s boringly reliable.
                </div>
              </div>

              <div className="step">
                <div className="stepTop">
                  <strong>Week 4+ — Go live + optimize weekly</strong>
                  <span className="badge">Ongoing</span>
                </div>
                <div className="fine">
                  Monitor outcomes, tighten routing, adjust follow-ups, improve lead capture, and iterate based on booked calls.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECURITY / TRUST */}
        <section className="section">
          <div className="container">
            <div className="sectionHeader">
              <div>
                <h2>Trust & controls</h2>
                <p>
                  Finance firms live or die by reputation. This is built to reduce risk—not create it.
                </p>
              </div>
            </div>

            <div className="grid3">
              <div className="card">
                <h3>Human-in-the-loop by default</h3>
                <p>
                  Sensitive or ambiguous enquiries are routed to a human with a suggested draft and context.
                </p>
              </div>
              <div className="card">
                <h3>Approved templates + safe language</h3>
                <p>
                  We use controlled response blocks (no promises, no advice, no hallucinations).
                </p>
              </div>
              <div className="card">
                <h3>Audit trails</h3>
                <p>
                  Every classification, message, and action is logged for accountability and review.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section">
          <div className="container">
            <div className="sectionHeader">
              <div>
                <h2>FAQ</h2>
                <p>Clear answers to the questions that actually matter.</p>
              </div>
            </div>

            <div className="faq">
              <details>
                <summary>Is this compliant for finance messaging?</summary>
                <p>
                  We don’t generate financial advice. Responses are constrained to acknowledgement, information gathering,
                  scheduling, and routing. Anything sensitive escalates to a human. You control templates and approvals.
                </p>
              </details>
              <details>
                <summary>Will it sound “AI-ish” or damage trust?</summary>
                <p>
                  No. The goal is professional, short, and brand-aligned. In many cases it’s simply faster and more consistent
                  than a busy human—without being pushy.
                </p>
              </details>
              <details>
                <summary>What tools can you integrate with?</summary>
                <p>
                  Common: Gmail/Outlook, Twilio, Calendly, Google Calendar, HubSpot, Pipedrive, Salesforce, Zoho, and web forms.
                  If it has an API/webhook, it’s usually doable.
                </p>
              </details>
              <details>
                <summary>What do you need from us to start?</summary>
                <p>
                  Access to the inbox/channel(s), your preferred CRM/calendar, and your current lead handling process.
                  We’ll handle the build, testing, and rollout.
                </p>
              </details>
              <details>
                <summary>How quickly can we install?</summary>
                <p>
                  Many installs go live inside 2–4 weeks depending on channel complexity and approval needs.
                </p>
              </details>
            </div>
          </div>
        </section>

        {/* APPLY */}
        <section className="section anchor" id="apply">
          <div className="container">
            <div className="sectionHeader">
              <div>
                <h2>Apply for an install slot</h2>
                <p>
                  If it’s a fit, we’ll reply with next steps and a short call.
                  If not, we’ll say so quickly—no fluff.
                </p>
              </div>
            </div>

            <div className="split">
              <div className="card">
                <h3>Application (60 seconds)</h3>

                {submitted && (
                  <div
                    className="card"
                    style={{
                      borderColor: "rgba(46,229,157,0.30)",
                      background:
                        "linear-gradient(180deg, rgba(46,229,157,0.10), rgba(255,255,255,0.015))",
                      marginBottom: 12,
                    }}
                  >
                    <strong>Submitted.</strong>
                    <p style={{ marginTop: 6 }}>
                      We received your application. If it’s a fit, we’ll reply with
                      next steps.
                    </p>
                  </div>
                )}

                {submittedFail && (
                  <div
                    className="card"
                    style={{
                      borderColor: "rgba(255,211,124,0.30)",
                      background:
                        "linear-gradient(180deg, rgba(255,211,124,0.10), rgba(255,255,255,0.015))",
                      marginBottom: 12,
                    }}
                  >
                    <strong>Missing details.</strong>
                    <p style={{ marginTop: 6 }}>
                      Please include at least a company name and email.
                    </p>
                  </div>
                )}

                <form className="form" action={submitLead}>
                  <div className="row2">
                    <label>
                      Full name
                      <input name="name" placeholder="Jane Smith" />
                    </label>
                    <label>
                      Company <span style={{ color: "var(--warn)" }}>*</span>
                      <input
                        name="company"
                        placeholder="Example Finance Group"
                        required
                      />
                    </label>
                  </div>

                  <div className="row2">
                    <label>
                      Email <span style={{ color: "var(--warn)" }}>*</span>
                      <input
                        name="email"
                        type="email"
                        placeholder="jane@example.com"
                        required
                      />
                    </label>
                    <label>
                      Phone
                      <input name="phone" placeholder="+61 ..." />
                    </label>
                  </div>

                  <div className="row2">
                    <label>
                      Website
                      <input name="website" placeholder="https://..." />
                    </label>
                    <label>
                      Your role
                      <input name="role" placeholder="Director / Broker / Ops" />
                    </label>
                  </div>

                  <label>
                    Approx. inbound enquiry volume
                    <input
                      name="volume"
                      placeholder="e.g., 10/week, 5/day, 100/month"
                    />
                  </label>

                  <label>
                    What’s your biggest leak right now?
                    <textarea
                      name="message"
                      placeholder="e.g., slow after-hours response, no follow-up, leads not routed properly, admin overload..."
                    />
                  </label>

                  <button className="btn btnPrimary" type="submit">
                    Submit application
                  </button>

                  <div className="fine">
                    Prefer direct scheduling?{" "}
                    <a className="mutedLink" href={CALENDLY_URL}>
                      Book a 15-min fit call
                    </a>
                    .
                  </div>
                </form>
              </div>

              <div className="offer">
                <div className="priceRow">
                  <div>
                    <strong>What you get in the first 30 days</strong>
                    <div className="fine">So you see value fast</div>
                  </div>
                  <span className="badge">
                    <span className="dot" aria-hidden="true" /> Fast wins
                  </span>
                </div>

                <ul className="list">
                  <li className="li">
                    <IconCheck />
                    <span>
                      A mapped lead pipeline (where leads drop + why).
                    </span>
                  </li>
                  <li className="li">
                    <IconCheck />
                    <span>
                      Under-60-second first response for legitimate enquiries.
                    </span>
                  </li>
                  <li className="li">
                    <IconCheck />
                    <span>
                      A follow-up sequence that runs automatically (and stops when they convert).
                    </span>
                  </li>
                  <li className="li">
                    <IconCheck />
                    <span>
                      Routing rules so the right person gets the right lead with context.
                    </span>
                  </li>
                  <li className="li">
                    <IconCheck />
                    <span>
                      Weekly metrics: speed-to-lead, response rates, booked calls, and leak points.
                    </span>
                  </li>
                </ul>

                <div className="ctaRow" style={{ marginTop: 14 }}>
                  <Link className="btn btnPrimary" href={CALENDLY_URL}>
                    Book a 15-min fit call
                  </Link>
                  <Link className="btn btnGhost" href="#offer">
                    Review the offer
                  </Link>
                </div>

                <div className="fine" style={{ marginTop: 12 }}>
                  Note: outcomes depend on offer quality, traffic quality, and your sales process. We focus on the controllables:
                  response speed, follow-up coverage, routing, and conversion friction.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="footer">
          <div className="container">
            <div style={{ display: "flex", justifyContent: "space-between", gap: 14, flexWrap: "wrap" }}>
              <div>
                <strong style={{ color: "var(--text)" }}>{BRAND_NAME}</strong>
                <div style={{ marginTop: 6 }}>
                  Done-for-you lead response + follow-up automation for finance firms.
                </div>
              </div>

              <div style={{ textAlign: "right" }}>
                <div>
                  <a className="mutedLink" href={CALENDLY_URL}>
                    Book a fit call
                  </a>
                </div>
                <div style={{ marginTop: 6 }}>
                  <a className="mutedLink" href="mailto:hello@yourdomain.com">
                    hello@yourdomain.com
                  </a>
                </div>
              </div>
            </div>

            <div style={{ marginTop: 16, color: "var(--muted2)" }}>
              © {new Date().getFullYear()} {BRAND_NAME}. All rights reserved.
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
