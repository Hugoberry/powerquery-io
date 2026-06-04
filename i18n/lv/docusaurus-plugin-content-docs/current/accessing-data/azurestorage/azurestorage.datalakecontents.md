---
title: AzureStorage.DataLakeContents
---

# AzureStorage.DataLakeContents


Atgriež norādītā faila saturu no Azure Data Lake Storage failu sistēmas.


## Syntax

```powerquery
AzureStorage.DataLakeContents(
    url as text,
    optional options as record
) as binary
```


## Remarks

Tiek atgriezts faila saturs vietrādī URL, `url` no Azure Data Lake Storage filesystem. `options` var norādīt, lai vadītu šādas opcijas:

-   `BlockSize` : To baitu skaits, kas jālasa pirms datu patēriņa gaidīšanas. Noklusējuma vērtība ir 4 MB.
-   `RequestSize` : Baitu skaits, ko mēģināt lasīt vienā HTTP pieprasījumā uz serveri. Noklusējuma vērtība ir 4 MB.
-   `ConcurrentRequests` : Opcija ConcurrentRequests nodrošina ātrāku datu lejupielādi, norādot pieprasījumu skaitu, kas jāsniedz vienlaicīgi, izmantojot atmiņas izmantošanas izmaksas. Nepieciešamā atmiņa ir (ConcurrentRequest \* RequestSize). Noklusējuma vērtība ir 16.



## Category
Accessing data
