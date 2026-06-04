---
title: AzureStorage.DataLake
---

# AzureStorage.DataLake


Tiek atgriezta navigācijas tabula, kurā ir ietverti dokumenti, kas atrasti norādītajā konteinerā un tā apakšmapēs repozitorijā Azure Data Lake Storage.


## Syntax

```powerquery
AzureStorage.DataLake(
    endpoint as text,
    optional options as record
) as table
```


## Remarks

No Azure Data Lake Storage failu sistēmas tiek atgriezta navigācijas tabula, kurā ir ietverti dokumenti, kas atrasti norādītajā konteinerā un tā apakšmapēs konta vietrādī URL `endpoint`. Var tikt norādīts `options`, lai kontrolētu šādas opcijas:

-   `BlockSize` : To baitu skaits, kas jālasa pirms datu patēriņa gaidīšanas. Noklusējuma vērtība ir 4 MB.
-   `RequestSize` : Baitu skaits, ko mēģināt lasīt vienā HTTP pieprasījumā uz serveri. Noklusējuma vērtība ir 4 MB.
-   `ConcurrentRequests` : Opcija ConcurrentRequests nodrošina ātrāku datu lejupielādi, norādot pieprasījumu skaitu, kas jāsniedz vienlaicīgi, izmantojot atmiņas izmantošanas izmaksas. Nepieciešamā atmiņa ir (ConcurrentRequest \* RequestSize). Noklusējuma vērtība ir 16.
-   `HierarchicalNavigation` : Loģisks (patiess/aplams), kas kontrolē, vai faili tiek atgriezti kokā, piemēram, direktorija skatā vai izplātā sarakstā. Noklusējuma vērtība ir FALSE.



## Category
Accessing data
