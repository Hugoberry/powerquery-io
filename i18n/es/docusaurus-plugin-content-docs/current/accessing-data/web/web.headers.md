---
title: Web.Headers
---

# Web.Headers


Devuelve los encabezados HTTP descargados de la dirección URL como un valor de registro.


## Syntax

```powerquery
Web.Headers(
    url as text,
    optional options as record
) as record
```


## Remarks

Devuelve los encabezados descargados de `url` como registro. Se puede proporcionar un parámetro de registro opcional, `options`, para especificar propiedades adicionales. El registro puede contener los siguientes campos:

-   `Query` : Agregue mediante programación parámetros de consulta a la dirección URL sin tener que preocuparse por los escapes.
-   `ApiKeyName` : Si el sitio de destino tiene una noción de una clave de API, este parámetro se puede usar para especificar el nombre (no el valor) del parámetro de la clave que se debe usar en la dirección URL. El valor de la clave real se proporciona en la credencial.
-   `Headers` : Si este valor se especifica como un registro, se proporcionarán encabezados adicionales a una solicitud HTTP.
-   `Timeout` : Si este valor se especifica como una duración, se cambiará el tiempo de espera de una solicitud HTTP. El valor predeterminado es de 100 segundos.
-   `ExcludedFromCacheKey` : Si este valor se especifica como una lista, estas claves del encabezado HTTP se excluirán del cálculo para almacenar los datos en caché.
-   `IsRetry` : Si este valor lógico se especifica como "true", se omitirá cualquier respuesta existente en la memoria caché al capturar datos.
-   `ManualStatusHandling` : Si este valor se especifica como una lista, se evitará cualquier control integrado para las solicitudes HTTP cuya respuesta tenga uno de estos códigos de estado.
-   `RelativePath` : Si este valor se especifica como texto, se anexará a la dirección URL base antes de realizar la solicitud.

La solicitud HTTP se realiza con el método HEAD. Fuera de un contexto de conector de datos personalizado, solo está disponible un subconjunto de encabezados de respuesta (por motivos de seguridad).


## Examples

### Example #1
Recupere los encabezados HTTP para `"https://bing.com/search?q=Power+Query"` con las opciones RelativePath y Query.
```powerquery
let
    searchText = "Power Query"
in
    Web.Headers(
        "https://www.bing.com",
        [
            RelativePath = "search",
            Query = [q = searchText]
        ]
    )
```

Result: 
```powerquery
([
    #"Cache-Control" = "private, max-age=0",
    #"Content-Encoding" = "gzip",
    #"Content-Length" = "0",
    #"Content-Type" = "text/html; charset=utf-8",
    Date = "Tue, 14 Dec 2021 16:57:25 GMT",
    Expires = "Tue, 14 Dec 2021 16:56:25 GMT",
    Vary = "Accept-Encoding"
]
meta [
    Response.Status = 200
])
```




## Category
Accessing data
