import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs";

import prismadb from "@/lib/prismadb";

export async function POST(
  req: Request,
  { params }: { params: { storeId: string } }
) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { label, imageUrl } = body;

    if (!userId) {
      return new NextResponse("No loggeado", { status: 401 });
    }

    if (!label) {
      return new NextResponse("El nombre es requerido", { status: 400 });
    }

    if (!imageUrl) {
      return new NextResponse("La url de la imagen es requerida", {
        status: 400,
      });
    }

    if (!params.storeId) {
      return new NextResponse("El id de la tienda es requerido", {
        status: 400,
      });
    }

    const storeByUserId = await prismadb.store.findFirst({
      where: {
        id: params.storeId,
        userId,
      },
    });

    if (!storeByUserId) {
      return new NextResponse("No autorizado", { status: 403 });
    }

    const billboard = await prismadb.billBoard.create({
      data: {
        label,
        imageUrl,
        storeId: params.storeId,
      },
    });

    return NextResponse.json(billboard);
  } catch (error) {
    console.log("[BILLBOARDS_POST]", error);
    return new NextResponse("INTERNAL ERROR", { status: 500 });
  }
}

export async function GET(
  req: Request,
  { params }: { params: { storeId: string } }
) {
  try {
    if (!params.storeId) {
      return new NextResponse("El id de la tienda es requerido", {
        status: 400,
      });
    }

    const billboard = await prismadb.billBoard.findMany({
      where: {
        storeId: params.storeId,
      },
    });

    return NextResponse.json(billboard);
  } catch (error) {
    console.log("[BILLBOARDS_GET]", error);
    return new NextResponse("INTERNAL ERROR", { status: 500 });
  }
}
