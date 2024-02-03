---
title: Tables.GetRelationships
---

# Tables.GetRelationships


## Description

Gets the relationships among a set of tables.


## Syntax

```powerquery
Tables.GetRelationships(
    tables as table,
    optional dataColumn as text
) as table
```


## Details

Gets the relationships among a set of tables. The set <code>tables</code> is assumed to have a structure similar to that of a navigation table. The column defined by <code>dataColumn</code> contains the actual data tables.



## Category
Table.Information
