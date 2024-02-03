---
title: AzureStorage.Blobs
---

# AzureStorage.Blobs


## Description

Atgriež navigācijas tabulu ar konteineriem, kas atrasti norādītajā kontā no Azure krātuves akreditācijas datu komplekta.


## Syntax

```powerquery
AzureStorage.Blobs(
    account as text,
    optional options as record
) as table
```


## Details

Atgriež navigācijas tabulu ar rindām par katru konteineri, kas atrasts, izmantojot konta vietrādi URL, <code>account</code>, no Azure krātuves akreditācijas datu komplekta. Katrā rindā ir saite uz konteinera BLOB failiem. Var tikt norādīts <code>options</code>, lai kontrolētu šādas opcijas:    <ul><li><code>BlockSize</code> : To baitu skaits, kas jālasa pirms datu patēriņa gaidīšanas. Noklusējuma vērtība ir 4 MB.</li><li><code>RequestSize</code> : Baitu skaits, ko mēģināt lasīt vienā HTTP pieprasījumā uz serveri. Noklusējuma vērtība ir 4 MB.</li><li><code>ConcurrentRequests</code> : Opcija ConcurrentRequests nodrošina ātrāku datu lejupielādi, norādot pieprasījumu skaitu, kas jāsniedz vienlaicīgi, izmantojot atmiņas izmantošanas izmaksas. Nepieciešamā atmiņa ir (ConcurrentRequest \* RequestSize). Noklusējuma vērtība ir 16.</li></ul>



## Category
Accessing data
