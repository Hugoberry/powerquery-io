---
title: OData.Feed
---

# OData.Feed


## Description

Retorna una taula de canals de contingut OData oferts per un servei OData.


## Syntax

```powerquery
OData.Feed(
    serviceUri as text,
    optional headers as record,
    optional options as any
) as any
```


## Details

Retorna una taula de canals de continguts OData oferida per un servei OData a partir d'un URI (<code>serviceUri</code>) i capçaleres (<code>headers</code>). És possible especificar un valor booleà que indiqui si cal utilitzar connexions simultànies o un paràmetre de registre opcional (<code>options</code>) per controlar aquestes opcions:    <ul>    <li><code>Query</code>: afegiu paràmetres de consulta mitjançant programació a l'adreça URL sense haver de preocupar-vos pels caràcters d'escapament. </li>    <li> <code>Headers</code>: si s'especifica aquest valor com a registre, es proporcionaran més capçaleres a una sol·licitud HTTP.</li>    <li> <code>ExcludedFromCacheKey</code>: si s'especifica aquest valor com a llista, s'exclouran les claus de capçalera HTTP del càlcul per emmagatzemar dades a la memòria cau.</li>    <li> <code>ApiKeyName</code>: si el lloc de destinació té una noció de la clau d'una API, aquest paràmetre es pot utilitzar per especificar el nom, que no el valor, del paràmetre de la clau que s'ha de fer servir per a l'adreça URL. El valor real de la clau s'indica a les credencials.</li>    <li> <code>Timeout</code>: si s'especifica aquest valor com a durada, es modificarà el temps d'espera d'una sol·licitud HTTP. El valor per defecte és de 600 segons.</li>    <li> <code>EnableBatch</code>: valor lògic ("true" o "false") que estableix si es permet generar una sol·licitud $batch OData en cas que se superi el valor de MaxUriLength. El valor per defecte és "false".</li>    <li> <code>MaxUriLength</code>: número que indica la longitud màxima d'un URI permès enviat a un servei OData. Si és superior i EnableBatch està establert en "true", la sol·licitud es farà a un extrem $batch OData. En cas contrari, es produirà un error. El valor per defecte és 2048.</li>
    <li> <code>Concurrent</code>: valor lògic ("true" o "false") que, si s'estableix en "true", permet que les sol·licituds al servei es facin de manera simultània. Si s'estableix en "false", es faran de manera seqüencial. Si no s'especifica, l'anotació AsynchronousRequestsSupported del servei en determinarà el valor. Si el servei no especifica si s'admet AsynchronousRequestsSupported, les sol·licituds s'efectuaran de manera seqüencial.</li>    <li> <code>ODataVersion</code>: nombre (3 o 4) que especifica la versió del protocol OData que s'utilitzarà per a aquest servei OData. Si no s'especifica, se sol·licitaran totes les versions admeses. La capçalera OData-Version que retorni el servei determinarà la versió d'aquest servei.</li>    <li> <code>FunctionOverloads</code>: valor lògic ("true" o "false") que, si s'estableix en "true", farà que les sobrecàrregues d'importació de funcions s'enumerin al navegador com a entrades independents. Si s'estableix en "false", les sobrecàrregues d'importació de funcions s'enumeraran com una funció UNION única al navegador. En el cas de la versió 3, el valor per defecte és "false"; en el de la 4, és "true".</li>    <li> <code>MoreColumns</code>: valor lògic ("true" o "false") que, si s'estableix en "true", afegeix la columna "Més columnes" al canal de continguts de cada entitat que contingui tipus oberts o polimòrfics. S'hi inclouran els camps que no s'hagin declarat al tipus de base. Si s'estableix en "false", el camp no hi serà. El valor per defecte és "false".</li>    <li> <code>IncludeAnnotations</code>: llista separada per comes de noms qualificats de termes d'espais de noms o patrons per incloure'ls amb "\*" com a caràcter comodí. Per defecte, no s'hi inclou cap de les anotacions.</li>    <li> <code>IncludeMetadataAnnotations</code>: llista separada per comes de noms qualificats de termes d'espais de noms o patrons per incloure'ls a les sol·licituds de documents de metadades amb "\*" com a caràcter comodí. Per defecte, s'hi inclouen les mateixes anotacions que amb IncludeAnnotations.</li>    <li> <code>OmitValues</code>: permet que el servei OData eviti escriure determinats valors a les respostes. Si es confirma, inferirem aquests valors dels camps omesos. Les opcions són aquestes:      <ul>        <li><code>ODataOmitValues.Nulls</code>: permet que el servei OData ometi els valors nuls.</li>      </ul>    </li>    <li> <code>Implementation</code>: especifica la implementació del connector OData que s'ha d'utilitzar. Els valors vàlids són "2.0" o un valor nul.</li>    </ul>


## Examples

### Example #1 
Connecteu-vos al servei TripPin OData.
```powerquery
OData.Feed("https://services.odata.org/V4/TripPinService")
```

Result: 
```powerquery
table
```




## Category
Accessing data
