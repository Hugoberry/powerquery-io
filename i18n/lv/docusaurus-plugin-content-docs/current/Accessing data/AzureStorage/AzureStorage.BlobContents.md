---
title: AzureStorage.BlobContents
---

# AzureStorage.BlobContents


## Description

Atgriež norādītā BLOB saturu no Azure krātuves akreditācijas datu komplekta.


## Syntax

```powerquery
AzureStorage.BlobContents(
    url as text,
    optional options as record
) as binary
```


## Details

Atgriež BLOB saturu vietrādī URL, <code>url</code> no Azure krātuves glabātavas. <code>options</code> var norādīt, lai vadītu šādas opcijas:    <ul><li><code>BlockSize</code> : To baitu skaits, kas jālasa pirms datu patēriņa gaidīšanas. Noklusējuma vērtība ir 4 MB.</li><li><code>RequestSize</code> : Baitu skaits, ko mēģināt lasīt vienā HTTP pieprasījumā uz serveri. Noklusējuma vērtība ir 4 MB.</li><li><code>ConcurrentRequests</code> : Opcija ConcurrentRequests nodrošina ātrāku datu lejupielādi, norādot pieprasījumu skaitu, kas jāsniedz vienlaicīgi, izmantojot atmiņas izmantošanas izmaksas. Nepieciešamā atmiņa ir (ConcurrentRequest \* RequestSize). Noklusējuma vērtība ir 16.</li></ul>



## Category
Accessing data
