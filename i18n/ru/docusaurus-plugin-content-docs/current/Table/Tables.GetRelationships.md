---
title: Tables.GetRelationships
---

# Tables.GetRelationships


## Description

Получает связи между набором таблиц.


## Syntax

```powerquery
Tables.GetRelationships(
    tables as table,
    optional dataColumn as text
) as table
```


## Details

Получает связи между набором таблиц. Предполагается, что набор "<code>tables</code>" должен иметь структуру, аналогичную таблице переходов. Столбец, указанный с помощью "<code>dataColumn</code>", содержит фактические таблицы данных.



## Category
Table.Information
