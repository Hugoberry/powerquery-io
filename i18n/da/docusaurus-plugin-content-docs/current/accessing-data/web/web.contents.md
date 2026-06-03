---
title: Web.Contents
---

# Web.Contents


Returnerer det indhold, der er downloadet fra URL-adressen, som binært.


## Syntax

```powerquery
Web.Contents(
    url as text,
    optional options as record
) as binary
```


## Remarks

Returns the contents downloaded from `url` as binary. An optional record parameter, `options`, may be provided to specify additional properties. The record can contain the following fields:

-   `Query` : Føj forespørgselsparametre til URL-adressen via programmering uden at skulle bekymre dig om udslip.
-   `ApiKeyName` : Hvis destinationswebstedet har et begreb for en API-nøgle, kan denne parameter bruges til at angive navnet (ikke værdien) for den nøgleparameter, der skal bruges i URL-adressen. Den faktiske nøgleværdi angives i legitimationsoplysningerne.
-   `Headers` : Hvis denne værdi angives som en post, leveres der yderligere overskrifter til en HTTP-anmodning.
-   `Timeout` : Hvis du angiver denne værdi som en varighed, ændres timeout for en HTTP-anmodning. Standardværdien er 100 sekunder.
-   `ExcludedFromCacheKey` : Hvis denne værdi angives som en liste, udelades disse HTTP-overskriftsnøgler i beregningen af cachelagringsdata.
-   `IsRetry` : Hvis du angiver denne logiske værdi som true, ignoreres alle eksisterende svar i cachen, når data hentes.
-   `ManualStatusHandling` : Hvis du angiver denne værdi som en liste, forhindres eventuel indbygget håndtering af HTTP-anmodninger, hvis svar har én af disse statuskoder.
-   `RelativePath` : Hvis du angiver denne værdi som tekst, føjes den til basis-URL-adressen, før anmodningen foretages.
-   `Content` : Hvis denne værdi angives, ændres webanmodningen fra en GET til en POST ved hjælp af værdien for indstillingen som indholdet i POST.

The HTTP request is made as either a GET (when no Content is specified) or a POST (when there is Content). POST requests may only be made anonymously.  
  
The headers of the HTTP response are available as metadata on the binary result. Outside of a custom data connector context, only a subset of response headers is available (for security reasons).


## Examples

### Example #1
Hent indholdet af `"https://bing.com/search?q=Power+Query"` ved hjælp af indstillinger RelativePath og forespørgsel. Disse indstillinger kan bruges til dynamisk forespørgsel på en statisk URL-basisadresse.
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
Udfør et POST mod en webadresse, videregiver et binært JSON-nyttedata, og parser svaret som JSON.
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
