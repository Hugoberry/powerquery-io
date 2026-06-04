---
title: WebAction.Request
---

# WebAction.Request


Crea una acció que, en executar-se, retornarà els resultats de realitzar una sol·licitud HTTP com a valor binari.


## Syntax

```powerquery
WebAction.Request(
    method as text,
    url as text,
    optional options as record
) as action
```


## Remarks

Creates an action that, when executed, will return the results of performing a `method` request against `url` using HTTP as a binary value. An optional record parameter, `options`, may be provided to specify additional properties. The record can contain the following fields:

-   `Query` : Permet afegir de manera programada paràmetres de consulta a l'URL sense que us hàgiu de preocupar dels caràcters d'escapada.
-   `ApiKeyName` : Si el lloc de destinació té nocions d'una clau d'API, aquest paràmetre es pot utilitzar per especificar el nom (no el valor) del paràmetre clau que s'ha d'utilitzar a l'URL. El valor clau real es proporciona a la credencial.
-   `Headers` : Si especifiqueu aquest valor com a registre, se subministraran capçaleres addicionals a una sol·licitud HTTP.
-   `Timeout` : Si especifiqueu aquest valor com a duració, es canviarà el temps d'espera d'una sol·licitud HTTP. El valor per defecte és de 100 segons.
-   `ExcludedFromCacheKey` : Si especifiqueu aquest valor com a llista, s'exclouran aquestes claus de la capçalera HTTP per tal que no formin part del càlcul de les dades d'emmagatzematge a la memòria cau.
-   `IsRetry` : Si especifiqueu aquest valor lògic com a "true", s'ignorarà qualsevol resposta existent a la memòria cau en recollir les dades.
-   `ManualStatusHandling` : Si especifiqueu aquest valor com a llista, evitareu qualsevol administració integrada de les sol·licituds HTTP la resposta de les quals tingui un d'aquests codis d'estat.
-   `RelativePath` : Si especifiqueu aquest valor com a text, s'annexarà a l'URL base abans de fer la sol·licitud.
-   `Content` : Si especifiqueu aquest valor, el seu contingut passarà a ser el cos de la sol·licitud HTTP.

Note that this function is disabled in most contexts. Consider using Web.Contents or Web.Headers instead.


## Examples

### Example #1
Fa una sol·licitud GET al Bing.
```powerquery
WebAction.Request(WebMethod.Get, "https://bing.com")
```

Result: 
```powerquery
Action
```




## Category
Action
