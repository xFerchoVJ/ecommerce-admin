# Endpoint: PATCH/categories.

Permite editar un category.

## Parámetros del Cuerpo (JSON)

- name (obligatorio): Nombre del nuevo category.
- billboardId (obligatorio): Id de la publicidad de la categoria.

## Ejemplo de Solicitud

http
PATCH /{storeId}/categories/{categoryId}
Content-Type: application/json

{
"name": "testing",
"billboardId": "92328220-c0c4-4ba9-ac6b-ccd2c567d9ae",
}

## Respuesta Exitosa (Código 200 OK)

json
{
"mensaje": "Categoria editada."
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
