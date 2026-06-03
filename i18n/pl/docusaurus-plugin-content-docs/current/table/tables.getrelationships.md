---
title: Tables.GetRelationships
---

# Tables.GetRelationships


Pobiera relacje z zestawu tabel.


## Syntax

```powerquery
Tables.GetRelationships(
    tables as table,
    optional dataColumn as text
) as table
```


## Remarks

Pobiera relacje z zestawu tabel. Przyjęto, że struktura zestawu `tables` przypomina strukturę tabeli nawigacyjnej. Kolumna zdefiniowana przez element `dataColumn` zawiera rzeczywiste tabele danych.



## Category
Table.Information
