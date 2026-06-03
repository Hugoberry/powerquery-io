---
title: AzureStorage.Blobs
---

# AzureStorage.Blobs


Returnerer en navigationstabel, der indeholder de objektbeholdere, som blev fundet i den angivne konto, fra en samling legitimationsoplysninger i Azure storage.


## Syntax

```powerquery
AzureStorage.Blobs(
    account as text,
    optional options as record
) as table
```


## Remarks

Returnerer en navigationstabel, der indeholder en række for hver beholder, som blev fundet i konto-webadressen `account`, fra en Azure-opbevaringsboks. De enkelte rækker indeholder et link til beholderblobbene. `options` kan specificeres for at kontrollere følgende muligheder:

-   `BlockSize` : Det antal byte der skal læses, før der ventes på dataforbruger. Standardværdien er 4 MB.
-   `RequestSize` : Det antal byte der skal forsøges indlæst i en enkelt HTTP-anmodning til serveren. Standardværdien er 4 MB.
-   `ConcurrentRequests` : Indstillingen ConcurrentRequests understøtter hurtigere download af data ved at angive det antal anmodninger, der skal foretages parallelt ved hukommelsesudnyttelse. Den krævede hukommelse er (ConcurrentRequest \* RequestSize). Standardværdien er 16.



## Category
Accessing data
