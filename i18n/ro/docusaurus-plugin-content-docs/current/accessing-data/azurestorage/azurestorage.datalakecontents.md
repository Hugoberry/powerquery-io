---
title: AzureStorage.DataLakeContents
---

# AzureStorage.DataLakeContents


Returnează conținutul fișierului specificat dintr-un sistem de fișiere Azure Data Lake Storage.


## Syntax

```powerquery
AzureStorage.DataLakeContents(
    url as text,
    optional options as record
) as binary
```


## Remarks

Returnează conținutul fișierului de la adresa URL, `url`, dintr-un sistem de fișiere Azure Data Lake Storage. `options` poate fi specificat pentru a controla următoarele opțiuni:

-   `BlockSize` : Numărul de byți de citit înainte de a aștepta consumatorul de date. Valoarea implicită este de 4 MB.
-   `RequestSize` : Numărul de byți pentru care se încearcă citirea într-o singură solicitare HTTP către server. Valoarea implicită este de 4 MB.
-   `ConcurrentRequests` : Opțiunea ConcurrentRequests acceptă descărcarea mai rapidă a datelor, precizând numărul de solicitări de efectuat în paralel, la costul utilizării memoriei. Memoria necesară este (ConcurrentRequest \* RequestSize). Valoarea implicită este 16.



## Category
Accessing data
