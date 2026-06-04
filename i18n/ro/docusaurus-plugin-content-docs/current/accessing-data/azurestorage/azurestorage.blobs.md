---
title: AzureStorage.Blobs
---

# AzureStorage.Blobs


Returnează un tabel de navigare ce conţine containerele găsite în contul specificat dintr-un seif de stocare Azure.


## Syntax

```powerquery
AzureStorage.Blobs(
    account as text,
    optional options as record
) as table
```


## Remarks

Returnează un tabel de navigare ce conţine un rând pentru fiecare container găsit la adresa URL a contului, `account`, dintr-un seif de stocare Azure. Fiecare rând conţine un link la bloburile containerului. `options` poate fi specificat pentru a controla următoarele opțiuni:

-   `BlockSize` : Numărul de byți de citit înainte de a aștepta consumatorul de date. Valoarea implicită este de 4 MB.
-   `RequestSize` : Numărul de byți pentru care se încearcă citirea într-o singură solicitare HTTP către server. Valoarea implicită este de 4 MB.
-   `ConcurrentRequests` : Opțiunea ConcurrentRequests acceptă descărcarea mai rapidă a datelor, precizând numărul de solicitări de efectuat în paralel, la costul utilizării memoriei. Memoria necesară este (ConcurrentRequest \* RequestSize). Valoarea implicită este 16.



## Category
Accessing data
