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

Returnerer en navigationstabel, der indeholder de dokumenter, som blev fundet i den angivne beholder og dens undermapper på kontoens URL-adresse <code>endpoint</code>, fra et Azure-datapuljesystem. <code>options</code> kan angives for at styre følgende muligheder:n    <ul><li><code>BlockSize</code> : Det antal byte der skal l&#230;ses, f&#248;r der ventes p&#229; dataforbruger. Standardv&#230;rdien er 4 MB.</li><li><code>RequestSize</code> : Det antal byte der skal fors&#248;ges indl&#230;st i en enkelt HTTP-anmodning til serveren. Standardv&#230;rdien er 4 MB.</li><li><code>ConcurrentRequests</code> : Indstillingen ConcurrentRequests underst&#248;tter hurtigere download af data ved at angive det antal anmodninger, der skal foretages parallelt ved hukommelsesudnyttelse. Den kr&#230;vede hukommelse er (ConcurrentRequest \* RequestSize). Standardv&#230;rdien er 16.</li><li><code>HierarchicalNavigation</code> : En logisk v&#230;rdi (sand/falsk) der bestemmer om filerne returneres i en tr&#230;-lignende mappevisning eller som en simpel liste. Standardv&#230;rdien er Falsk.</li></ul>



## Category
Accessing data
