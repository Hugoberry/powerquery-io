---
title: AzureStorage.Blobs
---

# AzureStorage.Blobs


Vrátí navigační tabulku obsahující kontejnery nalezené v zadaném účtu trezoru úložiště služby Azure.


## Syntax

```powerquery
AzureStorage.Blobs(
    account as text,
    optional options as record
) as table
```


## Remarks

Vrátí navigační tabulku obsahující řádek pro každý kontejner nalezený na adrese URL účtu `account` trezoru úložiště služby Azure. Každý řádek obsahuje odkaz na objekty blob kontejneru. Pomocí `options` je možné řídit následující možnosti:

-   `BlockSize` : Počet bajtů, které se mají přečíst, než se počká na příjemce dat. Výchozí hodnota je 4 MB.
-   `RequestSize` : Počet bajtů, které se mají zkusit přečíst z jednoho požadavku HTTP na server. Výchozí hodnota je 4 MB.
-   `ConcurrentRequests` : Možnost ConcurrentRequests podporuje rychlejší stahování dat tím, že umožňuje zadat počet požadavků, které se provedou paralelně, za cenu vyššího využití paměti. Požadované množství paměti je (SouběžnéPožadavky \* VelikostPožadavku). Výchozí hodnota je 16.



## Category
Accessing data
