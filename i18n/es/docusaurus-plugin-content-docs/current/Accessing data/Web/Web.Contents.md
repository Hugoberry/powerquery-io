---
title: Web.Contents
---

# Web.Contents


## Description

Devuelve el contenido descargado de la dirección URL como un valor binario.


## Syntax

```powerquery
Web.Contents(
    url as text,
    optional options as record
) as binary
```


## Details

Devuelve el contenido descargado de <code>url</code> como binario. Se puede proporcionar un parámetro de registro opcional, <code>options</code>, para especificar propiedades adicionales. El registro puede contener los siguientes campos:    <ul><li><code>Query</code> : Agregue mediante programaci&#243;n par&#225;metros de consulta a la direcci&#243;n URL sin tener que preocuparse por los escapes.</li><li><code>ApiKeyName</code> : Si el sitio de destino tiene una noci&#243;n de una clave de API, este par&#225;metro se puede usar para especificar el nombre (no el valor) del par&#225;metro de la clave que se debe usar en la direcci&#243;n URL. El valor de la clave real se proporciona en la credencial.</li><li><code>Headers</code> : Si este valor se especifica como un registro, se proporcionar&#225;n encabezados adicionales a una solicitud HTTP.</li><li><code>Timeout</code> : Si este valor se especifica como una duraci&#243;n, se cambiar&#225; el tiempo de espera de una solicitud HTTP. El valor predeterminado es de 100&#160;segundos.</li><li><code>ExcludedFromCacheKey</code> : Si este valor se especifica como una lista, estas claves del encabezado HTTP se excluir&#225;n del c&#225;lculo para almacenar los datos en cach&#233;.</li><li><code>IsRetry</code> : Si este valor l&#243;gico se especifica como &quot;true&quot;, se omitir&#225; cualquier respuesta existente en la memoria cach&#233; al capturar datos.</li><li><code>ManualStatusHandling</code> : Si este valor se especifica como una lista, se evitar&#225; cualquier control integrado para las solicitudes HTTP cuya respuesta tenga uno de estos c&#243;digos de estado.</li><li><code>RelativePath</code> : Si este valor se especifica como texto, se anexar&#225; a la direcci&#243;n URL base antes de realizar la solicitud.</li><li><code>Content</code> : Si se especifica este valor, se cambiar&#225; la solicitud web de GET a POST, con el valor de la opci&#243;n como el contenido de POST.</li></ul>    La solicitud HTTP se realiza como GET (cuando no se especifica ningún contenido) o post (cuando hay contenido). Las solicitudes POST solo se pueden realizar de forma anónima.    <br />    Los encabezados de la respuesta HTTP están disponibles como metadatos en el resultado binario. Fuera de un contexto de conector de datos personalizado, solo está disponible un subconjunto de encabezados de respuesta (por motivos de seguridad).    


## Examples

### Example #1 
Recuperar el contenido de &lt;code&gt;&#34;https://bing.com/search?q=Power+Query&#34;&lt;/code&gt; mediante las opciones RelativePath y Query. Estas opciones se pueden usar para consultar de forma dinámica una URL base estática.
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
Conéctese a una dirección URL segura que acepte una clave de autenticación como parte de su cadena de consulta. En lugar de codificar la clave secreta en M (lo que supondría un riesgo para la seguridad),     la clave se puede proporcionar de forma segura especificando su nombre (no su valor) en M, eligiendo la autenticación de la API web e introduciendo el valor de la clave como parte de la credencial de la api web.    Cuando se usa de este modo, el siguiente ejemplo generará una solicitud a &lt;code&gt;&#34;https://contoso.com/api/customers/get?api_key=&#34;&lt;/code&gt;.
```powerquery
Web.Contents("https://contoso.com/api/customers/get", [ApiKeyName="api_key"])
```

Result: 
```powerquery
binary
```




## Category
Accessing data
