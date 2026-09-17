import ServiceCard from "./ServiceCard";
import Header from "./Header";

export default function Services() {
  const myServices = [
    {
      title: "Social Media & Content Marketing",
      description:
        "Build an engaged audience and amplify your brand presence across key platforms",
      iconName: "message-square-heart",
      bullets: [
        "Platform Content Strategy & Visual Asset Creation",
        "Community Management & Engagement Workflows",
        "Paid Social Growth & Influencer Partnerships",
        "Monthly Analytics & Strategy Reporting",
      ],
    },
    {
      title: "Search Engine Optimization (SEO)",
      description:
        "Dominate search results and attract high-intent organic traffic that converts.",
      iconName: "search",
      bullets: [
        "Strategic Keyword Research & Competitor Analysis",
        "On-Page Optimization & Content Structuring",
        "Technical SEO Audits & Speed Performance",
        "Quality Backlink Acquisition & Authority Building",
      ],
    },
    {
      title: "Pay Per Click (PPC) Management",
      description:
        "Drive immediate, scalable sales with high-ROI paid ad campaigns.",
      iconName: "target",
      bullets: [
        "Targeted Campaign Setup for Google & Meta Ads",
        "Audience Segmentation & Retargeting Workflows",
        "Ad Copywriting & High-Converting Creative Design",
        "Daily Bid Management & Performance Optimization",
      ],
    },
  ];
  return (
    <>
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <Header text="Our Core Services" id="services" color="text-blue-950" />
      </div>
      <div className="w-full px-6 sm:px-8">
        <p className="mx-auto mt-4 mb-4 max-w-2xl text-center leading-relaxed text-blue-950">
          Tailored digital marketing strategies designed to scale your business
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  justify-items-center mt-8 mb-8 gap-8">
        {myServices.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            iconName={service.iconName}
            bullets={service.bullets}
            style={{ animationDelay: `${index * 120}ms` }}
            // className="hover:scale-105 transition-transform duration-300"
          />
        ))}
      </div>
    </>
  );
}
