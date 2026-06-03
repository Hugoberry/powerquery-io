---
title: OData.Feed
---

# OData.Feed


Returnerer en tabel over OData-feeds, der tilbydes af en OData-tjeneste.


## Syntax

```powerquery
OData.Feed(
    serviceUri as text,
    optional headers as record,
    optional options as any
) as any
```


## Remarks

Returnerer en tabel med OData-feeds, der tilbydes af en OData-tjeneste fra en URI `serviceUri`, overskrifter `headers`. En boolesk værdi, der angiver, om der skal bruges samtidige forbindelser eller en valgfri postparameter, `options`, kan angives for at kontrollere følgende muligheder:

-   `Query`: Føj forespørgselsparametre til URL'en ved hjælp af programmering uden at skulle bekymre dig om at undslippe.
-   `Headers`: Hvis denne værdi angives som en post, føjes der yderligere headere til en HTTP-anmodning.
-   `ExcludedFromCacheKey`: Angivelse af denne værdi som en liste vil udelukke disse HTTP-hovednøgler fra at være en del af beregningen til cachelagring af data.
-   `ApiKeyName`: Hvis målwebstedet har et begreb om en API-nøgle, kan denne parameter bruges til at angive navnet (ikke værdien) på nøgleparameteren, der skal bruges i URL-adressen. Den faktiske nøgleværdi er angivet i legitimationsoplysningerne.
-   `Timeout`: Angivelse af denne værdi som en varighed, vil ændre timeout for en HTTP-anmodning. Standardværdien er 600 sekunder.
-   `EnableBatch`: En logisk (sand/falsk), der angiver, om der skal tillades generering af en OData $batch-anmodning, hvis MaxUriLength overskrides (standard er falsk).
-   `MaxUriLength`: Et tal, der angiver den maksimale længde på en tilladt URI, der sendes til en OData-tjeneste. Hvis det overskrides, og EnableBatch er sandt, vil anmodningen blive sendt til et OData $batch-slutpunkt, ellers vil det mislykkes (standard er 2048).
-   `Aktuel`: En logisk værdi (sand/falsk), når den angives til sand, foretages der samtidig anmodninger til tjenesten. Når den er indstillet til falsk, vil anmodninger blive foretaget sekventielt. Når værdien ikke er angivet, bestemmes den af tjenestens AsynchronousRequestsSupported-anmærkning. Hvis tjenesten ikke angiver, om AsynchronousRequestsSupported er understøttet, vil anmodninger blive foretaget sekventielt.
-   `ODataVersion`: Et tal (3 eller 4), der angiver den OData-protokolversion, der skal bruges til denne OData-tjeneste. Når det ikke er angivet, vil alle understøttede versioner blive anmodet om. Tjenesteversionen bestemmes af OData-versionsoverskriften, der returneres af tjenesten.
-   `FunctionOverloads`: En logisk (sand/falsk), når den er sat til sand, vil overbelastninger af funktionsimport blive opført i navigatoren som separate poster. Når den er sat til falsk, vil overbelastninger af funktionsimport blive opført som én unionsfunktion i navigatoren. Standardværdi for V3: falsk. Standardværdi for V4: sand.
-   `MoreColumns`: En logisk (sand/falsk), når den er indstillet til sand, tilføjer en "Flere kolonner"-kolonne til hver enhedsfeed, der indeholder åbne typer og polymorfe typer. Dette vil indeholde de felter, der ikke er erklæret i basistypen. Når falsk, er dette felt ikke til stede. Standard er falsk.
-   `IncludeAnnotations` : En kommasepareret liste over navneområde, kvalificerede navne på udtryk eller mønstre, der skal inkluderes med "\*" som et jokertegn. Som standard er ingen af annoteringerne inkluderet.
-   `IncludeMetadataAnnotations`: En kommasepareret liste over navneområde-kvalificerede navne eller mønstre, der skal inkluderes i anmodninger for metadokumenter, med "\*" som et jokertegn. Indeholder som standard de samme annoteringer som IncludeAnnotations.
-   `OmitValues`: Tillader OData-tjenesten at undlade at medtage visse værdier i svar. Hvis det bekræftes af tjenesten, vil vi udlede disse værdier fra de udeladte felter. Valgmuligheder omfatter:
    -   `ODataOmitValues.Nulls`: Tillader OData-tjenesten at udelade null-værdier.
-   `Implementation`: Angiver den implementering af OData-forbindelseskomponenten, der skal bruges. Gyldige værdier er "2.0" eller null.


## Examples

### Example #1
Opret forbindelse til TripPin OData-tjenesten.
```powerquery
OData.Feed("https://services.odata.org/V4/TripPinService")
```

Result: 
```powerquery
table
```




## Category
Accessing data
