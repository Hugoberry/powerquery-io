---
title: AzureStorage.DataLake
---

# AzureStorage.DataLake


Returnerer en navigationstabel, der indeholder de dokumenter, som blev fundet i den angivne objektbeholder og dens undermapper fra Azure Data Lake Storage.


## Syntax

```powerquery
AzureStorage.DataLake(
    endpoint as text,
    optional options as record
) as table
```


## Remarks

Returnerer en navigationstabel, der indeholder de dokumenter, som blev fundet i den angivne beholder og dens undermapper på kontoens URL-adresse `endpoint`, fra et Azure-datapuljesystem. `options` kan angives for at styre følgende muligheder: n

-   `BlockSize` : Det antal byte der skal læses, før der ventes på dataforbruger. Standardværdien er 4 MB.
-   `RequestSize` : Det antal byte der skal forsøges indlæst i en enkelt HTTP-anmodning til serveren. Standardværdien er 4 MB.
-   `ConcurrentRequests` : Indstillingen ConcurrentRequests understøtter hurtigere download af data ved at angive det antal anmodninger, der skal foretages parallelt ved hukommelsesudnyttelse. Den krævede hukommelse er (ConcurrentRequest \* RequestSize). Standardværdien er 16.
-   `HierarchicalNavigation` : En logisk værdi (sand/falsk) der bestemmer om filerne returneres i en træ-lignende mappevisning eller som en simpel liste. Standardværdien er Falsk.



## Category
Accessing data
