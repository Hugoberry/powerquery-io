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

Devuelve una tabla de fuentes OData ofrecidas por un servicio OData a partir de un URI `serviceUri`, encabezados `headers`. Se puede especificar un valor booleano que indica si se deben usar conexiones simultáneas o un parámetro de registro opcional, `options`, para controlar las siguientes opciones:

-   `Query`: agregue mediante programación parámetros de consulta a la dirección URL sin tener que preocuparse por el escape.
-   `Headers`: especificar este valor como registro proporcionará encabezados adicionales a una solicitud HTTP.
-   `ExcludedFromCacheKey`: si especifica este valor como una lista, estas claves de encabezado HTTP no formarán parte del cálculo para almacenar datos en caché.
-   `ApiKeyName`: si el sitio de destino tiene noción de una clave de API, este parámetro puede utilizarse para especificar el nombre (no el valor) del parámetro clave que debe usarse en la URL. El valor real de la clave se proporciona en las credenciales.
-   `Timeout`: especificar este valor como duración cambiará el tiempo de espera de una solicitud HTTP. El valor predeterminado es 600 segundos.
-   `EnableBatch`: un valor lógico (true/false) que establece si se permite la generación de una solicitud de $batch de OData si se supera MaxUriLength (el valor predeterminado es false).
-   `MaxUriLength`: número que indica la longitud máxima de un URI permitido enviado a un servicio OData. Si se supera y EnableBatch es true, se realizará la solicitud a un punto de conexión $batch de OData; de lo contrario, se producirá un error (el valor predeterminado es 2048).
-   `Concurrent`: una lógica (true/false) cuando se establece en true, las solicitudes al servicio se realizarán simultáneamente. Cuando se establece en false, las solicitudes se realizarán de manera secuencial. Cuando no se especifica, el valor se determinará mediante la anotación AsynchronousRequestsSupported del servicio. Si el servicio no especifica si se admite AsynchronousRequestsSupported, las solicitudes se realizarán de manera secuencial.
-   `ODataVersion`: número (3 o 4) que especifica la versión del protocolo OData que se va a usar para este servicio OData. Si no se especifica, se solicitarán todas las versiones admitidas. La versión del servicio se determinará por el encabezado OData-Version devuelto por el servicio.
-   `FunctionOverloads`: una lógica (true/false) cuando se establece en true, las sobrecargas de importación de funciones se mostrarán en el navegador como entradas independientes, cuando se establecen en false, las sobrecargas de importación de funciones se mostrarán como una función de unión en el navegador. Valor predeterminado para V3: false. Valor predeterminado para V4: true.
-   `MoreColumns`: un valor lógico (true/false) cuando se establece en true, agrega una columna "Más columnas" a cada fuente de entidades que contiene tipos abiertos y tipos polimórficos. Esto contendrá los campos no declarados en el tipo base. Cuando es false, este campo no está presente. El valor predeterminado es false.
-   `IncludeAnnotations`: lista separada por comas de nombres o patrones de términos calificados del espacio de nombres que se van a incluir con "\*" como carácter comodín. De forma predeterminada, no se incluye ninguna de las anotaciones.
-   `IncludeMetadataAnnotations`: lista separada por comas de nombres de términos calificados por comas o patrones que se incluirán en las solicitudes de documentos de metadatos, con "\*" como carácter comodín. De forma predeterminada, incluye las mismas anotaciones que IncludeAnnotations.
-   `OmitValues`: permite que el servicio OData evite escribir determinados valores en las respuestas. Si el servicio lo reconoce, inferiremos esos valores de los campos omitidos. Las opciones incluyen:
    -   `ODataOmitValues.Nulls`: permite que el servicio OData omita valores null.
-   `Implementation`: especifica la implementación del conector de OData que se va a usar. Los valores válidos son "2.0" o null.


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
