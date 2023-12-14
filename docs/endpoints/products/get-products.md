# Endpoint: GET /products

Permite obtener información detallada sobre todos los colores disponibles


## Ejemplo de Solicitud
http
GET {storeId}/products


## Respuesta Exitosa (Código 200 OK)
json

[
  {
    "id": "f0bd2198-6ec5-4101-b5aa-6a9903639873",
    "name": "Tasa JS",
    "price": "120",
    "isFeatured": true,
    "isArchived": false,
    "sizeId": "4473e87b-531b-4aeb-adfb-b3fea9e9f891",
    "storeId": "c3b6ceb5-06e5-41a5-9571-0d9a1f315951",
    "categoryId": "9655c375-0a83-40e6-b908-b7daf87d6ddf",
    "colorId": "04bcb513-9e8b-452a-9969-1ca5575b3c1e",
    "createdAt": "2023-12-14T04:47:50.793Z",
    "updatedAt": "2023-12-14T04:47:50.793Z",
    "images": [
      {
        "id": "4f4d76e4-1535-480f-8ed9-f270e13542af",
        "productId": "f0bd2198-6ec5-4101-b5aa-6a9903639873",
        "url": "https://res.cloudinary.com/djbzeisgm/image/upload/v1702529253/jauaf02sg9admjzssp40.png",
        "createdAt": "2023-12-14T04:47:50.793Z",
        "updatedAt": "2023-12-14T04:47:50.793Z"
      }
    ],
    "category": {
      "id": "9655c375-0a83-40e6-b908-b7daf87d6ddf",
      "storeId": "c3b6ceb5-06e5-41a5-9571-0d9a1f315951",
      "billboardId": "92328220-c0c4-4ba9-ac6b-ccd2c567d9ae",
      "name": "testing",
      "createdAt": "2023-12-14T04:33:13.579Z",
      "updatedAt": "2023-12-14T04:33:13.579Z"
    },
    "color": {
      "id": "04bcb513-9e8b-452a-9969-1ca5575b3c1e",
      "name": "black",
      "value": "#000",
      "storeId": "c3b6ceb5-06e5-41a5-9571-0d9a1f315951",
      "createdAt": "2023-12-14T04:39:22.609Z",
      "updatedAt": "2023-12-14T04:39:22.609Z"
    },
    "size": {
      "id": "4473e87b-531b-4aeb-adfb-b3fea9e9f891",
      "name": "Mediano",
      "value": "M",
      "storeId": "c3b6ceb5-06e5-41a5-9571-0d9a1f315951",
      "createdAt": "2023-12-14T04:44:33.981Z",
      "updatedAt": "2023-12-14T04:44:33.981Z"
    }
  }
]

## Respuestas de Errores Posibles
- Código 404 Not Found:

  json
  {
  "error": 404,
  "error": "not_found",
}

  

- Código 500 Internal Server Error:
  json
  {
    "error": 500,
    "error": "internal_error",
  }
  