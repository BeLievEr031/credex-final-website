import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar"
import Footer from "../sections/common/Footer"


function SingleBlog3() {
    return (
        <main className="pt-40 md:pt-48 font-pp-mori-regular">
            <Navbar />
            <section className="px-3 md:px-24">
                <div>
                    <h1 className="font-semibold font-pp-mori-semibold text-[32px] md:text-[48px] leading-tight">
                        The Unit Economics of Virality: How We Scaled Gemini 1.5 Pro to 50k Users Without Going Bankrupt
                    </h1>
                    <BlogImg
                        src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*MlMUXF54yNChRizfRuWCow.png" />
                </div>
                <div className="grid md:grid-cols-[1fr_3fr] pt-10 md:pt-24">
                    <div>
                        <p className="font-pp-mori-regular tracking-widest">Dec 18, 2025</p>
                        <p>By Credex</p>
                    </div>
                    <div className="space-y-10 md:space-y-20 mt-4 md:mt-0">

                        <div className="">
                            <p className="text-[#19363FB2] md:text-xl mt-4">
                                Three days ago, <b>Docket had</b> 200 total users. Today, they broke 50,000.
                            </p>
                            <p className="text-[#19363FB2] md:text-xl mt-4">
                                Their new AI feature, a risk analysis engine powered by <b>Google Vertex AI</b> and <b>Gemini 1.5 Pro </b> had gone absolutely viral. A partner at a Tier-1 law firm had tweeted about it, and suddenly, every junior associate in Manhattan was uploading 200-page merger agreements.
                            </p>

                            <p className="text-[#19363FB2] md:text-xl mt-4">The product was magical. You could upload a massive legal document, and within 90 seconds, the AI would flag specific liability risks, cross-referencing them against 50+ uploaded legal precedents.</p>

                            <p className="text-[#19363FB2] md:text-xl mt-4">
                                Alex should have been ordering champagne. Instead, he was staring at <b>Google Cloud Platform (GCP)</b> billing console with the specific type of nausea usually reserved for a lawsuit.
                            </p>

                            <p className="text-[#19363FB2] md:text-xl mt-4">Yesterday’s GCP bill: $14,847.</p>
                            <br />
                            <BlogImg src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*zps5EAqo43zUvPzoYjdbMA.png" />

                            <p className="text-[#19363FB2] md:text-xl mt-4">Budgeted Monthly Spend: $3,000.</p>
                            <p className="text-[#19363FB2] md:text-xl mt-4">At this run rate, the company had exactly 41 days of cash left.</p>
                            <p className="text-[#19363FB2] md:text-xl mt-4">This is the story of how we almost died from success, and how we fixed our unit economics in 48 hours using a secondary infrastructure market I didn’t even know existed..</p>
                            <br />
                            <h1 className="md:text-3xl text-2xl font-semibold font-pp-mori-semibold">
                                Part 1: The “Unshippable” Innovation
                            </h1>

                            <p className="text-[#19363FB2] md:text-xl mt-4">
                                To understand why we were burning cash so fast, you have to understand the architecture. We didn’t choose Google Gemini 1.5 Pro because it was trendy. We chose it because nothing else worked.
                            </p>
                            <p className="text-[#19363FB2] md:text-xl mt-4">
                                <p>Docket</p> started as a boring document management platform. We had 11 months of runway left from our Seed round and mediocre growth. We needed a differentiator.
                            </p>
                            <p className="text-[#19363FB2] md:text-xl mt-4">
                                When Google released Gemini 1.5 Pro with its <b>2 million token context window</b>, my co-founder Emma saw the opening immediately.
                            </p>
                            <p className="text-[#19363FB2] md:text-xl mt-4">
                                “Most legal AI is garbage,” she argued. “It chunks documents. It summarizes Section A, then summarizes Section B, and loses the connection between them. Law relies on context. If a clause on Page 5 contradictions a definition on Page 140, a standard RAG (Retrieval-Augmented Generation) pipeline misses it.”
                            </p>
                            <p className="text-[#19363FB2] md:text-xl mt-4"><b>Gemini was different.</b> It could ingest:</p>

                            <ul className="flex flex-col gap-4">
                                <li>The full 200-page agreement.</li>
                                <li>Decades of case law.</li>
                                <li>Client-specific guidelines.</li>
                                <li>State regulations.</li>
                            </ul>
                            <p className="text-[#19363FB2] md:text-xl mt-4"><b>All in a single prompt.</b></p>
                            <p className="text-[#19363FB2] md:text-xl mt-4">We built the prototype in Google Vertex AI Studio. The results were terrifyingly good. It didn’t just summarize; it reasoned. It found “orphaned references” that human lawyers missed.</p>
                            <p className="text-[#19363FB2] md:text-xl mt-4">We launched the “AI Risk Analyzer” on Tuesday. By Friday, we were the hottest startup in LegalTech.</p>
                            <br />

                            <div className="">
                                <h1 className="md:text-3xl text-2xl font-semibold font-pp-mori-semibold">Part 2: The Math That Kills You</h1>
                                <p className="text-[#19363FB2] md:text-xl mt-4">Here is the dirty secret of GenAI startups: Product-Market Fit is often inversely correlated with Gross Margins..</p>


                                <p className="text-[#19363FB2] md:text-xl mt-4">When users love your product, they use it heavily. If your unit economics are negative, virality is a death sentence.</p>
                                <p className="text-[#19363FB2] md:text-xl mt-4">
                                    Here was our math:
                                </p>
                                <p className="text-[#19363FB2] md:text-xl mt-4">
                                    Average Contract: 150 pages (approx. 100k tokens). <br />
                                    Context Material: Case law & precedents (approx. 400k tokens). <br />
                                    Output: Detailed risk memo (approx. 50k tokens). <br />
                                    Total Context per Query: ~550,000 tokens. <br />
                                </p>
                                <p className="text-[#19363FB2] md:text-xl mt-4">
                                    The Vertex AI Bill:                                </p>
                                <p className="text-[#19363FB2] md:text-xl mt-4">
                                    <b>  Input Cost</b>: $1.25 per 1M tokens. <br />
                                    <b> Output Cost: </b>$5.00 per 1M tokens. <br />
                                    <b>Vector Search & Storage:</b> ~$0.30 per query. <br />
                                </p>
                                <p className="text-[#19363FB2] md:text-xl mt-4"><b>Total Cost Per Analysis: ~$4.73.</b></p>
                                <p className="text-[#19363FB2] md:text-xl mt-4">We offered a “Freemium” model: 5 Free Analyses to prove value, then $99/month.</p>
                                <p className="text-[#19363FB2] md:text-xl mt-4">With 50,000 users redeeming their free credits:</p>
                                <p className="text-[#19363FB2] md:text-xl mt-4"><b>50,000 users × 5 analyses × $4.73 = $1,182,500.</b></p>
                                <p className="text-[#19363FB2] md:text-xl mt-4">We had $800,000 in the bank.</p>
                                <br />

                            </div>

                            <div className="">
                                <h1 className="md:text-3xl text-2xl font-semibold font-pp-mori-semibold">The Emergency Board Meeting</h1>
                                <div>

                                    <p className="text-[#19363FB2] md:text-xl mt-4">
                                        Wednesday, 9:00 AM. Zoom.
                                    </p>

                                    <p className="text-[#19363FB2] md:text-xl mt-4">
                                        “Walk me through the cohort retention,” said Sarah, our lead investor.
                                    </p>

                                    <p className="text-[#19363FB2] md:text-xl mt-4">
                                        “Retention is incredible,” Emma said, pulling up the charts. “If we convert just 8% of these users, we hit $400k MRR next month. We skip Series A and go straight to Series B metrics.”
                                    </p>

                                    <p className="text-[#19363FB2] md:text-xl mt-4">
                                        “Great,” Sarah said. “And the burn?”
                                    </p>

                                    <p className="text-[#19363FB2] md:text-xl mt-4">
                                        “We are burning $47,000 a day on computation.”
                                    </p>

                                    <p className="text-[#19363FB2] md:text-xl mt-4">
                                        The silence on the call lasted a full ten seconds.
                                    </p>

                                    <p className="text-[#19363FB2] md:text-xl mt-4">
                                        “You have two options,” Sarah said, her voice flat. “Turn off the free tier, or switch to a cheaper model. You cannot raise a bridge round on negative gross margins. VCs fund growth; they don’t fund charity.”
                                    </p>
                                </div>

                            </div>


                            <div className="">
                                <h1 className="md:text-3xl text-2xl font-semibold font-pp-mori-semibold">Part 3: The Optimization Trap</h1>


                                <div>
                                    <p className="text-[#19363FB2] md:text-xl mt-4">
                                        For the next 24 hours, Emma and I tried to “engineer” our way out of the hole. This is the trap every technical founder falls into. We assumed the solution was in the code.
                                    </p>

                                    <p className="text-[#19363FB2] md:text-xl mt-4">
                                        Attempt 1: Switch to GPT-4o or Llama 3
                                    </p>

                                    <p className="text-[#19363FB2] md:text-xl mt-4">
                                        We ran benchmarks. While excellent for reasoning, the context window management on the open-source models (hosted on cheaper GPUs) was a nightmare. The “hallucination rate” on legal citations jumped from 0.2% to 14%. In law, a 14% error rate gets you sued.
                                    </p>

                                    <p className="text-[#19363FB2] md:text-xl mt-4">
                                        Result: Rejected.
                                    </p>

                                    <p className="text-[#19363FB2] md:text-xl mt-4">
                                        Attempt 2: RAG & Chunking
                                    </p>
                                    <BlogImg
                                        src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*WShmYpQqzHUFskSJp48buw.png" />
                                    <p className="text-[#19363FB2] md:text-xl mt-4">
                                        We tried breaking the contracts into smaller pieces to reduce token count. The AI immediately lost the ability to spot cross-document conflicts, the very feature that made us viral.
                                    </p>

                                    <p className="text-[#19363FB2] md:text-xl mt-4">
                                        Result: Product became mediocre.
                                    </p>
                                    <BlogImg
                                        src="https://miro.medium.com/v2/resize:fit:4800/format:webp/1*UFy0w6fwScmTx4h_L1UkUA.png" />
                                    <p className="text-[#19363FB2] md:text-xl mt-4">
                                        Attempt 3: Kill the Free Tier
                                    </p>

                                    <p className="text-[#19363FB2] md:text-xl mt-4">
                                        We A/B tested reducing the free tier from 5 docs to 1 doc.
                                    </p>

                                    <p className="text-[#19363FB2] md:text-xl mt-4">
                                        Conversion rate dropped from 12% to 1.5%.
                                    </p>
                                    <p className="text-[#19363FB2] md:text-xl mt-4">
                                        Users needed to see the magic on multiple document types to trust it with their credit card.
                                    </p>
                                    <p className="text-[#19363FB2] md:text-xl mt-4">
                                        We were stuck. We had built a Ferrari engine that consumed fuel faster than we could pour it in.
                                    </p>

                                </div>
                            </div>

                            <div className="">
                                <h1 className="md:text-3xl text-2xl font-semibold font-pp-mori-semibold">Part 4: The Discovery</h1>

                                <p className="text-[#19363FB2] md:text-xl mt-4">
                                    Thursday, 2:00 AM.
                                </p>

                                <p className="text-[#19363FB2] md:text-xl mt-4">
                                    I was in a private Slack community for YC founders, doom-scrolling through the #infrastructure channel. I typed out a desperate message:
                                </p>

                                <BlogImg
                                    src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*ZkYdB6vWtIAV_2aj1nk-zA.png" />

                                <p className="text-[#19363FB2] md:text-xl mt-4">
                                    “Anyone scaling on Vertex AI/Gemini? Our bill just crossed $50k/month and we’re barely a week into launch. Unit economics are underwater. Is there a secret volume tier I’m missing?”
                                </p>

                                <p className="text-[#19363FB2] md:text-xl mt-4">
                                    Twenty minutes later, a founder I respected, Dev, who runs a massive video-processing AI startup replied.
                                </p>

                                <p className="text-[#19363FB2] md:text-xl mt-4">
                                    @Dev: “Don’t pay retail, man. Retail cloud pricing is for suckers and enterprises who don’t care. Check the secondary markets. We cut our GCP bill by 50% using Credex.”
                                </p>

                                <p className="text-[#19363FB2] md:text-xl mt-4">
                                    I clicked the link. It described itself as a <b>“Verified Marketplace for Unused Cloud Credits.”</b>
                                </p>

                                <p className="text-[#19363FB2] md:text-xl mt-4">
                                    My scam radar went off immediately. Buying cloud credits? Is that even legal?
                                </p>

                                <p className="text-[#19363FB2] md:text-xl mt-4">
                                    But Dev was a serious operator. So I dug in. I read their documentation. I read the legal frameworks. I looked at the testimonials.
                                </p>
                                <br />
                            </div>

                            <div className="">
                                <h1 className="md:text-3xl text-2xl font-semibold font-pp-mori-semibold">The Logic of the Marketplace:</h1>
                                <BlogImg
                                    src="https://miro.medium.com/v2/resize:fit:786/format:webp/1*EMKmebCajX_aZyzKlK2ePw.png" />


                                <p className="text-[#19363FB2] md:text-xl mt-4">
                                    1. <b>The Supply:</b> Every year, Google, AWS, and Azure grant hundreds of millions of dollars in credits to startups (via accelerators like YC, Techstars, etc.).
                                </p>

                                <p className="text-[#19363FB2] md:text-xl mt-4">
                                    2. <b>  The Waste:</b> 70% of those startups fail, pivot, or simply don’t use the credits before they expire. That is billions of dollars of “compute inventory” vanishing into thin air.
                                </p>



                                <p className="text-[#19363FB2] md:text-xl mt-4">
                                    3. <b> The Arbitrage:</b> Credex buys those accounts from the failed/pivoted startups (recovering some cash for them) and resells the access to scaling companies (like us) at a steep discount.
                                </p>

                                <p className="text-[#19363FB2] md:text-xl mt-4"><b>It wasn’t a “hack.” It was market efficiency.</b></p>

                            </div>

                            <div className="">
                                <h1 className="md:text-3xl text-2xl font-semibold font-pp-mori-semibold">Part 5: The Turnaround</h1>



                                <p className="text-[#19363FB2] md:text-xl mt-4">
                                    By Friday morning, we were on a call with the Credex team.
                                </p>

                                <p className="text-[#19363FB2] md:text-xl mt-4">
                                    “I need to know two things,” I told them. “Is this safe, and do I have to rewrite my code?”
                                </p>

                                <p className="text-[#19363FB2] md:text-xl mt-4">
                                    The account manager, Jordan, didn’t give me a sales pitch. He walked me through the mechanics.
                                </p>
                                <BlogImg
                                    src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*w3mV71rfhAS877IA2-tvNQ.png" />

                                <p className="text-[#19363FB2] md:text-xl mt-4">
                                    <b>1. The Safety Protocol:</b>
                                </p>

                                <p className="text-[#19363FB2] md:text-xl mt-4">
                                    “We don’t just hand you a login,” Jordan explained. “We execute a full Ownership Transfer. You get the root admin credentials. The original owner is removed. We sign Mutual NDAs. Plus, we only source from verified US/EU entities. If Google ever flags the account (which hasn’t happened in 18 months), we have a 100% Replacement Guarantee.”
                                </p>


                                <p className="text-[#19363FB2] md:text-xl mt-4">
                                    <b>2. The “No-Code” Migration:</b>
                                </p>

                                <p className="text-[#19363FB2] md:text-xl mt-4">
                                    “You’re currently hitting the Vertex API using a Service Account Key from Project A,” Jordan said. “If you buy a package from us, we give you Project B. You generate a new Service Account Key. You swap the JSON file in your backend. You redeploy. That’s it.”
                                </p>
                                <p className="text-[#19363FB2] md:text-xl mt-4">
                                    <b>3. The Offer:</b>
                                </p>

                                <p className="text-[#19363FB2] md:text-xl mt-4">
                                    They had a $350,000 Google Cloud Credit package available.
                                    <br />
                                    Cost to us: ~$140,000.
                                    <br />
                                    Discount: 60% OFF.
                                    <br />
                                    I did the mental math.
                                    <br />
                                    If we bought this, our cost per analysis dropped from $4.73 to $1.89.
                                    <br />
                                    At $1.89, our unit economics were… profitable.
                                    <br />
                                    We signed the contract that afternoon.
                                </p>
                                <br />
                            </div>

                            <div className="">
                                <h1 className="md:text-3xl text-2xl font-semibold font-pp-mori-semibold">The Migration (It took 4 hours)</h1>


                                <p className="text-[#19363FB2] md:text-xl mt-4">
                                    The “migration” was laughably simple compared to the engineering overhauls we had been considering.
                                </p>

                                <p className="text-[#19363FB2] md:text-xl mt-4">
                                    1. Received credentials for the new GCP account.
                                    <br />
                                    2. Enabled the Vertex AI API.
                                    <br />
                                    3. Requested a quota increase (these were Tier 5 accounts, so the approval was
                                    instant). <br />
                                    4. Swapped the API keys in our environment variables. <br />
                                    5. Hit git push.
                                </p>


                                <BlogImg
                                    src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*v0JRLChTanjFjjG3LOSY3A.png" />

                                <p className="text-[#19363FB2] md:text-xl mt-4">
                                    Saturday Morning: The New Dashboard
                                </p>


                                <p className="text-[#19363FB2] md:text-xl mt-4">
                                    I checked the billing.
                                </p>
                                <p className="text-[#19363FB2] md:text-xl mt-4">
                                    Cost incurred: $22,000 (in credits).
                                </p>
                                <p className="text-[#19363FB2] md:text-xl mt-4">
                                    Real cash cost to us: $8,800.
                                </p>
                                <p className="text-[#19363FB2] md:text-xl mt-4">
                                    We were no longer bleeding out. We were building a war chest.
                                </p>

                            </div>

                            <div className="">
                                <h1 className="md:text-3xl text-2xl font-semibold font-pp-mori-semibold">Part 6: From Defense to Offense</h1>

                                <p className="text-[#19363FB2] md:text-xl mt-4">
                                    The psychological shift that happens when you fix your unit economics is profound.
                                </p>

                                <p className="text-[#19363FB2] md:text-xl mt-4">
                                    On Wednesday, we were discussing layoffs and killing the free tier.
                                </p>

                                <p className="text-[#19363FB2] md:text-xl mt-4">
                                    On Monday, with our infrastructure costs slashed by 60%, we went on the offensive.
                                </p>


                                <p className="text-[#19363FB2] md:text-xl mt-4">
                                    <b>1. We Doubled Down on the Free Tier</b>
                                </p>

                                <p className="text-[#19363FB2] md:text-xl mt-4">
                                    Competitors were tightening their belts; we expanded our free trial to include “Historical Analysis” of past contracts. Why? Because at $1.89 per query, we could afford to acquire customers aggressively.
                                </p>
                                <p className="text-[#19363FB2] md:text-xl mt-4">
                                    <b>2. We Kept Our Pricing Competitive</b>
                                </p>

                                <p className="text-[#19363FB2] md:text-xl mt-4">
                                    We locked in our $99/mo price point. Competitors using standard GCP pricing literally could not match us without losing money. We had an invisible moat built on better procurement.
                                </p>
                                <p className="text-[#19363FB2] md:text-xl mt-4">
                                    <b>3. We Scaled Confidence</b>
                                </p>

                                <p className="text-[#19363FB2] md:text-xl mt-4">
                                    When you know your infrastructure is 60% cheaper than the market rate, you build differently. We launched features like “M&A Due Diligence Automation” heavy compute tasks that we previously thought were too expensive to run.
                                </p>
                                <BlogImg
                                    src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*OQglUVKlQ34enE2V5avKTg.png" />

                            </div>
                            <br />
                            <div className="">
                                <h1 className="md:text-3xl text-2xl font-semibold font-pp-mori-semibold">The Result</h1>

                                <p className="text-[#19363FB2] md:text-xl mt-4">
                                    Three months later (today):
                                </p>
                                <p className="text-[#19363FB2] md:text-xl mt-4">
                                    <b> - Users: 180,000+</b> <br />
                                    <b>  - MRR: $1.7M</b> <br />
                                    <b> - Gross Margin: 68% (up from -12%) </b><br />
                                </p>

                                <p className="text-[#19363FB2] md:text-xl mt-4">
                                    We closed our Series A last week. The first slide in our pitch deck wasn’t our team or our TAM. It was a chart showing our Customer Acquisition Cost vs. Lifetime Value, underpinned by our optimized infrastructure costs.
                                </p>
                            </div>
                            <br />
                            <div className="">
                                <h1 className="md:text-3xl text-2xl font-semibold font-pp-mori-semibold">The Lesson: Procurement is a competitive advantage</h1>

                                <p className="text-[#19363FB2] md:text-xl mt-4">
                                    Founders obsess over code quality, design, and sales. But in the AI era, <b>computation is your COGS (Cost of Goods Sold).</b>
                                </p>
                                <p className="text-[#19363FB2] md:text-xl mt-4">
                                    If you are a manufacturing company, you don’t buy steel at retail prices from Home Depot. You buy wholesale.
                                </p>
                                <p className="text-[#19363FB2] md:text-xl mt-4">
                                    Yet, thousands of AI startups are buying their “raw material” (tokens/compute) at full retail price from Google and AWS.
                                </p>
                                <p className="text-[#19363FB2] md:text-xl mt-4">
                                    Credex wasn’t just a vendor we used; it was the cheat code that allowed us to survive our own viral success.
                                </p>
                                <p className="text-[#19363FB2] md:text-xl mt-4">
                                    If you are building on Vertex AI, AWS Bedrock, Anthropic, Claude or OpenAI, and you are terrified of your next bill, stop trying to optimize your prompts.
                                </p>
                                <p className="text-[#19363FB2] md:text-xl mt-4">
                                    Optimize your bill.
                                </p>
                                <p className="text-[#19363FB2] md:text-xl mt-4">
                                    There is a secondary market for this stuff. It is legitimate, it is massive, and it is the only way to scale unit economics in the age of heavy computations.
                                </p>
                                <p className="text-[#19363FB2] md:text-xl mt-4">
                                    Don’t let a cloud bill kill your unicorn.
                                </p>
                                <p className="text-[#19363FB2] md:text-xl mt-4">
                                    Ready to fix your margins?
                                </p>
                                <p className="text-[#19363FB2] md:text-xl mt-4">
                                    Check out Credex.
                                </p>
                                <p className="text-[#19363FB2] md:text-xl mt-4">
                                    Up to 60% off AWS, GCP, Anthropic, Claude and OpenAI credits. <br />
                                    Verified Accounts (Tier 5 / Enterprise). <br />
                                    Secure Transfer with full guarantees.
                                    <br />
                                    <br />
                                </p>

                            </div>

                            <div className="border-l-1 border-l-black pl-6 italic w-[75%]">

                                <p className="md:text-xl mt-4">

                                    FlowGuard AI is a fictional company, but the challenges, economics, and solutions in
                                    this
                                    story are drawn from real conversations with dozens of AI-first startups navigating the
                                    same
                                    infrastructure cost crisis in 2024–2025. The Credex model described here buying unused
                                    but
                                    verified cloud and AI credits at significant discounts with full ownership transfer,
                                    top-tier rate limits, NDA protection, and refund guarantees represents an emerging
                                    category
                                    in AI infrastructure that’s helping founders turn LLM costs from an existential threat
                                    into
                                    a strategic advantage.
                                </p>

                                <p className="md:text-xl mt-4">

                                    For founders exploring LLM cost optimization, buying OpenAI API credits at a discount,
                                    or
                                    finding partners who offer 24/7 personalized AI infrastructure support with replacement
                                    guarantees, the question isn’t whether these solutions exist, it’s whether you’ll
                                    discover them before your runway runs out.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    )
}

export default SingleBlog3;

function BlogImg({ src }: { src: string }) {
    return (
        <div>
            <div className="w-full md:h-[500px] bg-black rounded-xl mt-10 overflow-hidden">
                <img src={src} alt="" className="w-full object-cover h-full" />
            </div>
        </div>
    )
}

// function P() {
//     return <p className="text-[#19363FB2] md:text-xl mt-4">
//         <Outlet />
//     </p>
// }

// function H1() {
//     return <h1 className="md:text-3xl text-2xl font-semibold font-pp-mori-semibold">
//         <Outlet />
//     </h1>
// }