---
title: Table.CombineColumnsToRecord
---

# Table.CombineColumnsToRecord


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


## Remarks

Norādītās "`table`" kolonnas apvieno jaunā ieraksta vērtības kolonnā ar nosaukumu `newColumnName`, kur katram ierakstam ir lauku nosaukumi un vērtības, kas atbilst kombinētās kolonnas nosaukumiem un vērtībām. Ja objektam `options` tiek norādīts ieraksts, var norādīt šādas opcijas:

-   `DisplayNameColumn`: ja norādīts kā teksts, norāda, ka norādītais kolonnas nosaukums ir jāizmanto kā ieraksta parādāmais vārds. Tai nav jābūt kādai no paša ieraksta kolonnām.
-   `TypeName`: ja norādīts kā teksts, nodrošina iegūtā ieraksta loģiskā tipa nosaukumu, ko var izmantot datu ielādes laikā, lai vadītu ielādes vides darbību.



## Category
Table.Transformation
