# Endpoint: PATCH/sizes.

Permite editar un nuevo tamaño.

## Parámetros del Cuerpo (JSON)

- name (obligatorio): Nombre del nuevo tamaño.
- value (obligatorio): Valor del tamaño

## Ejemplo de Solicitud

http
PATCH /{storeId}/sizes/{sizeId}
Content-Type: application/json

{
"name": "M",
"value": "Mediano",
}

## Respuesta Exitosa (Código 200 OK)

json
{
"mensaje": "Tamaño editado exitosamente."
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
