export interface Blog {
    id: number;
    slug: string;
    title: string;
    date: string;
    excerpt: string;
    abstract: string;
    image: string;
    url: string;
}

export const BLOGS: Blog[] = [
    {
        id: 1,
        slug: 'delimiting-the-doctrine',
        title: 'Delimiting the Doctrine: An Argument against Basic Structure Review of Ordinary Laws',
        date: 'May 26, 2024',
        excerpt:
            'A research paper, published in a leading Indian constitutional law journal, exploring the scope of Basic Structure Review vis-à-vis ordinary laws.',
        abstract:
            'It explores how the Basic Structure Doctrine, which was crafted by the Supreme Court to preserve the enduring identity of the Constitution, finds itself in an identity crisis in the fifty years of its existence. One prominent debate regarding the doctrine concerns its applicability to challenges against ordinary legislation. The judicial history in this regard is marred by conflicting opinions that add more to the debate than they resolve. This paper undertakes a comprehensive analysis of all the significant developments on the scope and extent of the doctrine and attempts to harmonise them piece by piece. It is observed that courts have, at times, readily extended the doctrine in testing the validity of ordinary legislation by construing the basic structure as nothing more than an interpretation emergent from a multi-provisional reading of the Constitution. Such an approach fails to appreciate that the ‘identity of the doctrine’ and the ‘method of identification of basic features’ are two different concepts. It is argued that invocation of the doctrine is not sine qua non for testing ordinary legislation based on ‘principles’ emerging from a multi-provisional interpretation of the Constitution. The sanctitude of the doctrine’s identity lies in its operation in the sphere of constitutional amendments only, and the same must be preserved.',
        image: 'commercial-litigation.png',
        url: 'https://www.calj.in/post/delimiting-the-doctrine-an-argument-against-basic-structure-review-of-ordinary-laws'
    },
    {
        id: 2,
        slug: 'learning-from-legacy',
        title: 'Learning from the Legacy: Tax treatment of Charitable Activities under GST',
        date: 'Dec 20, 2023',
        excerpt:
            'An award-winning article revisiting a long-standing debate on taxability of charitable institutions.',
        abstract:
            'It demonstrates how the very premise of a good and simple tax, which replaced the erstwhile indirect tax laws with a unified system, cast an onerous burden on the legislature to comprehensively address the complexities and controversies enduring under the said legacy laws. An area that had witnessed continued litigation under the Excise and VAT laws was the tax treatment of charitable activities. In an attempt to appreciate the position of this debate under the GST regime, this article first traces the history of the evolution of law and arrives at two primary issues that shaped the debate. First, whether charitable activities, due to their very nature, fall within the scope of a ‘business’, and second, whether the charitable institutions, due to their objective, fall within the scope of a ‘dealer’ or other taxable person, as defined under respective legislations. It is observed that the legislature has consistently sought to overcome the effects of judicial interpretations in this area, resulting in newer facets of the debate coming into play.  Thereafter, upon the application of the prevailing judicial interpretations on the definitions of ‘business’ and ‘supplier’ under the GST legislation, it is observed that the legislature has attributed the widest meanings to both of the said terms - so much so that any dealing in goods or services is a business, irrespective of the subjective-intention behind it, and any person undertaking such an activity is a supplier, irrespective of the primary or ancillary nature of the activity. It is therefore concluded that the text of the law and the relevant legislative intent does not afford any favourable or differential treatment to activities of charitable institutions inasmuch its taxability is concerned. And that is the policy of the law.',
        image: 'commercial-litigation.png',
        url: 'https://www.aiftponline.org/assets/pdf/journals/2023/December-2023.pdf'
    },
    {
        id: 3,
        slug: 'penalty-puzzle-gst',
        title: 'Penalty Puzzle under GST: Section 122 or 73/74?',
        date: 'Jul 17, 2023',
        excerpt:
            'An opinion piece on the interplay between various penalty provisions under GST.',
        abstract:
            'It is frequently seen that many show cause notices and orders issued under sections 73/74 of the CGST Act (“the Act”) propose and impose penalty under clauses (a) or (b) of section 122(2), as the case may be; whereas many others purportedly propose and consequently impose a ten percent / equivalent penalty under sections 73/74 itself, without any reference to section 122 of the Act.  This article reflects on this dichotomy and explores if sections 73/74 of the Act are independent penalty-levying provisions or a resort to section 122(2) is necessary in such notices and orders. As an interpretative exercise, it provides multiple arguments from both sides, and discusses the position under excise law too, to understand the intention of the legislature.  It finally concludes that whereas the penalty is levied under section 122; the proper officer ought to impose the same under sections 73/74 proceedings. On a parting note, it is also hinted how the CBIC has perhaps missed this nuance in one of its circulars as well.',
        image: 'commercial-litigation.png',
        url: 'https://taxguru.in/goods-and-service-tax/penalty-puzzle-gst-section-122-73-74.html'
    },
    {
        id: 4,
        slug: 'proceedings-puzzle',
        title: 'The Proceedings Puzzle: Orders in Fake-Invoicing Matters under GST',
        date: 'Jun 26, 2023',
        excerpt:
            'A research note on an often overlooked provision — Section 127 of the GST Acts.',
        abstract:
            'This note originates from a simple observation regarding many notices and orders in matters involving issuance of invoices without underlying supplies (colloquially, bogus billing or fake invoicing). It was seen that a large number of such notices and orders are issued under section 122 of the respective GST Acts; a penalty-provision that is wholly silent on the machinery aspects of the law.  Thus, this note researches on the possible origins of this practice in a CBIC circular, and analyses the scheme machinery provisions under the law. It is found that section 127 is the appropriate proceedings-provision in such, and not section 122, which is only a substantive penalty-levying provision. In this view, it is further highlighted that rule 142 of the CGST Rules, inasmuch it provides for proceedings under section 122, is beyond the scope of the parent statute, and thus, liable to be struck down as being ultra vires the CGST Act.',
        image: 'commercial-litigation.png',
        url: 'https://taxguru.in/goods-and-service-tax/proceedings-puzzle-orders-fake-invoicing-matters-gst.html'
    },
    {
        id: 5,
        slug: 'no-refund-work-contract',
        title: 'No Refund of Unutilised ITC on Works Contract for Construction Services',
        date: 'Dec 29, 2022',
        excerpt:
            'An article on contested interpretations of availability of GST refunds in construction industry.',
        abstract:
            'This sector-specific article focuses on the construction industry in India - and examines the eligibility of GST refunds of ITC that has accumulated on account of high-rated inputs (cement, formwork) and lower-rated outputs (works contract, construction services). The controversy stems from the Notification No. 15/2017 - Central Tax (Rate) dated 28.06.2017, which blocks refunds for a particular entry under Schedule II of the GST Acts viz. construction services [Entry 5(b)]. In this regard, the taxpayers have often argued that their supplies involve goods (material such as cement) as well ans services (such as construction, transportation, installation) - and thus are in nature of ‘works contract services’, which is yet another entry under Schedule II [Entry 6(a)]. This controversy has significant financial implications for the sector, as it lies on the thin line between cash refunds and unutilisable tax credits. As such, this article conducts a thorough interpretative exercise on provisions, notifications, and circulars surrounding this issue to finally conclude in favour of the Revenue with a finding that such blocking of refunds is a conscious policy decision of the government. Note: In a subsequent development after the publication of this article, the Notification No. 15/2023-CT(R) dated 19.10.2023 has put a significant portion of the controversy to rest by amending the earlier Notification 15/2017-CT(R). However, this article is still instructive on the scheme of GST law qua the construction industry.',
        image: 'commercial-litigation.png',
        url: 'https://taxguru.in/goods-and-service-tax/refund-unutilised-itc-works-contract-construction-services.html'
    },
    {
        id: 6,
        slug: 'dri-existential-crisis',
        title: "DRI's Existential Crisis: Governmental Blunder or Judicial Overlook?",
        date: 'Aug 09, 2022',
        excerpt:
            'A critique of the earlier Canon India ruling on DRI as ‘proper officers’ issue; arguing a position that was later affirmed in the review decision.',
        abstract:
            'An article written before the review decision of Canon India of 2024, taking a contrarian stance on the issue of DRI as proper officers under the Customs Act, 1962. It was a period when High Courts and Tribunals across the country were dismissing intelligence-based cases of DRI, an elite investigation wing of Central Revenue Department, by following Canon India (2021). However, as a ray of hope, the Madras High Court took it upon itself to deliver an instructive judgment in N.C. Alexander (2022), to highlight how the Supreme Court perhaps overlooked certain important provisions and notifications while arriving at its 2021 decision. This article attempts to appreciate the N.C. Alexander ratio in a comprehensive manner. It first looks at the executive and legislative responses post Canon India (2021). Then, it analyses the arguments involved from first-principles - to finally question the precedential value of Canon India (2021) based on Common Law doctrines of sub-silentio and per incuriam.',
        image: 'commercial-litigation.png',
        url: 'https://taxguru.in/custom-duty/dris-existential-crisis-governmental-blunder-judicial-overlook.html'
    }
];
