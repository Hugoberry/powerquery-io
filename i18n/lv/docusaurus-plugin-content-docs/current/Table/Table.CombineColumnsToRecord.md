---
title: Table.CombineColumnsToRecord
---

# Table.CombineColumnsToRecord


## Description

Apvieno norādītās kolonnas jaunā ieraksta vērtību kolonnā, kurā katram ierakstam ir lauku nosaukumi un vērtības, kas atbilst to kolonnu nosaukumiem un vērtībām, kuras tika apvienotas.


## Syntax

```powerquery
Table.CombineColumnsToRecord(
    table as table,
    newColumnName as text,
    sourceColumns as list,
    optional options as record
) as table
```


## Details

Norādītās "<code>table</code>" kolonnas apvieno jaunā ieraksta vērtības kolonnā ar nosaukumu <code>newColumnName</code>, kur katram ierakstam ir lauku nosaukumi un vērtības, kas atbilst kombinētās kolonnas nosaukumiem un vērtībām. Ja objektam <code>options</code> tiek norādīts ieraksts, var norādīt šādas opcijas:     <ul>     <li> <code>DisplayNameColumn</code>: ja norādīts kā teksts, norāda, ka norādītais kolonnas nosaukums ir jāizmanto kā ieraksta parādāmais vārds. Tai nav jābūt kādai no paša ieraksta kolonnām.</li>     <li> <code>TypeName</code>: ja norādīts kā teksts, nodrošina iegūtā ieraksta loģiskā tipa nosaukumu, ko var izmantot datu ielādes laikā, lai vadītu ielādes vides darbību.</li>    </ul>    



## Category
Table.Transformation
