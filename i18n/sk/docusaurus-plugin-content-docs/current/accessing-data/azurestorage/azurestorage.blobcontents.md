---
title: AzureStorage.BlobContents
---

# AzureStorage.BlobContents


Vráti obsah zadaného objektu blob z trezora úložiska platformy Azure.


## Syntax

```powerquery
AzureStorage.BlobContents(
    url as text,
    optional options as record
) as binary
```


## Remarks

Vráti obsah objektu BLOB na URL adrese `url` z trezora Azure Storage. Môžete určiť `options` na ovládanie týchto možností:

-   `BlockSize` : Počet bajtov, ktoré sa majú čítať pri čakaní na spotrebiteľa údajov. Predvolená hodnota je 4 MB.
-   `RequestSize` : Počet bajtov v rámci pokusu o čítanie jednej žiadosti HTTP na server. Predvolená hodnota je 4 MB.
-   `ConcurrentRequests` : Možnosť ConcurrentRequests podporuje rýchlejšie sťahovanie údajov zadaním počtu žiadostí, ktoré sa majú vykonať paralelne, čím sa využije naplno pamäť. Vyžaduje sa pamäť (ConcurrentRequest \* RequestSize). Predvolená hodnota je 16.



## Category
Accessing data
