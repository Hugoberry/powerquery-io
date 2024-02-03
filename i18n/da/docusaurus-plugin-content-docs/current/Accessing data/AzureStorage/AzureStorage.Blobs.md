---
title: AzureStorage.Blobs
---

# AzureStorage.Blobs


## Description

Returnerer en navigationstabel, der indeholder de objektbeholdere, som blev fundet i den angivne konto, fra en samling legitimationsoplysninger i Azure storage.


## Syntax

```powerquery
AzureStorage.Blobs(
    account as text,
    optional options as record
) as table
```


## Details

Returnerer en navigationstabel, der indeholder en række for hver beholder, som blev fundet i konto-webadressen <code>account</code>, fra en Azure-opbevaringsboks. De enkelte rækker indeholder et link til beholderblobbene. <code>options</code> kan specificeres for at kontrollere følgende muligheder:    <ul><li><code>BlockSize</code> : Det antal byte der skal l&#230;ses, f&#248;r der ventes p&#229; dataforbruger. Standardv&#230;rdien er 4 MB.</li><li><code>RequestSize</code> : Det antal byte der skal fors&#248;ges indl&#230;st i en enkelt HTTP-anmodning til serveren. Standardv&#230;rdien er 4 MB.</li><li><code>ConcurrentRequests</code> : Indstillingen ConcurrentRequests underst&#248;tter hurtigere download af data ved at angive det antal anmodninger, der skal foretages parallelt ved hukommelsesudnyttelse. Den kr&#230;vede hukommelse er (ConcurrentRequest \* RequestSize). Standardv&#230;rdien er 16.</li></ul>



## Category
Accessing data
