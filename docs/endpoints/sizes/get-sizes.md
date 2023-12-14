# Endpoint: GET /sizes

Permite obtener información detallada sobre todos los tamaños disponibles


## Ejemplo de Solicitud
http
GET {storeId}/sizes


## Respuesta Exitosa (Código 200 OK)
json

[
  {
    "id": "4473e87b-531b-4aeb-adfb-b3fea9e9f891",
    "name": "Mediano",
    "value": "M",
    "storeId": "c3b6ceb5-06e5-41a5-9571-0d9a1f315951",
    "createdAt": "2023-12-14T04:44:33.981Z",
    "updatedAt": "2023-12-14T04:44:33.981Z"
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
  