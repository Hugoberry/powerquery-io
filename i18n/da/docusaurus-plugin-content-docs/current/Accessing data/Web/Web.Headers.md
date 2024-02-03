---
title: Web.Headers
---

# Web.Headers


## Description

Returnerer de HTTP-headere, der er downloadet fra URL-adressen, som en postværdi.


## Syntax

```powerquery
Web.Headers(
    url as text,
    optional options as record
) as record
```


## Details

Returnerer de headere, der er downloadet fra <code>url</code> som en post. Der kan angives en valgfri postparameter, <code>options</code>, for at angive yderligere egenskaber. Posten kan indeholde følgende felter: <ul><li><code>Query</code> : F&#248;j foresp&#248;rgselsparametre til URL-adressen via programmering uden at skulle bekymre dig om udslip.</li><li><code>ApiKeyName</code> : Hvis destinationswebstedet har et begreb for en API-n&#248;gle, kan denne parameter bruges til at angive navnet (ikke v&#230;rdien) for den n&#248;gleparameter, der skal bruges i URL-adressen. Den faktiske n&#248;glev&#230;rdi angives i legitimationsoplysningerne.</li><li><code>Headers</code> : Hvis denne v&#230;rdi angives som en post, leveres der yderligere overskrifter til en HTTP-anmodning.</li><li><code>Timeout</code> : Hvis du angiver denne v&#230;rdi som en varighed, &#230;ndres timeout for en HTTP-anmodning. Standardv&#230;rdien er 100 sekunder.</li><li><code>ExcludedFromCacheKey</code> : Hvis denne v&#230;rdi angives som en liste, udelades disse HTTP-overskriftsn&#248;gler i beregningen af cachelagringsdata.</li><li><code>IsRetry</code> : Hvis du angiver denne logiske v&#230;rdi som true, ignoreres alle eksisterende svar i cachen, n&#229;r data hentes.</li><li><code>ManualStatusHandling</code> : Hvis du angiver denne v&#230;rdi som en liste, forhindres eventuel indbygget h&#229;ndtering af HTTP-anmodninger, hvis svar har &#233;n af disse statuskoder.</li><li><code>RelativePath</code> : Hvis du angiver denne v&#230;rdi som tekst, f&#248;jes den til basis-URL-adressen, f&#248;r anmodningen foretages.</li></ul> HTTP-anmodningen foretages med HEAD-metoden. Uden for en brugerdefineret dataforbindelseskontekst er kun et undersæt af svarheadere tilgængelige (af sikkerhedsmæssige årsager).


## Examples

### Example #1 
Hent HTTP-headerne til &lt;code&gt;&#34;https://bing.com/search?q=Power+Query&#34;&lt;/code&gt; ved hjælp af indstillingerne RelativePath og Query.
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
