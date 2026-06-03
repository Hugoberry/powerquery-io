---
title: AzureStorage.BlobContents
---

# AzureStorage.BlobContents


Returnerer indholdet af den angivne blob fra en samling legitimationsoplysninger i Azure storage.


## Syntax

```powerquery
AzureStorage.BlobContents(
    url as text,
    optional options as record
) as binary
```


## Remarks

Returnerer indholdet af BLOB på URL-adressen, `url`, fra en Azure-opbevaringsboks. Der kan angives `options` for at styre følgende indstillinger:

-   `BlockSize` : Det antal byte der skal læses, før der ventes på dataforbruger. Standardværdien er 4 MB.
-   `RequestSize` : Det antal byte der skal forsøges indlæst i en enkelt HTTP-anmodning til serveren. Standardværdien er 4 MB.
-   `ConcurrentRequests` : Indstillingen ConcurrentRequests understøtter hurtigere download af data ved at angive det antal anmodninger, der skal foretages parallelt ved hukommelsesudnyttelse. Den krævede hukommelse er (ConcurrentRequest \* RequestSize). Standardværdien er 16.



## Category
Accessing data
