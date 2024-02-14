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

Devuelve los encabezados descargados de <code>url</code> como registro. Se puede proporcionar un parámetro de registro opcional, <code>options</code>, para especificar propiedades adicionales. El registro puede contener los siguientes campos:    <ul><li><code>Query</code> : Agregue mediante programaci&#243;n par&#225;metros de consulta a la direcci&#243;n URL sin tener que preocuparse por los escapes.</li><li><code>ApiKeyName</code> : Si el sitio de destino tiene una noci&#243;n de una clave de API, este par&#225;metro se puede usar para especificar el nombre (no el valor) del par&#225;metro de la clave que se debe usar en la direcci&#243;n URL. El valor de la clave real se proporciona en la credencial.</li><li><code>Headers</code> : Si este valor se especifica como un registro, se proporcionar&#225;n encabezados adicionales a una solicitud HTTP.</li><li><code>Timeout</code> : Si este valor se especifica como una duraci&#243;n, se cambiar&#225; el tiempo de espera de una solicitud HTTP. El valor predeterminado es de 100&#160;segundos.</li><li><code>ExcludedFromCacheKey</code> : Si este valor se especifica como una lista, estas claves del encabezado HTTP se excluir&#225;n del c&#225;lculo para almacenar los datos en cach&#233;.</li><li><code>IsRetry</code> : Si este valor l&#243;gico se especifica como &quot;true&quot;, se omitir&#225; cualquier respuesta existente en la memoria cach&#233; al capturar datos.</li><li><code>ManualStatusHandling</code> : Si este valor se especifica como una lista, se evitar&#225; cualquier control integrado para las solicitudes HTTP cuya respuesta tenga uno de estos c&#243;digos de estado.</li><li><code>RelativePath</code> : Si este valor se especifica como texto, se anexar&#225; a la direcci&#243;n URL base antes de realizar la solicitud.</li></ul>    La solicitud HTTP se realiza con el método HEAD. Fuera de un contexto de conector de datos personalizado, solo está disponible un subconjunto de encabezados de respuesta (por motivos de seguridad).    


## Examples

### Example #1 
Recupere los encabezados HTTP para &lt;code&gt;&#34;https://bing.com/search?q=Power+Query&#34;&lt;/code&gt; con las opciones RelativePath y Query.
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
