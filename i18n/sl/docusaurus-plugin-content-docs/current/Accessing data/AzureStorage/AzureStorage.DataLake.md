---
title: AzureStorage.DataLake
---

# AzureStorage.DataLake


## Description

Vrne tabelo za krmarjenje, ki vsebuje dokumente, najdene v določenem vsebniku in njegovih podmapah v storitvi Azure Data Lake Storage.


## Syntax

```powerquery
AzureStorage.DataLake(
    endpoint as text,
    optional options as record
) as table
```


## Details

Vrne tabelo za krmarjenje, ki vsebuje dokumente, najdene v določenem vsebniku in njegovih podmapah na URL-ju računa <code>endpoint</code>, iz datotečnega sistema storitve Azure Data Lake Storage. <code>options</code> lahko določite za nadzor teh možnosti:    <ul><li><code>BlockSize</code> : Število bajtov, ki jih je treba prebrati pred čakanjem na uporabnika podatkov. Privzeta vrednost je 4 MB.</li><li><code>RequestSize</code> : Število bajtov za poskus branja v eni zahtevi HTTP za strežnik. Privzeta vrednost je 4 MB.</li><li><code>ConcurrentRequests</code> : Možnost &#187;ConcurrentRequests&#171; podpira hitrejše prenose podatkov tako, da navede število zahtev, ki jih je mogoče izvesti vzporedno na račun uporabe pomnilnika. Zahtevan je pomnilnik (ConcurrentRequest \* RequestSize). Privzeta vrednost je 16.</li><li><code>HierarchicalNavigation</code> : Logična vrednost (true/false), ki določa, ali bodo datoteke vrnjene v pogled imenika, podobnem drevesu, ali na ploskem seznamu. Privzeta vrednost je &#187;false&#171;.</li></ul>



## Category
Accessing data
