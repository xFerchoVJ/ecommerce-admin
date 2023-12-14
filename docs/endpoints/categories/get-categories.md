# Endpoint: GET /categories

Permite obtener información detallada sobre todos las categorias disponibles


## Ejemplo de Solicitud
http
GET /categories


## Respuesta Exitosa (Código 200 OK)
json

[
  {
    "id": "9655c375-0a83-40e6-b908-b7daf87d6ddf",
    "storeId": "c3b6ceb5-06e5-41a5-9571-0d9a1f315951",
    "billboardId": "92328220-c0c4-4ba9-ac6b-ccd2c567d9ae",
    "name": "testing",
    "createdAt": "2023-12-14T04:33:13.579Z",
    "updatedAt": "2023-12-14T04:33:13.579Z"
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
  