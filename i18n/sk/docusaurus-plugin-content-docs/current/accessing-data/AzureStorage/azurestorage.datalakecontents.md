---
title: AzureStorage.DataLakeContents
---

# AzureStorage.DataLakeContents


Vráti obsah určeného súboru zo systému súborov Azure Data Lake Storage.


## Syntax

```powerquery
AzureStorage.DataLakeContents(
    url as text,
    optional options as record
) as binary
```


## Remarks

Vráti obsah súboru na URL adrese `url` zo systému súborov v služby Azure Data Lake Storage. Môžete určiť `options` na ovládanie týchto možností:

-   `BlockSize` : Počet bajtov, ktoré sa majú čítať pri čakaní na spotrebiteľa údajov. Predvolená hodnota je 4 MB.
-   `RequestSize` : Počet bajtov v rámci pokusu o čítanie jednej žiadosti HTTP na server. Predvolená hodnota je 4 MB.
-   `ConcurrentRequests` : Možnosť ConcurrentRequests podporuje rýchlejšie sťahovanie údajov zadaním počtu žiadostí, ktoré sa majú vykonať paralelne, čím sa využije naplno pamäť. Vyžaduje sa pamäť (ConcurrentRequest \* RequestSize). Predvolená hodnota je 16.



## Category
Accessing data
