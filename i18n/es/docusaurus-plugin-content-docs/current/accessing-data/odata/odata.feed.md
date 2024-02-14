---
title: OData.Feed
---

# OData.Feed


Devuelve una tabla de fuentes OData proporcionadas por un servicio OData.


## Syntax

```powerquery
OData.Feed(
    serviceUri as text,
    optional headers as record,
    optional options as any
) as any
```


## Remarks

Devuelve una tabla de fuentes OData ofrecidas por un servicio OData a partir de un URI <code>serviceUri</code>, encabezados <code>headers</code>. Se puede especificar un valor booleano que especifica si se deben usar conexiones simultáneas o un parámetro de registro opcional, <code>options</code>, para controlar las siguientes opciones:    <ul>    <li><code>Query</code>: agregue parámetros de consulta mediante programación a la dirección URL sin tener que preocuparse por los caracteres de escape. </li>    <li> <code>Headers</code> : si se especifica este valor como registro, se proporcionarán más encabezados a una solicitud HTTP.</li>    <li> <code>ExcludedFromCacheKey</code>: si se especifica este valor como una lista, se excluirán las claves de encabezado HTTP del cálculo para almacenar datos en la caché.</li>    <li> <code>ApiKeyName</code> : si el sitio de destino tiene una noción de una clave de API, este parámetro se puede usar para especificar el nombre (no el valor) del parámetro de la clave que se debe usar en la dirección URL. El valor real de la clave se proporciona en las credenciales.</li>    <li> <code>Timeout</code> : Si se especifica este valor como duración, se cambiará el tiempo de espera de una solicitud HTTP. El valor predeterminado es 600 segundos.</li>    <li> <code>EnableBatch</code> : valor lógico (true/false) que establece si se permite la generación de una solicitud de $batch de OData si se supera MaxUriLength (el valor predeterminado es false).</li>    <li> <code>MaxUriLength</code> : número que indica la longitud máxima de un URI permitido enviado a un servicio OData. Si se supera y EnableBatch es true, se realizará la solicitud a un punto de conexión $batch de OData; de lo contrario, se producirá un error (el valor predeterminado es 2048).</li>    <li> <code>Concurrent</code> : un valor lógico (true/false) cuando se establece en true, las solicitudes al servicio se realizarán de manera simultánea. Cuando se establece en false, las solicitudes se realizarán de manera secuencial. Si no se especifica, el valor se determinará mediante la anotación AsynchronousRequestsSupported del servicio. Si el servicio no especifica si se admite AsynchronousRequestsSupported, las solicitudes se realizarán de manera secuencial.</li>    <li> <code>ODataVersion</code> : número (3 o 4) que especifica la versión del protocolo OData que se usará para este servicio OData. Si no se especifica, se solicitarán todas las versiones admitidas. La versión del servicio se determinará por el encabezado OData-Version devuelto por el servicio.</li>    <li> <code>FunctionOverloads</code> : un valor lógico (true/false) cuando se establece en true, las sobrecargas de importación de funciones se mostrarán en el navegador como entradas independientes, cuando se establezca en false, las sobrecargas de importación de funciones se mostrarán como una función de unión en el navegador. Valor predeterminado para V3: false. Valor predeterminado para V4: true.</li>    <li> <code>MoreColumns</code> : un valor lógico (true/false) cuando se establece en true, agrega una columna "Más columnas" a cada fuente de entidad que contiene tipos abiertos y tipos polimórficos. Esto contendrá los campos no declarados en el tipo base. Cuando es false, este campo no está presente. El valor predeterminado es false.</li>    <li> <code>IncludeAnnotations</code> : lista separada por comas de nombres de patrones o nombres calificados de términos de espacios de nombres que se incluirán con "\*" como carácter comodín. De forma predeterminada, no se incluye ninguna de las anotaciones. </li>    <li> <code>IncludeMetadataAnnotations</code> : lista separada por comas de nombres de patrones o nombres calificados de términos de espacios de nombres que se incluirán en las solicitudes de documentos de metadatos, con "\*" como carácter comodín. De forma predeterminada, incluye las mismas anotaciones que IncludeAnnotations.</li>    <li> <code>OmitValues</code> : Permite al servicio OData evitar escribir determinados valores en las respuestas. Si el servicio lo reconoce, inferiremos esos valores de los campos omitidos. Las opciones incluyen:      <ul>        <li><code>ODataOmitValues.Nulls</code> : permite que el servicio OData omita valores nulos.</li>      </ul>    </li>    <li> <code>implementation</code> : especifica la implementación del conector OData que se va a usar. Los valores válidos son "2.0" o nulo..</li>    </ul>


## Examples

### Example #1 
Conéctese al servicio OData de TripPin.
```powerquery
OData.Feed("https://services.odata.org/V4/TripPinService")
```

Result: 
```powerquery
table
```




## Category
Accessing data
