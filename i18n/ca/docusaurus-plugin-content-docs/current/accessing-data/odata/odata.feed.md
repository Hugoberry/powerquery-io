---
title: OData.Feed
---

# OData.Feed


Retorna una taula de canals de contingut OData oferts per un servei OData.


## Syntax

```powerquery
OData.Feed(
    serviceUri as text,
    optional headers as record,
    optional options as any
) as any
```


## Remarks

Retorna una taula de canals de contingut OData oferts per un servei OData a partir d'una URI `serviceUri`, capçaleres `headers`. És possible especificar un valor booleà que indiqui si cal utilitzar connexions simultànies o un paràmetre de registre opcional, `options`, per controlar aquestes opcions:

-   `Consulta`: afegeix de manera programada paràmetres de consulta a l'URL sense que us hàgiu de preocupar dels caràcters d'escapada.
-   `Capçaleres`: si especifiqueu aquest valor com a registre, se subministraran capçaleres addicionals a una sol·licitud HTTP.
-   `ExcludedFromCacheKey`: si especifiqueu aquest valor com a llista, s'exclouran aquestes claus de la capçalera HTTP per tal que no formin part del càlcul de les dades d'emmagatzematge a la memòria cau.
-   `ApiKeyName`: si el lloc de destinació té una noció d'una clau d'API, aquest paràmetre es pot fer servir per especificar el nom (no el valor) del paràmetre clau que s'ha de fer servir a l'URL. El valor real de la clau es proporciona a la credencial.
-   `Timeout`: si especifiqueu aquest valor com a duració, es canviarà el temps d'espera d'una sol·licitud HTTP. El valor per defecte és 600 segons.
-   `EnableBatch`: valor lògic (true/false) que estableix si es permet generar una sol·licitud $batch OData en cas que se superi el valor de MaxUriLength (el valor per defecte és false).
-   `MaxUriLength`: número que indica la longitud màxima d'un URI permès enviat a un servei OData. Si se supera i EnableBatch està establert en true, la sol·licitud es farà a un extrem $batch d'OData; en cas contrari, fallarà (el valor per defecte és 2048).
-   `Concurrent`: valor lògic (true/false) que, si s'estableix en true, permet que les sol·licituds al servei es facin de manera simultània. Si s'estableix en false, es faran de manera seqüencial. Si no s'especifica, l'anotació AsynchronousRequestsSupported del servei en determinarà el valor. Si el servei no especifica si s'admet AsynchronousRequestsSupported, les sol·licituds s'efectuaran de manera seqüencial.
-   `ODataVersion`: nombre (3 o 4) que especifica la versió del protocol OData que s'utilitzarà per a aquest servei OData. Si no s'especifica, se sol·licitaran totes les versions admeses. La capçalera OData-Version que retorni el servei determinarà la versió d'aquest servei.
-   `FunctionOverloads`: valor lògic (true/false) que, si s'estableix en true, farà que les sobrecàrregues d'importació de funcions s'enumerin al navegador com a entrades independents, i si s'estableix en false, les sobrecàrregues d'importació de funcions s'enumeraran com una única funció unió al navegador. En el cas de la versió 3, el valor per defecte és fals. En el cas de la versió 3, el valor per defecte és cert.
-   `MoreColumns`: valor lògic (true/false) que, si s'estableix en true, afegeix la columna "Més columnes" al canal de continguts de cada entitat que contingui tipus oberts o polimòrfics. S'hi inclouran els camps que no s'hagin declarat al tipus de base. Si s'estableix en fals, el camp no hi serà. El valor per defecte és "false".
-   `IncludeAnnotations`: llista separada per comes de noms qualificats de termes d'espais de noms o patrons per incloure'ls amb "\*" com a caràcter comodí. Per defecte, no s'hi inclou cap de les anotacions.
-   `IncludeMetadataAnnotations`: llista separada per comes de noms qualificats de termes d'espais de noms o patrons per incloure'ls a les sol·licituds de documents de metadades amb "\*" com a caràcter comodí. Per defecte, inclou les mateixes anotacions que IncludeAnnotations.
-   `OmitValues`: permet que el servei OData eviti escriure determinats valors a les respostes. Si es confirma, inferirem aquests valors dels camps omesos. Les opcions inclouen:
    -   `ODataOmitValues.Nulls`: permet que el servei OData ometi els valors nuls.
-   `Implementation`: especifica la implementació del connector OData que s'ha d'utilitzar. Els valors vàlids són "2.0" i nul.


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
