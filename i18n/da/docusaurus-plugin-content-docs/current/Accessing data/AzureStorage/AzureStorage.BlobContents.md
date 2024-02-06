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

Returnerer indholdet af BLOB på URL-adressen, <code>url</code>, fra en Azure-opbevaringsboks. Der kan angives <code>options</code> for at styre følgende indstillinger:    <ul><li><code>BlockSize</code> : Det antal byte der skal l&#230;ses, f&#248;r der ventes p&#229; dataforbruger. Standardv&#230;rdien er 4 MB.</li><li><code>RequestSize</code> : Det antal byte der skal fors&#248;ges indl&#230;st i en enkelt HTTP-anmodning til serveren. Standardv&#230;rdien er 4 MB.</li><li><code>ConcurrentRequests</code> : Indstillingen ConcurrentRequests underst&#248;tter hurtigere download af data ved at angive det antal anmodninger, der skal foretages parallelt ved hukommelsesudnyttelse. Den kr&#230;vede hukommelse er (ConcurrentRequest \* RequestSize). Standardv&#230;rdien er 16.</li></ul>



## Category
Accessing data
