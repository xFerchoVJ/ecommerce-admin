"use client";

import { useParams, useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { Plus } from "lucide-react";
import { ColorsColumn, columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";
import { ApiList } from "@/components/ui/api-list";

interface ColorsClientProps {
  data: ColorsColumn[];
}

export const ColorsClient: React.FC<ColorsClientProps> = ({ data }) => {
  const router = useRouter();
  const params = useParams();

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title={`Colores (${data.length})`}
          description="Configuración de los Colores"
        />
        <Button onClick={() => router.push(`/${params.storeId}/colors/new`)}>
          <Plus className="mr-2 h-4 w-4" />
          Nuevo Color
        </Button>
      </div>
      <Separator />
      <DataTable columns={columns} data={data} searchKey="name" />
      <Heading title="API" description="Listado de las API para los Colores" />
      <Separator />
      <ApiList entityName="colors" entityIdName="colorId" />
    </>
  );
};
