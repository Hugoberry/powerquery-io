---
title: Tables.GetRelationships
---

# Tables.GetRelationships


Ruft die Beziehungen zwischen einem Satz von Tabellen ab.


## Syntax

```powerquery
Tables.GetRelationships(
    tables as table,
    optional dataColumn as text
) as table
```


## Remarks

Ruft die Beziehungen zwischen einem Satz von Tabellen ab. Es wird davon ausgegangen, dass der Satz "`tables`" eine ähnliche Struktur wie eine Navigationstabelle hat. Die durch `dataColumn` definierte Spalte enthalt die tatsächlichen Datentabellen.



## Category
Table.Information
