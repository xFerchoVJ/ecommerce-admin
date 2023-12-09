import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function PATCH(
  req: Request,
  { params }: { params: { storeId: string } }
) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { name } = body;
    console.log(name);

    if (!userId) {
      return new NextResponse("Sin autorizacion", { status: 401 });
    }

    if (!name) {
      return new NextResponse("El nombre es requerido", { status: 400 });
    }

    if (!params.storeId) {
      return new NextResponse("El id de la tienda es requerido", {
        status: 400,
      });
    }

    const store = await prismadb.store.updateMany({
      where: {
        id: params.storeId,
        userId,
      },
      data: {
        name,
      },
    });

    return NextResponse.json({ store, status: 200 });
  } catch (error) {
    console.log("[STORE_PATCH]", error);
    return new NextResponse("INTERNAL ERROR", { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { storeId: string } }
) {
  try {
    const { userId } = auth();
    if (!userId) {
      return new NextResponse("Sin autorizacion", { status: 401 });
    }

    if (!params.storeId) {
      return new NextResponse("El id de la tienda es requerido", {
        status: 400,
      });
    }

    const store = await prismadb.store.deleteMany({
      where: {
        id: params.storeId,
        userId,
      },
    });

    return NextResponse.json({ store, status: 200 });
  } catch (error) {
    console.log("[STORE_DELETE]", error);
    return new NextResponse("INTERNAL ERROR", { status: 500 });
  }
}
