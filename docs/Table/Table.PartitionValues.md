---
title: Table.PartitionValues
---

# Table.PartitionValues


Returns information about how a table is partitioned.


## Syntax

```powerquery
Table.PartitionValues(
    table as table
) as table
```


## Remarks

Returns information about how a table is partitioned.  A table is returned where each column is a partition column in the original table, and each row corresponds to a partition in the original table.



## Category
Table.Information
