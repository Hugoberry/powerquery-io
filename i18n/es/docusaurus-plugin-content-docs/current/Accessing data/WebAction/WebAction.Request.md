---
title: WebAction.Request
---

# WebAction.Request


## Description

Crea una acción que, al ejecutarse, devolverá los resultados de realizar una solicitud HTTP como valor binario.


## Syntax

```powerquery
WebAction.Request(
    method as text,
    url as text,
    optional options as record
) as action
```


## Details

Crea una acción que, cuando se ejecuta, devolverá los resultados de realizar una solicitud de <code>method</code> en <code>url</code> mediante HTTP como valor binario. Se puede proporcionar un parámetro de registro opcional, <code>options</code>, para especificar propiedades adicionales. El registro puede contener los campos siguientes: <ul><li><code>Query</code> : Agregue mediante programaci&#243;n par&#225;metros de consulta a la direcci&#243;n URL sin tener que preocuparse por los escapes.</li><li><code>ApiKeyName</code> : Si el sitio de destino tiene una noci&#243;n de una clave de API, este par&#225;metro se puede usar para especificar el nombre (no el valor) del par&#225;metro de la clave que se debe usar en la direcci&#243;n URL. El valor de la clave real se proporciona en la credencial.</li><li><code>Headers</code> : Si este valor se especifica como un registro, se proporcionar&#225;n encabezados adicionales a una solicitud HTTP.</li><li><code>Timeout</code> : Si este valor se especifica como una duraci&#243;n, se cambiar&#225; el tiempo de espera de una solicitud HTTP. El valor predeterminado es de 100&#160;segundos.</li><li><code>ExcludedFromCacheKey</code> : Si este valor se especifica como una lista, estas claves del encabezado HTTP se excluir&#225;n del c&#225;lculo para almacenar los datos en cach&#233;.</li><li><code>IsRetry</code> : Si este valor l&#243;gico se especifica como &quot;true&quot;, se omitir&#225; cualquier respuesta existente en la memoria cach&#233; al capturar datos.</li><li><code>ManualStatusHandling</code> : Si este valor se especifica como una lista, se evitar&#225; cualquier control integrado para las solicitudes HTTP cuya respuesta tenga uno de estos c&#243;digos de estado.</li><li><code>RelativePath</code> : Si este valor se especifica como texto, se anexar&#225; a la direcci&#243;n URL base antes de realizar la solicitud.</li><li><code>Content</code> : Si se especifica este valor, su contenido se convertir&#225; en el cuerpo de la solicitud HTTP.</li></ul> <br /> Tenga en cuenta que esta función está deshabilitada en la mayoría de los contextos. Considere la posibilidad de usar Web.Contents o Web.Headers en su lugar.


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
