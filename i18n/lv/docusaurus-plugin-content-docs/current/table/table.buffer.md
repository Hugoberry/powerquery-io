---
title: Table.Buffer
---

# Table.Buffer


Tabula tiek ievietota atmiņas buferī, nodrošinot tās aizsardzību pret ārējām izmaiņām novērtēšanas laikā.


## Syntax

```powerquery
Table.Buffer(
    table as table,
    optional options as record
) as table
```


## Remarks

Buferē tabulu atmiņā, novēršot tās ārējās izmaiņas novērtēšanas laikā. Buferēšana ir sekla. Tā piespiež novērtēt visas skalārās šūnu vērtības, bet atstāj neskalārās vērtības (ierakstus, sarakstus, tabulas u.c.) nemainītas.

-   `table`: Tabula buferēšanai atmiņā.
-   `options`: (Neobligāti) Var izmantot šādas opciju ierakstu vērtības:
    -   `BufferMode`: buferēšanas režīms, kas apraksta veicamo buferēšanas tipu. Šī opcija var būt vai nu `BufferMode.Eager`, vai `BufferMode.Delayed`.

Šīs funkcijas izmantošana var paātrināt vai palēnināt vaicājumu izpildi. Dažos gadījumos tā var palēnināt vaicājumu izpildi, jo tiek pievienotas visu datu lasīšanas un glabāšanas atmiņā izmaksas, kā arī fakts, ka buferēšana novērš lejupstraumes locīšanu. Ja dati nav jā buferē, bet ir nepieciešams tikai novērst lejupstraumes locīšanu, izmantojiet `Table.StopFolding`.


## Examples

### Example #1
Ielādējiet atmiņā visas SQL tabulas rindas, lai neviena lejupstraumes operācija vairs nevarētu veikt vaicājumu SQL serverī.
```powerquery
let
    Source = Sql.Database("SomeSQLServer", "MyDb"),
    MyTable = Source{[Item="MyTable"]}[Data],
    BufferMyTable = Table.Buffer(MyTable)
in
    BufferMyTable
```

Result: 
```powerquery
table
```




## Category
Table.Other
