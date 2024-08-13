import SideNav from '@/app/ui/dashboard/sidenav';
import { lusitana } from "@/app/ui/fonts";

export default async function Page() {
  return (
    <div className="flex flex-col h-screen md:flex-row md:overflow-hidden">
      <div className="flex-none w-full md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
        <main>
          <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
            Dashboard
          </h1>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* Uncomment and populate the Card components with actual data */}
            {/* <Card title="Collected" value={totalPaidInvoices} type="collected" /> */}
            {/* <Card title="Pending" value={totalPendingInvoices} type="pending" /> */}
            {/* <Card title="Total Invoices" value={numberOfInvoices} type="invoices" /> */}
            {/* <Card title="Total Customers" value={numberOfCustomers} type="customers" /> */}
          </div>
          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
            {/* Uncomment and populate the RevenueChart and LatestInvoices components with actual data */}
            {/* <RevenueChart revenue={revenue} /> */}
            {/* <LatestInvoices latestInvoices={latestInvoices} /> */}
          </div>
        </main>
      </div>
    </div>
  );
}
