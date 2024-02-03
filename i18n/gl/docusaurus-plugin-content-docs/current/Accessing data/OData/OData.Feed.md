---
title: OData.Feed
---

# OData.Feed


## Description

Devolve unha táboa de fontes OData proporcionada por un servizo OData.


## Syntax

```powerquery
OData.Feed(
    serviceUri as text,
    optional headers as record,
    optional options as any
) as any
```


## Details

Devolve unha táboa de fontes OData ofrecidas por un servizo OData a partir dun URI <code>serviceUri</code> e cabeceiras <code>headers</code>. Pode especificarse un valor booleano que indique se se deben usar conexións simultáneas ou un parámetro de rexistro opcional, <code>options</code>, para controlar as seguintes opcións:    <ul>   <li><code>Query</code>: engade parámetros de consulta mediante programación ao URL sen preocuparse polos caracteres de escape. </li>    <li> <code>Headers</code>: a especificación deste valor como rexistro fornecerá cabeceiras adicionais a unha solicitude HTTP.</li>    <li> <code>ExcludedFromCacheKey</code>: se este valor se especifica como lista, as claves de cabeceira HTTP excluiranse do cálculo para o almacenamento de datos na caché.</li>    <li> <code>ApiKeyName</code>: se o sitio de destino ten algunha noción dunha clave da API, este parámetro poderá usarse para especificar o nome (non o valor) do parámetro clave que se debe usar no URL. O valor de clave real fornécese na credencial.</li>    <li> <code>Timeout</code>: a especificación deste valor como duración modificará o tempo de espera dunha solicitude HTTP. O valor predefinido é de 600 segundos.</li>    <li> <code>EnableBatch</code>: valor lóxico (true/false) que establece se se debe permitir a xeración dunha solicitude OData $batch cando se supera o valor de MaxUriLength (o valor predefinido é false).</li>    <li> <code>MaxUriLength</code>: número que indica a lonxitude máxima dun URI permitido enviado a un servizo OData. Se se supera e EnableBatch é true, a solicitude efectuarase a un extremo OData $batch; do contrario, producirase un erro (o valor predefinido é 2048).</li>    <li> <code>Concurrent</code>: valor lóxico (true/false); se se establece en true, as solicitudes ao servizo son simultáneas. Se se establece en false, as solicitudes son secuenciais. Se non se especifica, a anotación AsynchronousRequestsSupported do servizo determinará o valor. Se o servizo non especifica se se admite AsynchronousRequestsSupported, as solicitudes serán secuenciais.</li>    <li> <code>ODataVersion</code>: número (3 ou 4) que especifica a versión do protocolo OData que se usará para este servizo OData. Cando non se especifique, solicitaranse todas as versión compatibles. A cabeceira OData-Version que devolve o servizo determinará a versión do servizo.</li>    <li> <code>FunctionOverloads</code>: valor lóxico (true/false); se se establece en true, as sobrecargas de importación da función enuméranse no explorador como entradas separadas; se se establece en false, as sobrecargas de importación da función enuméranse como unha función de unión no explorador. No caso da versión 3, o valor predefinido é false; no da versión 4, é true.</li>    <li> <code>MoreColumns</code>: valor lóxico (true/false); se se establece en true, engade unha columna "Máis columnas" ás fontes de entidades que conteñen tipos abertos e polimórficos. Isto conterá os campos non declarados no tipo base. Se se establece en false, este campo non está presente. O valor predefinido é false.</li>    <li> <code>IncludeAnnotations</code>: lista separada por comas de padróns ou termos cualificados de espazo de nomes que se incluirán cun carácter comodín "\*". Por defecto, non se inclúe ningunha anotación.</li>    <li> <code>IncludeMetadataAnnotations</code>: lista separada por comas de padróns ou nomes de termos cualificados de espazo de nomes que se incluirán en solicitudes de documentos de metadatos con "\*" como carácter comodín. Por defecto, inclúe as mesmas anotacións que IncludeAnnotations.</li>    <li> <code>OmitValues</code>: permite que o servizo OData evite a escritura de certos valores nas respostas. Se se aproba, os valores inferiranse a partir dos campos omitidos. As opcións son as seguintes:      <ul>        <li><code>ODataOmitValues.Nulls</code>: permite que o servizo OData omita valores nulos.</li>      </ul>    </li>    <li> <code>Implementation</code>: especifica a implantación do conector OData que se usará. Os valores válidos son "2.0" ou nulo.</li>    </ul>


## Examples

### Example #1 
Conectar co servizo TripPin OData.
```powerquery
OData.Feed("https://services.odata.org/V4/TripPinService")
```

Result: 
```powerquery
table
```




## Category
Accessing data
