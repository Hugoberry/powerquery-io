---
title: WebAction.Request
---

# WebAction.Request


Crea una acción que, al ejecutarse, devolverá los resultados de realizar una solicitud HTTP como valor binario.


## Syntax

```powerquery
WebAction.Request(
    method as text,
    url as text,
    optional options as record
) as action
```


## Remarks

Crea una acción que, al ejecutarse, devolverá los resultados de realizar una solicitud `method` request contra `url` usando HTTP como un valor binario. Se puede proporcionar un parámetro de registro opcional, `options`, para especificar propiedades adicionales. El registro puede contener los campos siguientes:

-   `Query` : Agregue mediante programación parámetros de consulta a la dirección URL sin tener que preocuparse por los escapes.
-   `ApiKeyName` : Si el sitio de destino tiene una noción de una clave de API, este parámetro se puede usar para especificar el nombre (no el valor) del parámetro de la clave que se debe usar en la dirección URL. El valor de la clave real se proporciona en la credencial.
-   `Headers` : Si este valor se especifica como un registro, se proporcionarán encabezados adicionales a una solicitud HTTP.
-   `Timeout` : Si este valor se especifica como una duración, se cambiará el tiempo de espera de una solicitud HTTP. El valor predeterminado es de 100 segundos.
-   `ExcludedFromCacheKey` : Si este valor se especifica como una lista, estas claves del encabezado HTTP se excluirán del cálculo para almacenar los datos en caché.
-   `IsRetry` : Si este valor lógico se especifica como "true", se omitirá cualquier respuesta existente en la memoria caché al capturar datos.
-   `ManualStatusHandling` : Si este valor se especifica como una lista, se evitará cualquier control integrado para las solicitudes HTTP cuya respuesta tenga uno de estos códigos de estado.
-   `RelativePath` : Si este valor se especifica como texto, se anexará a la dirección URL base antes de realizar la solicitud.
-   `Content` : Si se especifica este valor, su contenido se convertirá en el cuerpo de la solicitud HTTP.

Tenga en cuenta que esta función está deshabilitada en la mayoría de los contextos. Considere la posibilidad de usar Web.Contents o Web.Headers en su lugar.


## Examples

### Example #1
Realice una solicitud GET en Bing.
```powerquery
WebAction.Request(WebMethod.Get, "https://bing.com")
```

Result: 
```powerquery
Action
```




## Category
Action
