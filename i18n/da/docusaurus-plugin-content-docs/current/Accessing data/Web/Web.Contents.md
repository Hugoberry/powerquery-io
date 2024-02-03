---
title: Web.Contents
---

# Web.Contents


## Description

Returnerer det indhold, der er downloadet fra URL-adressen, som binært.


## Syntax

```powerquery
Web.Contents(
    url as text,
    optional options as record
) as binary
```


## Details

Returnerer det indhold, der er downloadet fra <code>url</code> som binært. Der kan angives en valgfri postparameter, <code>options</code>, for at angive yderligere egenskaber. Posten kan indeholde følgende felter: <ul><li><code>Query</code> : F&#248;j foresp&#248;rgselsparametre til URL-adressen via programmering uden at skulle bekymre dig om udslip.</li><li><code>ApiKeyName</code> : Hvis destinationswebstedet har et begreb for en API-n&#248;gle, kan denne parameter bruges til at angive navnet (ikke v&#230;rdien) for den n&#248;gleparameter, der skal bruges i URL-adressen. Den faktiske n&#248;glev&#230;rdi angives i legitimationsoplysningerne.</li><li><code>Headers</code> : Hvis denne v&#230;rdi angives som en post, leveres der yderligere overskrifter til en HTTP-anmodning.</li><li><code>Timeout</code> : Hvis du angiver denne v&#230;rdi som en varighed, &#230;ndres timeout for en HTTP-anmodning. Standardv&#230;rdien er 100 sekunder.</li><li><code>ExcludedFromCacheKey</code> : Hvis denne v&#230;rdi angives som en liste, udelades disse HTTP-overskriftsn&#248;gler i beregningen af cachelagringsdata.</li><li><code>IsRetry</code> : Hvis du angiver denne logiske v&#230;rdi som true, ignoreres alle eksisterende svar i cachen, n&#229;r data hentes.</li><li><code>ManualStatusHandling</code> : Hvis du angiver denne v&#230;rdi som en liste, forhindres eventuel indbygget h&#229;ndtering af HTTP-anmodninger, hvis svar har &#233;n af disse statuskoder.</li><li><code>RelativePath</code> : Hvis du angiver denne v&#230;rdi som tekst, f&#248;jes den til basis-URL-adressen, f&#248;r anmodningen foretages.</li><li><code>Content</code> : Hvis denne v&#230;rdi angives, &#230;ndres webanmodningen fra en GET til en POST ved hj&#230;lp af v&#230;rdien for indstillingen som indholdet i POST.</li></ul> HTTP-anmodningen foretages enten som en GET (når der ikke er angivet noget indhold) eller et POST (når der er Indhold). POST-anmodninger kan kun foretages anonymt. <br /> Overskrifterne i HTTP-svaret er tilgængelige som metadata på det binære resultat. Uden for en brugerdefineret dataforbindelseskontekst er kun et undersæt af svarheadere tilgængelige (af sikkerhedsmæssige årsager).


## Examples

### Example #1 
Hent indholdet af &lt;code&gt;&#34;https://bing.com/search?q=Power+Query&#34;&lt;/code&gt; ved hjælp af indstillinger RelativePath og forespørgsel. Disse indstillinger kan bruges til dynamisk forespørgsel på en statisk URL-basisadresse.
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
Opret forbindelse til en sikker URL-adresse, der accepterer en godkendelsesnøgle som en del af forespørgselsstrengen. I stedet for at fastlægge den hemmelige nøgle i M (hvilket ville udgøre en sikkerhedsrisiko) kan     nøglen leveres sikkert ved at angive dens navn (ikke dens værdi) i M, med at vælge Web API-godkendelse og angive nøgleværdien som en del af legitimationsoplysninger for Web API.    Når det bruges på denne måde, genererer følgende eksempel en anmodning til &lt;code&gt;&#34;https://contoso.com/api/customers/get?api_key=\*\*\*\*\*&#34;&lt;/code&gt;.
```powerquery
Web.Contents("https://contoso.com/api/customers/get", [ApiKeyName="api_key"])
```

Result: 
```powerquery
binary
```




## Category
Accessing data
