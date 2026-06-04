---
title: AzureStorage.DataLake
---

# AzureStorage.DataLake


Returnează un tabel de navigare ce conține documentele găsite în containerul specificat și subfolderele sale din Azure Data Lake Storage.


## Syntax

```powerquery
AzureStorage.DataLake(
    endpoint as text,
    optional options as record
) as table
```


## Remarks

Returnează un tabel de navigare ce conține documentele găsite în containerul specificat și subfolderele sale la adresa URL a contului, `endpoint`, dintr-un sistem de fișiere Azure Data Lake Storage. `options` poate fi specificat pentru a controla următoarele opțiuni:

-   `BlockSize` : Numărul de byți de citit înainte de a aștepta consumatorul de date. Valoarea implicită este de 4 MB.
-   `RequestSize` : Numărul de byți pentru care se încearcă citirea într-o singură solicitare HTTP către server. Valoarea implicită este de 4 MB.
-   `ConcurrentRequests` : Opțiunea ConcurrentRequests acceptă descărcarea mai rapidă a datelor, precizând numărul de solicitări de efectuat în paralel, la costul utilizării memoriei. Memoria necesară este (ConcurrentRequest \* RequestSize). Valoarea implicită este 16.
-   `HierarchicalNavigation` : O valoare logică (true/false) care controlează dacă fișierele sunt returnate într-o vizualizare de director arborescentă sau într-o listă plată. Valoarea implicită este false.



## Category
Accessing data
