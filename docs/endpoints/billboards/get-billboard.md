# Endpoint: GET /billboards

Permite obtener información detallada sobre todos las categorias disponibles


## Ejemplo de Solicitud
http
GET /billboards


## Respuesta Exitosa (Código 200 OK)
json

[
  {
    "id": "92328220-c0c4-4ba9-ac6b-ccd2c567d9ae",
    "storeId": "c3b6ceb5-06e5-41a5-9571-0d9a1f315951",
    "label": "Test",
    "imageUrl": "https://res.cloudinary.com/djbzeisgm/image/upload/v1702527969/g8put1owfe1bdqmz6zli.webp",
    "createdAt": "2023-12-14T04:26:18.698Z",
    "updatedAt": "2023-12-14T04:26:18.698Z"
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
  