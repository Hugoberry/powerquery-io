---
title: AzureStorage.DataLake
---

# AzureStorage.DataLake


## Description

Tiek atgriezta navigācijas tabula, kurā ir ietverti dokumenti, kas atrasti norādītajā konteinerā un tā apakšmapēs repozitorijā Azure Data Lake Storage.


## Syntax

```powerquery
AzureStorage.DataLake(
    endpoint as text,
    optional options as record
) as table
```


## Details

No Azure Data Lake Storage failu sistēmas tiek atgriezta navigācijas tabula, kurā ir ietverti dokumenti, kas atrasti norādītajā konteinerā un tā apakšmapēs konta vietrādī URL <code>endpoint</code>. Var tikt norādīts <code>options</code>, lai kontrolētu šādas opcijas:    <ul><li><code>BlockSize</code> : To baitu skaits, kas jālasa pirms datu patēriņa gaidīšanas. Noklusējuma vērtība ir 4 MB.</li><li><code>RequestSize</code> : Baitu skaits, ko mēģināt lasīt vienā HTTP pieprasījumā uz serveri. Noklusējuma vērtība ir 4 MB.</li><li><code>ConcurrentRequests</code> : Opcija ConcurrentRequests nodrošina ātrāku datu lejupielādi, norādot pieprasījumu skaitu, kas jāsniedz vienlaicīgi, izmantojot atmiņas izmantošanas izmaksas. Nepieciešamā atmiņa ir (ConcurrentRequest \* RequestSize). Noklusējuma vērtība ir 16.</li><li><code>HierarchicalNavigation</code> : Loģisks (patiess/aplams), kas kontrolē, vai faili tiek atgriezti kokā, piemēram, direktorija skatā vai izplātā sarakstā. Noklusējuma vērtība ir FALSE.</li></ul>



## Category
Accessing data
