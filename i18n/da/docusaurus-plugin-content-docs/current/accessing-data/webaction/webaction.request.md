---
title: WebAction.Request
---

# WebAction.Request


Opretter en handling, som, når den udføres, returnerer resultaterne af en udført HTTP-forespørgsel som en binær værdi.


## Syntax

```powerquery
WebAction.Request(
    method as text,
    url as text,
    optional options as record
) as action
```


## Remarks

Opretter en handling, der, når den udføres, returnerer resultaterne af at udføre en <code>method</code> anmodning mod <code>url</code> ved hjælp af HTTP som en binær værdi. Der kan angives en valgfri postparameter, <code>options</code>, for at angive yderligere egenskaber. Posten kan indeholde følgende felter: <ul><li><code>Query</code> : F&#248;j foresp&#248;rgselsparametre til URL-adressen via programmering uden at skulle bekymre dig om udslip.</li><li><code>ApiKeyName</code> : Hvis destinationswebstedet har et begreb for en API-n&#248;gle, kan denne parameter bruges til at angive navnet (ikke v&#230;rdien) for den n&#248;gleparameter, der skal bruges i URL-adressen. Den faktiske n&#248;glev&#230;rdi angives i legitimationsoplysningerne.</li><li><code>Headers</code> : Hvis denne v&#230;rdi angives som en post, leveres der yderligere overskrifter til en HTTP-anmodning.</li><li><code>Timeout</code> : Hvis du angiver denne v&#230;rdi som en varighed, &#230;ndres timeout for en HTTP-anmodning. Standardv&#230;rdien er 100 sekunder.</li><li><code>ExcludedFromCacheKey</code> : Hvis denne v&#230;rdi angives som en liste, udelades disse HTTP-overskriftsn&#248;gler i beregningen af cachelagringsdata.</li><li><code>IsRetry</code> : Hvis du angiver denne logiske v&#230;rdi som true, ignoreres alle eksisterende svar i cachen, n&#229;r data hentes.</li><li><code>ManualStatusHandling</code> : Hvis du angiver denne v&#230;rdi som en liste, forhindres eventuel indbygget h&#229;ndtering af HTTP-anmodninger, hvis svar har &#233;n af disse statuskoder.</li><li><code>RelativePath</code> : Hvis du angiver denne v&#230;rdi som tekst, f&#248;jes den til basis-URL-adressen, f&#248;r anmodningen foretages.</li><li><code>Content</code> : Hvis du angiver denne v&#230;rdi, bliver dens indhold gjort til br&#248;dteksten i HTTP-anmodningen.</li></ul>    <br /> Bemærk, at denne funktion er deaktiveret i de fleste kontekster. Overvej at bruge Web.Contents eller Web.Headers i stedet.


## Examples

### Example #1 
Udfør en GET-anmodning mod Bing.
```powerquery
WebAction.Request(WebMethod.Get, "https://bing.com")
```

Result: 
```powerquery
Action
```




## Category
Action
