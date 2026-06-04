---
title: AzureStorage.DataLake
---

# AzureStorage.DataLake


Vráti navigačnú tabuľku obsahujúcu dokumenty nájdené v zadanom kontajneri a jeho podpriečinkoch v službe Azure Data Lake Storage.


## Syntax

```powerquery
AzureStorage.DataLake(
    endpoint as text,
    optional options as record
) as table
```


## Remarks

Vráti navigačnú tabuľku obsahujúcu dokumenty nájdené v zadanom kontajneri a jeho podpriečinkoch na URL adrese konta `endpoint` v systéme súborov služby Azure Data Lake Storage. Môžete určiť `options` na ovládanie týchto možností:

-   `BlockSize` : Počet bajtov, ktoré sa majú čítať pri čakaní na spotrebiteľa údajov. Predvolená hodnota je 4 MB.
-   `RequestSize` : Počet bajtov v rámci pokusu o čítanie jednej žiadosti HTTP na server. Predvolená hodnota je 4 MB.
-   `ConcurrentRequests` : Možnosť ConcurrentRequests podporuje rýchlejšie sťahovanie údajov zadaním počtu žiadostí, ktoré sa majú vykonať paralelne, čím sa využije naplno pamäť. Vyžaduje sa pamäť (ConcurrentRequest \* RequestSize). Predvolená hodnota je 16.
-   `HierarchicalNavigation` : Logická hodnota (true/false), ktorá určuje, či sa súbory vrátia v stromovom zobrazení adresára alebo v jednoduchom zozname. Predvolená hodnota je false.



## Category
Accessing data
