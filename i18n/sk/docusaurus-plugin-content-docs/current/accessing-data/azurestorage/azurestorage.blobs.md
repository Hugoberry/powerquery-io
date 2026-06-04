---
title: AzureStorage.Blobs
---

# AzureStorage.Blobs


Vráti navigačnú tabuľku obsahujúcu kontajnery nachádzajúce sa v zadanom konte z trezora ukladacieho priestoru platformy Azure.


## Syntax

```powerquery
AzureStorage.Blobs(
    account as text,
    optional options as record
) as table
```


## Remarks

Vráti navigačnú tabuľku obsahujúcu riadok pre každý kontajner nachádzajúci sa na URL adrese konta `account` z trezora Azure Storage. Každý riadok obsahuje prepojenie na objekty BLOB kontajnera. Môžete určiť `options` na ovládanie týchto možností:

-   `BlockSize` : Počet bajtov, ktoré sa majú čítať pri čakaní na spotrebiteľa údajov. Predvolená hodnota je 4 MB.
-   `RequestSize` : Počet bajtov v rámci pokusu o čítanie jednej žiadosti HTTP na server. Predvolená hodnota je 4 MB.
-   `ConcurrentRequests` : Možnosť ConcurrentRequests podporuje rýchlejšie sťahovanie údajov zadaním počtu žiadostí, ktoré sa majú vykonať paralelne, čím sa využije naplno pamäť. Vyžaduje sa pamäť (ConcurrentRequest \* RequestSize). Predvolená hodnota je 16.



## Category
Accessing data
