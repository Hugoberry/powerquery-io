---
title: OData.Feed
---

# OData.Feed


Devolve unha táboa de fontes OData proporcionada por un servizo OData.


## Syntax

```powerquery
OData.Feed(
    serviceUri as text,
    optional headers as record,
    optional options as any
) as any
```


## Remarks

Devolve unha táboa de fontes OData ofrecidas por un servizo OData desde un uri `serviceUri` , cabeceiras `headers` . Pódese especificar un valor booleano que especifique se se deben usar conexións simultáneas ou un parámetro de rexistro opcional, `options` , para controlar as seguintes opcións:

-   `Consulta`: Engade parámetros de consulta ao URL mediante programación sen ter que preocuparse polo escape.
-   `Cabeceiras`: Especificar este valor como rexistro fornecerá cabeceiras adicionais a unha solicitude HTTP.
-   `ExcludedFromCacheKey`: Especificar este valor como unha lista excluirá estas claves de cabeceira HTTP do cálculo para o almacenamento en caché de datos.
-   `ApiKeyName`: Se o sitio de destino ten unha idea dunha clave API, este parámetro pódese usar para especificar o nome (non o valor) do parámetro clave que se debe usar no URL. O valor real da clave indícase na credencial.
-   `Tempo de espera`: Especificar este valor como unha duración modificará o tempo de espera dunha solicitude HTTP. O valor predeterminado é de 600 segundos.
-   `EnableBatch`: Un valor lóxico (verdadeiro/falso) que define se se permite a xeración dunha solicitude $batch de OData se se supera o MaxUriLength (o valor predeterminado é falso).
-   `MaxUriLength`: Un número que indica a lonxitude máxima dun URI permitido enviado a un servizo OData. Se se supera e EnableBatch é verdadeiro, a solicitude farase a un punto final OData $batch; se non, fallará (o valor predeterminado é 2048).
-   `Simultánea`: Un valor lóxico (verdadeiro/falso). Cando se define como verdadeiro, as solicitudes ao servizo faranse simultaneamente. Cando se define como falso, as solicitudes faranse secuencialmente. Cando non se especifica, o valor determinarase pola anotación AsynchronousRequestsSupported do servizo. Se o servizo non especifica se se admite AsynchronousRequestsSupported, as solicitudes faranse secuencialmente.
-   `ODataVersion`: Un número (3 ou 4) que especifica a versión do protocolo OData que se vai usar para este servizo OData. Se non se especifica, solicitaranse todas as versións compatibles. A versión do servizo determinarase mediante a cabeceira OData-Version devolvida polo servizo.
-   `FunctionOverloads`: Unha sobrecarga lóxica (verdadeiro/falso) cando se define como verdadeiro, as sobrecargas de importación de funcións listaranse no navegador como entradas separadas; cando se define como falso, as sobrecargas de importación de funcións listaranse como unha función de unión no navegador. Valor predeterminado para V3: falso. Valor predeterminado para V4: verdadeiro.
-   `MoreColumns`: Un valor lóxico (verdadeiro/falso) cando se define como verdadeiro, engade unha columna "More Columns" a cada fonte de entidades que contén tipos abertos e tipos polimórficos. Esta conterá os campos non declarados no tipo base. Cando é falso, este campo non está presente. O valor predeterminado é falso.
-   `IncludeAnnotations`: Unha lista separada por comas de nomes ou patróns de termos cualificados de espazo de nomes para incluír con "\*" como comodín. Por defecto, non se inclúe ningunha das anotacións.
-   `IncludeMetadataAnnotations`: Unha lista separada por comas de nomes ou patróns de termos cualificados de espazo de nomes para incluír nas solicitudes de documentos de metadatos, con "\*" como comodín. Por defecto, inclúe as mesmas anotacións que IncludeAnnotations.
-   `OmitValues`: Permite que o servizo OData evite escribir certos valores nas respostas. Se o servizo o recoñece, deduciremos eses valores dos campos omitidos. As opcións inclúen:
    -   `ODataOmitValues.Nulls`: Permite que o servizo OData omita valores nulos.
-   `Implementación`: Especifica a implementación do conector OData que se vai usar. Os valores válidos son "2.0" ou nulos.


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
