---
title: Web.Contents
---

# Web.Contents


Devuelve el contenido descargado de la dirección URL como un valor binario.


## Syntax

```powerquery
Web.Contents(
    url as text,
    optional options as record
) as binary
```


## Remarks

Devuelve el contenido descargado de `url` como binario. Se puede proporcionar un parámetro de registro opcional, `options`, para especificar propiedades adicionales. El registro puede contener los campos siguientes:

-   `Query` : Agregue mediante programación parámetros de consulta a la dirección URL sin tener que preocuparse por los escapes.
-   `ApiKeyName` : Si el sitio de destino tiene una noción de una clave de API, este parámetro se puede usar para especificar el nombre (no el valor) del parámetro de la clave que se debe usar en la dirección URL. El valor de la clave real se proporciona en la credencial.
-   `Headers` : Si este valor se especifica como un registro, se proporcionarán encabezados adicionales a una solicitud HTTP.
-   `Timeout` : Si este valor se especifica como una duración, se cambiará el tiempo de espera de una solicitud HTTP. El valor predeterminado es de 100 segundos.
-   `ExcludedFromCacheKey` : Si este valor se especifica como una lista, estas claves del encabezado HTTP se excluirán del cálculo para almacenar los datos en caché.
-   `IsRetry` : Si este valor lógico se especifica como "true", se omitirá cualquier respuesta existente en la memoria caché al capturar datos.
-   `ManualStatusHandling` : Si este valor se especifica como una lista, se evitará cualquier control integrado para las solicitudes HTTP cuya respuesta tenga uno de estos códigos de estado.
-   `RelativePath` : Si este valor se especifica como texto, se anexará a la dirección URL base antes de realizar la solicitud.
-   `Content` : Si se especifica este valor, se cambiará la solicitud web de GET a POST, con el valor de la opción como el contenido de POST.

La solicitud HTTP se realiza como GET (cuando no se especifica ningún contenido) o post (cuando hay contenido). Las solicitudes POST solo se pueden realizar de forma anónima.  
  
Los encabezados de la respuesta HTTP están disponibles como metadatos en el resultado binario. Fuera de un contexto de conector de datos personalizado, solo está disponible un subconjunto de encabezados de respuesta (por motivos de seguridad).


## Examples

### Example #1
Recuperar el contenido de `"https://bing.com/search?q=Power+Query"` mediante las opciones RelativePath y Query. Estas opciones se pueden usar para consultar de forma dinámica una URL base estática.
```powerquery
let
    searchText = "Power Query"
in
    Web.Contents(
        "https://www.bing.com",
        [
            RelativePath = "search",
            Query = [q = searchText]
        ]
    )
```

Result: 
```powerquery
binary
```


### Example #2
Realizar una PUBLUICACIÓN en una dirección URL, pasar una carga binaria JSON y analizar la respuesta como JSON.
```powerquery
let
    url = ...,
    headers = [#"Content-Type" = "application/json"],
    postData = Json.FromValue([x = 235.7, y = 41.53]),
    response = Web.Contents(
        url,
        [
            Headers = headers,
            Content = postData
        ]
    ),
    jsonResponse = Json.Document(response)
in
    jsonResponse
```

Result: 
```powerquery
table
```


### Example #3
Conéctese a una dirección URL segura que acepte una clave de autenticación como parte de su cadena de consulta. En lugar de codificar de forma rígida la clave secreta en M (lo que supondría un riesgo para la seguridad), la clave se puede proporcionar de forma segura especificando su nombre (no su valor) en M, eligiendo la autenticación de la API web e introduciendo el valor de la clave como parte de la credencial de la api web. Cuando se usa de este modo, el siguiente ejemplo generará una solicitud a `"https://contoso.com/api/customers/get?api_key="`.
```powerquery
Web.Contents("https://contoso.com/api/customers/get", [ApiKeyName="api_key"])
```

Result: 
```powerquery
binary
```




## Category
Accessing data
