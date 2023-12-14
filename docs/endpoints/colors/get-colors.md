# Endpoint: GET /colors

Permite obtener información detallada sobre todos los colores disponibles


## Ejemplo de Solicitud
http
GET /colors


## Respuesta Exitosa (Código 200 OK)
json

[
  {
    "id": "04bcb513-9e8b-452a-9969-1ca5575b3c1e",
    "name": "black",
    "value": "#000",
    "storeId": "c3b6ceb5-06e5-41a5-9571-0d9a1f315951",
    "createdAt": "2023-12-14T04:39:22.609Z",
    "updatedAt": "2023-12-14T04:39:22.609Z"
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
  