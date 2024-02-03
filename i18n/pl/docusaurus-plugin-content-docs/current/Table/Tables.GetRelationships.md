---
title: Tables.GetRelationships
---

# Tables.GetRelationships


## Description

Pobiera relacje z zestawu tabel.


## Syntax

```powerquery
Tables.GetRelationships(
    tables as table,
    optional dataColumn as text
) as table
```


## Details

Pobiera relacje z zestawu tabel. Przyjęto, że struktura zestawu <code>tables</code> przypomina strukturę tabeli nawigacyjnej. Kolumna zdefiniowana przez element <code>dataColumn</code> zawiera rzeczywiste tabele danych.



## Category
Table.Information
