---
title: Table.Buffer
---

# Table.Buffer


## Description

Tabula tiek ievietota atmiņas buferī, nodrošinot tās aizsardzību pret ārējām izmaiņām novērtēšanas laikā.


## Syntax

```powerquery
Table.Buffer(
    table as table,
    optional options as record
) as table
```


## Details

Tabula tiek ievietota atmiņas buferī, novērtēšanas laikā izolējot to no ārējām izmaiņām.    Ievietošana buferī ir sekla. Tas liek novērtēt visas skalārās šūnas vērtības, taču atstāj neskalārās vērtības (ierakstus, sarakstus, tabulas un tā tālāk) tādas, kādas tās ir.    <br />    <br />    Ņemiet vērā, ka, izmantojot šo funkciju, vaicājumi, iespējams, var darboties ātrāk. Dažos gadījumos tas var palēnināt jūsu vaicājumu izpildi, jo rodas papildu     izmaksas par visu datu nolasīšanu un saglabāšanu atmiņā, kā arī tāpēc, ka ievietošana buferī novērš pakārtoto locīšanu. Ja datiem nav jābūt   buferī, bet jūs vienkārši vēlaties novērst tālāku datu locīšanu, tā vietā izmantojiet <code>Table.StopFolding</code>.


## Examples

### Example #1 
Ielādējiet atmiņā visas SQL tabulas rindas, lai neviena lejupstraumes operācija vairs nevarētu veikt vaicājumu SQL serverī.
```powerquery
let
    Source = Sql.Database("SomeSQLServer", "MyDb"),
    MyTable = Source{[Item="MyTable"]}[Data],
    BufferMyTable = Table.Buffer(dbo_MyTable)
in
    BufferMyTable
```

Result: 
```powerquery
table
```




## Category
Table.Other
