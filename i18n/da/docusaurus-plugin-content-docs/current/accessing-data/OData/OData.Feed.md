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

Returnerer en tabel med OData-feeds, der tilbydes af en OData-tjeneste fra en URI <code>serviceUri</code>, overskrifter <code>headers</code>. En boolesk værdi, der angiver, om der skal bruges samtidige forbindelser eller en valgfri postparameter, <code>options</code>, kan angives for at kontrollere følgende muligheder:    <ul>    <li><code>Query</code>: Føj forespørgselsparametre til URL'en ved hjælp af programmering uden at skulle bekymre dig om at undslippe. </li>    <li> <code>Headers</code> : Angivelse af denne værdi som en post vil levere yderligere headers til en HTTP-anmodning.</li>    <li> <code>ExcludedFromCacheKey</code>: Angivelse af denne værdi som en liste vil udelukke disse HTTP-hovednøgler fra at være en del af beregningen til cachelagring af data.</li>    <li> <code>ApiKeyName</code> : Hvis målwebstedet ligner en API-nøgle, kan denne parameter bruges til at angive navnet (ikke værdien) på den nøgleparameter, der skal bruges i URL-adressen. Den faktiske nøgleværdi er angivet i legitimationsoplysningerne.</li>    <li> <code>Timeout</code> : Angivelse af denne værdi som en varighed, vil ændre timeout for en HTTP-anmodning. Standardværdien er 600 sekunder.</li>    <li> <code>EnableBatch</code> : En logisk (sand/falsk), der angiver, om der skal tillades generering af en OData $batch-anmodning, hvis MaxUriLength overskrides (standard er falsk).</li>    <li> <code>MaxUriLength</code> : Et tal, der angiver den maksimale længde af en tilladt uri sendt til en OData-tjeneste. Hvis det overskrides, og EnableBatch er sandt, vil anmodningen blive sendt til et OData $batch-slutpunkt, ellers vil det mislykkes (standard er 2048).</li>    <li> <code>Concurrent</code> : En logisk (sand/falsk), når den er sat til sand, vil anmodninger til tjenesten blive lavet samtidigt. Når den er indstillet til falsk, vil anmodninger blive foretaget sekventielt. Når den ikke er angivet, vil værdien blive bestemt af tjenestens AsynchronousRequestsSupported-annotation. Hvis tjenesten ikke angiver, om AsynchronousRequestsSupported er understøttet, vil anmodninger blive foretaget sekventielt.</li>    <li> <code>ODataVersion</code> : Et nummer (3 eller 4), der angiver den OData-protokolversion, der skal bruges til denne OData-tjeneste. Når det ikke er angivet, vil alle understøttede versioner blive anmodet om. Tjenesteversionen bestemmes af OData-versionsoverskriften, der returneres af tjenesten.</li>    <li> <code>FunctionOverloads</code> : En logisk (sand/falsk), når den er sat til sand, vil overbelastninger af funktionsimport blive opført i navigatoren som separate poster. Når den er sat til falsk, vil overbelastninger af funktionsimport blive opført som én unionsfunktion i navigatoren. Standardværdi for V3: falsk. Standardværdi for V4: sand.</li>    <li> <code>MoreColumns</code> : En logisk (sand/falsk), når den er indstillet til sand, tilføjer en "Flere kolonner"-kolonne til hver enhedsfeed, der indeholder åbne typer og polymorfe typer. Dette vil indeholde de felter, der ikke er erklæret i basistypen. Når falsk, er dette felt ikke til stede. Standard er falsk.</li>    <li> <code>IncludeAnnotations</code> : En kommasepareret liste over navneområde, kvalificerede navne på udtryk eller mønstre, der skal inkluderes med "\*" som et jokertegn. Som standard er ingen af annoteringerne inkluderet.</li>    <li> <code>IncludeMetadataAnnotations</code> : En kommasepareret liste over navneområde-kvalificerede navne eller mønstre, der skal inkluderes i anmodninger for metadokumenter, med "\*" som et jokertegn. Indeholder som standard de samme annoteringer som IncludeAnnotations.</li>    <li> <code>OmitValues</code> : Tillader OData-tjenesten at udskrive visse værdier i svar. Hvis det bekræftes af tjenesten, vil vi udlede disse værdier fra de udeladte felter. Valgmuligheder omfatter:      <ul>    <li><code>ODataOmitValues.Nulls</code> : Tillader OData-tjenesten at udelade null-værdier.</li>    </ul>    </li>    <li> <code>Implementation</code> : Angiver implementeringen af OData-connectoren, der skal bruges. Gyldige værdier er "2.0" or null.</li>    </ul>


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
