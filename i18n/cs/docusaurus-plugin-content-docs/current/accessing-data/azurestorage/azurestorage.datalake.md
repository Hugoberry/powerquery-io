---
title: AzureStorage.DataLake
---

# AzureStorage.DataLake


Vrátí navigační tabulku obsahující dokumenty nalezené v zadaném kontejneru a jeho podsložkách z Azure Data Lake Storage.


## Syntax

```powerquery
AzureStorage.DataLake(
    endpoint as text,
    optional options as record
) as table
```


## Remarks

Vrátí navigační tabulku obsahující dokumenty nalezené v zadaném kontejneru a jeho podsložkách na adrese URL účtu `endpoint` ze systému souborů Azure Data Lake Storage. Pomocí `options` je možné řídit následující možnosti:

-   `BlockSize` : Počet bajtů, které se mají přečíst, než se počká na příjemce dat. Výchozí hodnota je 4 MB.
-   `RequestSize` : Počet bajtů, které se mají zkusit přečíst z jednoho požadavku HTTP na server. Výchozí hodnota je 4 MB.
-   `ConcurrentRequests` : Možnost ConcurrentRequests podporuje rychlejší stahování dat tím, že umožňuje zadat počet požadavků, které se provedou paralelně, za cenu vyššího využití paměti. Požadované množství paměti je (SouběžnéPožadavky \* VelikostPožadavku). Výchozí hodnota je 16.
-   `HierarchicalNavigation` : Logická hodnota (true/false), která určuje, jestli se soubory vrátí ve stromovém zobrazení adresářů, nebo jako prostý seznam. Výchozí hodnota je false.



## Category
Accessing data
