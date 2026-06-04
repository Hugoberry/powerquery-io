---
title: AzureStorage.DataLakeContents
---

# AzureStorage.DataLakeContents


Vrne vsebino datoteke, določene v datotečnem sistemu shrambe Azure Data Lake Storage.


## Syntax

```powerquery
AzureStorage.DataLakeContents(
    url as text,
    optional options as record
) as binary
```


## Remarks

Vrne vsebino datoteke na URL-ju `url` iz datotečnega sistema Azure Data Lake Storage. `options` lahko določite za nadzor teh možnosti:

-   `BlockSize` : Število bajtov, ki jih je treba prebrati pred čakanjem na uporabnika podatkov. Privzeta vrednost je 4 MB.
-   `RequestSize` : Število bajtov za poskus branja v eni zahtevi HTTP za strežnik. Privzeta vrednost je 4 MB.
-   `ConcurrentRequests` : Možnost"ConcurrentRequests"podpira hitrejše prenose podatkov tako, da navede število zahtev, ki jih je mogoče izvesti vzporedno na račun uporabe pomnilnika. Zahtevan je pomnilnik (ConcurrentRequest \* RequestSize). Privzeta vrednost je 16.



## Category
Accessing data
