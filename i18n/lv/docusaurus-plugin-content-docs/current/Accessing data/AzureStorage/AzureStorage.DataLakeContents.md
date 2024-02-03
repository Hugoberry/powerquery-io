---
title: AzureStorage.DataLakeContents
---

# AzureStorage.DataLakeContents


## Description

Atgriež norādītā faila saturu no Azure Data Lake Storage failu sistēmas.


## Syntax

```powerquery
AzureStorage.DataLakeContents(
    url as text,
    optional options as record
) as binary
```


## Details

Tiek atgriezts faila saturs vietrādī URL, <code>url</code> no Azure Data Lake Storage filesystem. <code>options</code> var norādīt, lai vadītu šādas opcijas:    <ul><li><code>BlockSize</code> : To baitu skaits, kas jālasa pirms datu patēriņa gaidīšanas. Noklusējuma vērtība ir 4 MB.</li><li><code>RequestSize</code> : Baitu skaits, ko mēģināt lasīt vienā HTTP pieprasījumā uz serveri. Noklusējuma vērtība ir 4 MB.</li><li><code>ConcurrentRequests</code> : Opcija ConcurrentRequests nodrošina ātrāku datu lejupielādi, norādot pieprasījumu skaitu, kas jāsniedz vienlaicīgi, izmantojot atmiņas izmantošanas izmaksas. Nepieciešamā atmiņa ir (ConcurrentRequest \* RequestSize). Noklusējuma vērtība ir 16.</li></ul>



## Category
Accessing data
