"use client";

import { useParams, useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { Plus } from "lucide-react";
import { SizesColumn, columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";
import { ApiList } from "@/components/ui/api-list";

interface SizesClientProps {
  data: SizesColumn[];
}

export const SizesClient: React.FC<SizesClientProps> = ({ data }) => {
  const router = useRouter();
  const params = useParams();

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title={`Tamaños (${data.length})`}
          description="Configuración de los Tamaños"
        />
        <Button onClick={() => router.push(`/${params.storeId}/sizes/new`)}>
          <Plus className="mr-2 h-4 w-4" />
          Nuevo Tamaño
        </Button>
      </div>
      <Separator />
      <DataTable columns={columns} data={data} searchKey="name" />
      <Heading title="API" description="Listado de las API para los Tamaños" />
      <Separator />
      <ApiList entityName="sizes" entityIdName="sizeId" />
    </>
  );
};
