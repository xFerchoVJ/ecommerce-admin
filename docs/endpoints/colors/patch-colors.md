# Endpoint: PATCH/colors.

Permite editar un nuevo color.

## Parámetros del Cuerpo (JSON)

- name (obligatorio): Nombre del nuevo color.
- value (obligatorio): Valor hexadecimal del color

## Ejemplo de Solicitud

http
PATCH /{storeId}/colorss/{colorId}
Content-Type: application/json

{
"name": "black",
"value": "#000",
}

## Respuesta Exitosa (Código 200 OK)

json
{
"mensaje": "Color editado exitosamente."
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
