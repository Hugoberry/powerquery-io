---
title: Web.Contents
---

# Web.Contents


Retorna els continguts baixats de l'URL com a binaris.


## Syntax

```powerquery
Web.Contents(
    url as text,
    optional options as record
) as binary
```


## Remarks

Returns the contents downloaded from `url` as binary. An optional record parameter, `options`, may be provided to specify additional properties. The record can contain the following fields:

-   `Query` : Permet afegir de manera programada paràmetres de consulta a l'URL sense que us hàgiu de preocupar dels caràcters d'escapada.
-   `ApiKeyName` : Si el lloc de destinació té nocions d'una clau d'API, aquest paràmetre es pot utilitzar per especificar el nom (no el valor) del paràmetre clau que s'ha d'utilitzar a l'URL. El valor clau real es proporciona a la credencial.
-   `Headers` : Si especifiqueu aquest valor com a registre, se subministraran capçaleres addicionals a una sol·licitud HTTP.
-   `Timeout` : Si especifiqueu aquest valor com a duració, es canviarà el temps d'espera d'una sol·licitud HTTP. El valor per defecte és de 100 segons.
-   `ExcludedFromCacheKey` : Si especifiqueu aquest valor com a llista, s'exclouran aquestes claus de la capçalera HTTP per tal que no formin part del càlcul de les dades d'emmagatzematge a la memòria cau.
-   `IsRetry` : Si especifiqueu aquest valor lògic com a "true", s'ignorarà qualsevol resposta existent a la memòria cau en recollir les dades.
-   `ManualStatusHandling` : Si especifiqueu aquest valor com a llista, evitareu qualsevol administració integrada de les sol·licituds HTTP la resposta de les quals tingui un d'aquests codis d'estat.
-   `RelativePath` : Si especifiqueu aquest valor com a text, s'annexarà a l'URL base abans de fer la sol·licitud.
-   `Content` : Si especifiqueu aquest valor, canviarà la sol·licitud web de tipus GET a POST i s'utilitzarà el valor de l'opció com a contingut de la sol·licitud POST.

The HTTP request is made as either a GET (when no Content is specified) or a POST (when there is Content). POST requests may only be made anonymously.  
  
The headers of the HTTP response are available as metadata on the binary result. Outside of a custom data connector context, only a subset of response headers is available (for security reasons).


## Examples

### Example #1
Recupereu el contingut de `"https://bing.com/search?q=Power+Query"` amb les opcions RelativePath i Query. Aquestes opcions es poden utilitzar per consultar de manera dinàmica una adreça URL base estàtica.
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
Feu una sol·licitud POST per a una URL. Per fer-la, passeu una càrrega JSON binària i analitzeu la resposta com a codi JSON.
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
Connect to a secure URL that accepts an authentication key as part of its query string. Instead of hard-coding the secret key in M (which would pose a security risk), the key can be provided securely by specifying its name (not its value) in M, choosing Web API authentication, and entering the key value as part of the Web API credential. When used in this way, the following example will generate a request to `"https://contoso.com/api/customers/get?api_key=******"`.
```powerquery
Web.Contents("https://contoso.com/api/customers/get", [ApiKeyName="api_key"])
```

Result: 
```powerquery
binary
```




## Category
Accessing data
