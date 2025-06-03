import StatsCard from "@/components/Shared/Cards/StatsCard";

const HomePage = () => {
  return (
    <section className="py-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        <StatsCard
          title="Total Revenue"
          amount="$1,250.00"
          value="+12.5%"
          info="Visitors for the last 6 months"
        />
        <StatsCard
          title="New Customers"
          amount="1,234"
          value="+12.5%"
          info="Acquisition needs attention"
        />
        <StatsCard
          title="Active Accounts"
          amount="45,678"
          value="+12.5%"
          info="Engagement exceed targets"
        />
        <StatsCard
          title="Growth Rate"
          amount="4.5%"
          value="+12.5%"
          info="Meets growth projections"
        />
      </div>
    </section>
  );
};

export default HomePage;
