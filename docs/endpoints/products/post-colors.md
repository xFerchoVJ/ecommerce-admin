# Endpoint: PATCH/products.

Permite crear un nuevo producto.

## Parámetros del Cuerpo (JSON)

- name (obligatorio): Nombre del producto.
- price (obligatorio): Precio del producto
- isFeatured (obligatorio): Boolean para mostrar el producto en tienda
- isArchived (obligatorio): Boolean para archivar el producto
- sizeId (obligatorio): Id del tamaño
- categoryId (obligatorio): Id de la categoria
- colorId (obligatorio): Id del color
- images (obligatorio): Array de imagenes del producto (es el string de la image Url)

## Ejemplo de Solicitud

http
PATCH /{storeId}/products/{productId}
Content-Type: application/json

"name": "Tasa JS",
"price": "120",
"isFeatured": true,
"isArchived": false,
"sizeId": "4473e87b-531b-4aeb-adfb-b3fea9e9f891",
"categoryId": "9655c375-0a83-40e6-b908-b7daf87d6ddf",
"colorId": "04bcb513-9e8b-452a-9969-1ca5575b3c1e",
"images": [
{
"url": "https://res.cloudinary.com/djbzeisgm/image/upload/v1702529253/jauaf02sg9admjzssp40.png",
}
],

## Respuesta Exitosa (Código 200 OK)

json
{
"mensaje": "Producto creado exitosamente."
}

## Respuestas de Errores Posibles

- Código 404 Not Found:

  json
  {
  "error": 400,
  "error": "bad_request",
  }

- Código 500 Internal Server Error:
  json
  {
  "error": 500,
  "error": "internal_error",
  }

## Notas Adicionales

- Debes estar loggeado para hacer esta acción.
