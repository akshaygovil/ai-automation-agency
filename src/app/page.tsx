// app/page.tsx
import Link from "next/link";
import { redirect } from "next/navigation";

const BRAND_NAME = "Atlas Finance Automation";
const CALENDLY_URL = "https://calendly.com/YOUR_CALENDLY/fit-call"; // <-- replace
const VSL_EMBED_URL =
  "https://www.youtube-nocookie.com/embed/YOUR_VIDEO_ID?rel=0&modestbranding=1"; // <-- replace

function CheckIcon() {
  return (
    <svg className="check" viewBox="0 0 24 24" fill="none" aria-hidden="true">
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

async function submitLead(formData: FormData) {
  "use server";

  const payload = {
    name: String(formData.get("name") || "").trim(),
    company: String(formData.get("company") || "").trim(),
    email: String(formData.get("email") || "").trim(),
    phone: String(formData.get("phone") || "").trim(),
    website: String(formData.get("website") || "").trim(),
    role: String(formData.get("role") || "").trim(),
    volume: String(formData.get("volume") || "").trim(),
    message: String(formData.get("message") || "").trim(),
    submittedAt: new Date().toISOString(),
    source: "landing-page",
  };

  if (!payload.company || !payload.email) {
    redirect("/?submitted=0#apply");
  }

  const webhook = process.env.LEAD_WEBHOOK_URL;

  // If you set LEAD_WEBHOOK_URL (e.g. to an n8n webhook), this becomes a real application capture.
  if (webhook) {
    try {
      await fetch(webhook, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });
    } catch {
      // Don’t block conversions if webhook fails. Check server logs.
    }
  } else {
    console.log("[lead]", payload);
  }

  redirect("/?submitted=1#apply");
}

type SearchParams = { submitted?: string };

export default async function Page(props: {
  searchParams?: Promise<SearchParams>;
}) {
  // ✅ Next.js (newer versions) provides searchParams as a Promise in Server Components
  const sp = (props.searchParams ? await props.searchParams : {}) as SearchParams;

  const submitted = sp.submitted === "1";
  const submittedFail = sp.submitted === "0";

  return (
    <>
      {/* Top bar */}
      <header className="topbar">
        <div className="container">
          <div className="topbarInner">
            <div className="brand">
              <div className="mark" />
              <div className="brandText">
                <strong>{BRAND_NAME}</strong>
                <span>Lead response + follow-up automation</span>
              </div>
            </div>

            <div className="navActions">
              <Link className="btn" href="#offer">
                Offer
              </Link>
              <Link className="btn btnPrimary" href={CALENDLY_URL}>
                Book 15-min fit call
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero (big text + VSL first) */}
      <main>
        <section className="hero">
          <div className="container">
            <div className="grid">
              <div>
                <div className="inlineNote">
                  <span className="dot" />
                  Built for finance: guardrails, handoffs, audit trails.
                </div>

                <h1>
                  Every inbound lead gets a reply in{" "}
                  <span style={{ color: "var(--accent2)" }}>under 60 seconds</span>
                  — and follow-up runs until they book.
                </h1>

                <p className="lead">
                  We install a done-for-you AI + automation layer that captures,
                  qualifies, routes, and follows up across email/SMS/forms (and
                  optional DMs). Your team only handles real opportunities—fast,
                  consistent, and brand-safe.
                </p>

                <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                  <Link className="btn btnPrimary" href={CALENDLY_URL}>
                    Book 15-min fit call
                  </Link>
                  <Link className="btn" href="#apply">
                    Apply
                  </Link>
                  <Link className="btn" href="#how">
                    How it works
                  </Link>
                </div>

                <div className="subtle" style={{ marginTop: 12 }}>
                  Works with Gmail/Outlook • Twilio SMS • Most CRMs via API/webhooks •
                  No “uncontrolled AI”
                </div>
              </div>

              <aside className="panel" aria-label="Video sales letter">
                <div className="panelHeader">
                  <strong>Watch the short VSL</strong>
                  <span>~6 minutes</span>
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
                <div style={{ padding: 14, display: "flex", gap: 10, flexWrap: "wrap" }}>
                  <Link className="btn btnPrimary" href={CALENDLY_URL}>
                    Book call
                  </Link>
                  <Link className="btn" href="#apply">
                    Apply
                  </Link>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* Minimal “how it works” */}
        <section className="section" id="how">
          <div className="container">
            <div className="split">
              <div className="card">
                <h2>What we install</h2>
                <p>
                  A “Revenue Response System” that sits in front of your inbound
                  channels and runs a reliable workflow: respond → qualify →
                  route → follow up → log → report.
                </p>
                <ul className="clean">
                  <li className="item">
                    <CheckIcon />
                    Fast first response (safe language + fallbacks)
                  </li>
                  <li className="item">
                    <CheckIcon />
                    Spam filtering + intent/urgency tagging
                  </li>
                  <li className="item">
                    <CheckIcon />
                    Routing rules to the right staff member
                  </li>
                  <li className="item">
                    <CheckIcon />
                    Follow-up sequences that stop when they convert
                  </li>
                  <li className="item">
                    <CheckIcon />
                    CRM + calendar logging, with audit trails
                  </li>
                </ul>
              </div>

              <div className="card">
                <h2>Trust controls</h2>
                <p>
                  Finance firms can’t afford sloppy automation. This is designed
                  to reduce risk.
                </p>
                <ul className="clean">
                  <li className="item">
                    <CheckIcon />
                    Human-in-the-loop for anything sensitive or ambiguous
                  </li>
                  <li className="item">
                    <CheckIcon />
                    Approved templates (no claims, no advice, no hallucinations)
                  </li>
                  <li className="item">
                    <CheckIcon />
                    Logged actions + message history (auditability)
                  </li>
                  <li className="item">
                    <CheckIcon />
                    Easy rollback: shadow mode before going live
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Offer */}
        <section className="section anchor" id="offer">
          <div className="container">
            <div className="split">
              <div className="card">
                <h2>The A$10k/month offer</h2>
                <p>
                  Done-for-you implementation + ongoing management. The goal is
                  simple: fewer missed enquiries, faster replies, more booked
                  calls.
                </p>

                <ul className="clean">
                  <li className="item">
                    <CheckIcon />
                    Under-60-second response for qualified inbound leads
                  </li>
                  <li className="item">
                    <CheckIcon />
                    Email + forms + SMS ingestion into one pipeline
                  </li>
                  <li className="item">
                    <CheckIcon />
                    Qualification + routing + escalation rules
                  </li>
                  <li className="item">
                    <CheckIcon />
                    Follow-up coverage (email/SMS) until they respond or book
                  </li>
                  <li className="item">
                    <CheckIcon />
                    Weekly reporting: speed-to-lead, response rate, leak points
                  </li>
                </ul>

                <div className="subtle" style={{ marginTop: 12 }}>
                  Risk reversal: if we can’t measurably improve speed-to-lead and
                  follow-up coverage in 30 days, we keep optimizing at no charge
                  until we do (or you cancel).
                </div>

                <div style={{ marginTop: 14, display: "flex", gap: 10, flexWrap: "wrap" }}>
                  <Link className="btn btnPrimary" href={CALENDLY_URL}>
                    Book 15-min fit call
                  </Link>
                  <Link className="btn" href="#apply">
                    Apply
                  </Link>
                </div>
              </div>

              <div className="card">
                <h2>Who this is for</h2>
                <p>Finance teams where the first minutes decide the outcome.</p>

                <ul className="clean">
                  <li className="item">
                    <CheckIcon />
                    Mortgage brokers / lending teams
                  </li>
                  <li className="item">
                    <CheckIcon />
                    Accounting and advisory firms
                  </li>
                  <li className="item">
                    <CheckIcon />
                    Any finance service business with missed/slow replies
                  </li>
                </ul>

                <div style={{ height: 12 }} />

                <h3>What we won’t do</h3>
                <p>
                  We won’t generate regulated advice or uncontrolled AI messages.
                  Sensitive cases always hand off to humans.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section">
          <div className="container">
            <div className="faq">
              <details>
                <summary>Does this create compliance risk?</summary>
                <p>
                  We constrain responses to acknowledgement, information gathering,
                  scheduling, and routing. Anything sensitive escalates to a human.
                  Templates and approvals are the default.
                </p>
              </details>
              <details>
                <summary>Will it sound robotic?</summary>
                <p>
                  No. The messaging is short, professional, and brand-aligned.
                  The goal is “fast + trustworthy,” not “chatty AI.”
                </p>
              </details>
              <details>
                <summary>What do you integrate with?</summary>
                <p>
                  Gmail/Outlook, web forms, Twilio SMS, calendars, and most CRMs via
                  API or webhooks. If it has an API, it’s usually workable.
                </p>
              </details>
              <details>
                <summary>How does rollout work?</summary>
                <p>
                  We start in shadow mode (drafts + classification + logs) so your
                  team can validate quality. Then we go live with guardrails.
                </p>
              </details>
            </div>
          </div>
        </section>

        {/* Apply */}
        <section className="section anchor" id="apply">
          <div className="container">
            <div className="split">
              <div className="card">
                <h2>Apply for an install slot</h2>
                <p>
                  If it’s a fit, we’ll reply with next steps. If not, we’ll say so quickly.
                </p>

                {submitted && (
                  <div
                    className="card"
                    style={{
                      borderColor: "rgba(46,229,157,.30)",
                      background: "rgba(46,229,157,.06)",
                      marginTop: 12,
                      marginBottom: 12,
                    }}
                  >
                    <h3 style={{ margin: 0 }}>Submitted.</h3>
                    <p style={{ marginTop: 6 }}>
                      We received your application. If it’s a fit, we’ll reply soon.
                    </p>
                  </div>
                )}

                {submittedFail && (
                  <div
                    className="card"
                    style={{
                      borderColor: "rgba(255,255,255,.18)",
                      background: "rgba(255,255,255,.03)",
                      marginTop: 12,
                      marginBottom: 12,
                    }}
                  >
                    <h3 style={{ margin: 0 }}>Missing details.</h3>
                    <p style={{ marginTop: 6 }}>
                      Please include at least a company name and email.
                    </p>
                  </div>
                )}

                <form action={submitLead}>
                  <div className="row2">
                    <label>
                      Full name
                      <input name="name" placeholder="Jane Smith" />
                    </label>
                    <label>
                      Company *
                      <input name="company" placeholder="Example Finance Group" required />
                    </label>
                  </div>

                  <div className="row2">
                    <label>
                      Email *
                      <input name="email" type="email" placeholder="jane@example.com" required />
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
                      Role
                      <input name="role" placeholder="Director / Broker / Ops" />
                    </label>
                  </div>

                  <label>
                    Approx inbound enquiry volume
                    <input name="volume" placeholder="e.g., 10/week, 5/day, 100/month" />
                  </label>

                  <label>
                    Biggest leak right now
                    <textarea
                      name="message"
                      placeholder="e.g., after-hours enquiries, slow reply time, no follow-up, messy routing..."
                    />
                  </label>

                  <button className="btn btnPrimary" type="submit">
                    Submit application
                  </button>

                  <div className="subtle">
                    Prefer scheduling:{" "}
                    <a className="mutedLink" href={CALENDLY_URL}>
                      Book a 15-min fit call
                    </a>
                    . Or email{" "}
                    <a className="mutedLink" href="mailto:hello@yourdomain.com">
                      hello@yourdomain.com
                    </a>
                    .
                  </div>
                </form>
              </div>

              <div className="card">
                <h2>What happens next</h2>
                <p>A simple, low-friction process.</p>

                <ul className="clean">
                  <li className="item">
                    <CheckIcon />
                    15-minute fit call (your current lead flow + goals)
                  </li>
                  <li className="item">
                    <CheckIcon />
                    Shadow mode setup (drafts + classification + logs)
                  </li>
                  <li className="item">
                    <CheckIcon />
                    Go live with guardrails + weekly optimization
                  </li>
                </ul>

                <div style={{ marginTop: 14 }}>
                  <Link className="btn btnPrimary" href={CALENDLY_URL}>
                    Book 15-min fit call
                  </Link>
                </div>

                <div className="subtle" style={{ marginTop: 12 }}>
                  Tip: the biggest wins usually come from speed-to-lead and follow-up coverage.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <div className="container" style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
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
              <div style={{ marginTop: 6 }}>© {new Date().getFullYear()}</div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
