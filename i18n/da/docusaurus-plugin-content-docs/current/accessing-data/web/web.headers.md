---
title: Web.Headers
---

# Web.Headers


Returnerer de HTTP-headere, der er downloadet fra URL-adressen, som en postværdi.


## Syntax

```powerquery
Web.Headers(
    url as text,
    optional options as record
) as record
```


## Remarks

Returnerer de headere, der er downloadet fra `url` som en post. Der kan angives en valgfri postparameter, `options`, for at angive yderligere egenskaber. Posten kan indeholde følgende felter:

-   `Query` : Føj forespørgselsparametre til URL-adressen via programmering uden at skulle bekymre dig om udslip.
-   `ApiKeyName` : Hvis destinationswebstedet har et begreb for en API-nøgle, kan denne parameter bruges til at angive navnet (ikke værdien) for den nøgleparameter, der skal bruges i URL-adressen. Den faktiske nøgleværdi angives i legitimationsoplysningerne.
-   `Headers` : Hvis denne værdi angives som en post, leveres der yderligere overskrifter til en HTTP-anmodning.
-   `Timeout` : Hvis du angiver denne værdi som en varighed, ændres timeout for en HTTP-anmodning. Standardværdien er 100 sekunder.
-   `ExcludedFromCacheKey` : Hvis denne værdi angives som en liste, udelades disse HTTP-overskriftsnøgler i beregningen af cachelagringsdata.
-   `IsRetry` : Hvis du angiver denne logiske værdi som true, ignoreres alle eksisterende svar i cachen, når data hentes.
-   `ManualStatusHandling` : Hvis du angiver denne værdi som en liste, forhindres eventuel indbygget håndtering af HTTP-anmodninger, hvis svar har én af disse statuskoder.
-   `RelativePath` : Hvis du angiver denne værdi som tekst, føjes den til basis-URL-adressen, før anmodningen foretages.

HTTP-anmodningen foretages med HEAD-metoden. Uden for en brugerdefineret dataforbindelseskontekst er kun et undersæt af svarheadere tilgængelige (af sikkerhedsmæssige årsager).


## Examples

### Example #1
Hent HTTP-headerne til `"https://bing.com/search?q=Power+Query"` ved hjælp af indstillingerne RelativePath og Query.
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
