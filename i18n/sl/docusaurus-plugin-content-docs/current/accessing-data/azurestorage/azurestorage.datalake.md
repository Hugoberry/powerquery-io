---
title: AzureStorage.DataLake
---

# AzureStorage.DataLake


Vrne tabelo za krmarjenje, ki vsebuje dokumente, najdene v določenem vsebniku in njegovih podmapah v storitvi Azure Data Lake Storage.


## Syntax

```powerquery
AzureStorage.DataLake(
    endpoint as text,
    optional options as record
) as table
```


## Remarks

Vrne tabelo za krmarjenje, ki vsebuje dokumente, najdene v določenem vsebniku in njegovih podmapah na URL-ju računa `endpoint`, iz datotečnega sistema storitve Azure Data Lake Storage. `options` lahko določite za nadzor teh možnosti:

-   `BlockSize` : Število bajtov, ki jih je treba prebrati pred čakanjem na uporabnika podatkov. Privzeta vrednost je 4 MB.
-   `RequestSize` : Število bajtov za poskus branja v eni zahtevi HTTP za strežnik. Privzeta vrednost je 4 MB.
-   `ConcurrentRequests` : Možnost"ConcurrentRequests"podpira hitrejše prenose podatkov tako, da navede število zahtev, ki jih je mogoče izvesti vzporedno na račun uporabe pomnilnika. Zahtevan je pomnilnik (ConcurrentRequest \* RequestSize). Privzeta vrednost je 16.
-   `HierarchicalNavigation` : Logična vrednost (true/false), ki določa, ali bodo datoteke vrnjene v pogled imenika, podobnem drevesu, ali na ploskem seznamu. Privzeta vrednost je"false".



## Category
Accessing data
