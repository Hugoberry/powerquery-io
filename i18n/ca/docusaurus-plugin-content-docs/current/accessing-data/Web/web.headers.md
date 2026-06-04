---
title: Web.Headers
---

# Web.Headers


Retorna les capçaleres HTTP baixades de l'URL com a valor de registre.


## Syntax

```powerquery
Web.Headers(
    url as text,
    optional options as record
) as record
```


## Remarks

Retorna les capçaleres baixades de `url` com a registre. Es pot proporcionar un paràmetre de registre opcional, `options`, per especificar propietats addicionals. El registre pot contenir els camps següents:

-   `Query` : Permet afegir de manera programada paràmetres de consulta a l'URL sense que us hàgiu de preocupar dels caràcters d'escapada.
-   `ApiKeyName` : Si el lloc de destinació té nocions d'una clau d'API, aquest paràmetre es pot utilitzar per especificar el nom (no el valor) del paràmetre clau que s'ha d'utilitzar a l'URL. El valor clau real es proporciona a la credencial.
-   `Headers` : Si especifiqueu aquest valor com a registre, se subministraran capçaleres addicionals a una sol·licitud HTTP.
-   `Timeout` : Si especifiqueu aquest valor com a duració, es canviarà el temps d'espera d'una sol·licitud HTTP. El valor per defecte és de 100 segons.
-   `ExcludedFromCacheKey` : Si especifiqueu aquest valor com a llista, s'exclouran aquestes claus de la capçalera HTTP per tal que no formin part del càlcul de les dades d'emmagatzematge a la memòria cau.
-   `IsRetry` : Si especifiqueu aquest valor lògic com a "true", s'ignorarà qualsevol resposta existent a la memòria cau en recollir les dades.
-   `ManualStatusHandling` : Si especifiqueu aquest valor com a llista, evitareu qualsevol administració integrada de les sol·licituds HTTP la resposta de les quals tingui un d'aquests codis d'estat.
-   `RelativePath` : Si especifiqueu aquest valor com a text, s'annexarà a l'URL base abans de fer la sol·licitud.

La sol·licitud HTTP es fa amb el mètode HEAD. Fora d'un context de connector de dades personalitzat, només hi ha disponible un subconjunt de capçaleres de resposta (per motius de seguretat).


## Examples

### Example #1
Recupera les capçaleres HTTP de `"https://bing.com/search?q=Power+Query"` mitjançant les opcions RelativePath i Query.
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
