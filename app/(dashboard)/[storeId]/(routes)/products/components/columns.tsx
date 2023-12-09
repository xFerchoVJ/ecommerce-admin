"use client";

import { ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./cell-action";

export type ProductColumn = {
  id: String;
  name: String;
  isFeatured: Boolean;
  isArchived: Boolean;
  price: String;
  category: String;
  size: String;
  color: String;
  createdAt: string;
};

export const columns: ColumnDef<ProductColumn>[] = [
  {
    accessorKey: "name",
    header: "Nombre",
  },
  {
    accessorKey: "isArchived",
    header: "Archivado",
    cell: ({ row }) => (row.original.isArchived ? "Si" : "No"),
  },
  {
    accessorKey: "isFeatured",
    header: "Destacado",
    cell: ({ row }) => (row.original.isFeatured ? "Si" : "No"),
  },
  {
    accessorKey: "price",
    header: "Precio",
  },
  {
    accessorKey: "category",
    header: "Categoria",
  },
  {
    accessorKey: "size",
    header: "Tamaño",
  },
  {
    accessorKey: "color",
    header: "Color",
    cell: ({ row }) => (
      <div className="flex items-center gap-x-2">
        {row.original.color}
        <div
          className="h-6 w-6 rounded-full border"
          style={{ backgroundColor: row.original.color.toString() }}
        />
      </div>
    ),
  },
  {
    accessorKey: "createdAt",
    header: "Fecha de Creacion",
  },
  {
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
