---
title: Tables.GetRelationships
---

# Tables.GetRelationships


Gets the relationships among a set of tables.


## Syntax

```powerquery
Tables.GetRelationships(
    tables as table,
    optional dataColumn as text
) as table
```


## Remarks

Gets the relationships among a set of tables. The set `tables` is assumed to have a structure similar to that of a navigation table. The column defined by `dataColumn` contains the actual data tables.



## Category
Table.Information
