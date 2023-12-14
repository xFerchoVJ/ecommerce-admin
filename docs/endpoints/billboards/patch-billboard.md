# Endpoint: PATCH/billboards.

Permite editar un nuevo billboard.

## Parámetros del Cuerpo (JSON)

- label (obligatorio): Nombre del nuevo billboard.
- imageUrl (obligatorio): Url de la imagen que regresa el servicio de Cloudinary

## Ejemplo de Solicitud

http
PATCH /{storeId}/billboards/{billboardId}
Content-Type: application/json

{
"label": "Test",
"imageUrl": "https://res.cloudinary.com/djbzeisgm/image/upload/v1702527969/g8put1owfe1bdqmz6zli.webp",

}

## Respuesta Exitosa (Código 200 OK)

json
{
"mensaje": "Publicidad creada exitosamente."
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
