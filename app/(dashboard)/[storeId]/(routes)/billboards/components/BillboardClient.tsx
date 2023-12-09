"use client";

import { useParams, useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { Plus } from "lucide-react";
import { BillboardColumn, columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";
import { ApiList } from "@/components/ui/api-list";

interface BillboardClientProps {
  data: BillboardColumn[];
}

export const BillboardClient: React.FC<BillboardClientProps> = ({ data }) => {
  const router = useRouter();
  const params = useParams();

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title={`Publicidades (${data.length})`}
          description="Configuración de las Publicidades"
        />
        <Button
          onClick={() => router.push(`/${params.storeId}/billboards/new`)}
        >
          <Plus className="mr-2 h-4 w-4" />
          Nueva Publicidad
        </Button>
      </div>
      <Separator />
      <DataTable columns={columns} data={data} searchKey="label" />
      <Heading
        title="API"
        description="Listado de las API para las Publicidades"
      />
      <Separator />
      <ApiList entityName="billboards" entityIdName="billboardId" />
    </>
  );
};
