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

Creates an action that, when executed, will return the results of performing a `method` request against `url` using HTTP as a binary value. An optional record parameter, `options`, may be provided to specify additional properties. The record can contain the following fields:

-   `Query` : Føj forespørgselsparametre til URL-adressen via programmering uden at skulle bekymre dig om udslip.
-   `ApiKeyName` : Hvis destinationswebstedet har et begreb for en API-nøgle, kan denne parameter bruges til at angive navnet (ikke værdien) for den nøgleparameter, der skal bruges i URL-adressen. Den faktiske nøgleværdi angives i legitimationsoplysningerne.
-   `Headers` : Hvis denne værdi angives som en post, leveres der yderligere overskrifter til en HTTP-anmodning.
-   `Timeout` : Hvis du angiver denne værdi som en varighed, ændres timeout for en HTTP-anmodning. Standardværdien er 100 sekunder.
-   `ExcludedFromCacheKey` : Hvis denne værdi angives som en liste, udelades disse HTTP-overskriftsnøgler i beregningen af cachelagringsdata.
-   `IsRetry` : Hvis du angiver denne logiske værdi som true, ignoreres alle eksisterende svar i cachen, når data hentes.
-   `ManualStatusHandling` : Hvis du angiver denne værdi som en liste, forhindres eventuel indbygget håndtering af HTTP-anmodninger, hvis svar har én af disse statuskoder.
-   `RelativePath` : Hvis du angiver denne værdi som tekst, føjes den til basis-URL-adressen, før anmodningen foretages.
-   `Content` : Hvis du angiver denne værdi, bliver dens indhold gjort til brødteksten i HTTP-anmodningen.

Note that this function is disabled in most contexts. Consider using Web.Contents or Web.Headers instead.


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
