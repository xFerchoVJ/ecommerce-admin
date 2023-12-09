import es from "date-fns/locale/es";
import { format } from "date-fns";

import prismadb from "@/lib/prismadb";
import { BillboardClient } from "./components/BillboardClient";
import { BillboardColumn } from "./components/columns";

const BillboardsPage = async ({ params }: { params: { storeId: string } }) => {
  const billBoards = await prismadb.billBoard.findMany({
    where: {
      storeId: params.storeId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const locale = es;

  const formattedBillboards: BillboardColumn[] = billBoards.map((item) => ({
    id: item.id,
    label: item.label,
    createdAt: format(item.createdAt, "MMMM d, yyyy h:mm a", { locale }),
  }));

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <BillboardClient data={formattedBillboards} />
      </div>
    </div>
  );
};

export default BillboardsPage;
