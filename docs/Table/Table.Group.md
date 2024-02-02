---
title: Table.Group
---

# Table.Group


## Description

Groups rows in the table that have the same key.


## Syntax

```powerquery
Table.Group(
    table as table,
    key as any,
    aggregatedColumns as list,
    optional groupKind as GroupKind.Type,
    optional comparer as function
) as table
```


## Details

Groups the rows of <code>table</code> by the key columns defined by <code>key</code>. The <code>key</code> can either be a single column name, or a list of column names.    For each group, a record is constructed containing the key columns (and their values), along with any aggregated columns specified by <code>aggregatedColumns</code>.    Optionally, <code>groupKind</code> and <code>comparer</code> may also be specified.<br />    <br />    If the data is already sorted by the key columns, then a <code>groupKind</code> of GroupKind.Local can be provided. This may improve the performance of grouping in certain cases,    since all the rows with a given set of key values are assumed to be contiguous.<br />    <br />    When passing a <code>comparer</code>, note that if it treats differing keys as equal, a row may be placed in a group whose keys differ from its own.<br />    <br />    This function does not guarantee the ordering of the rows it returns.  


## Examples

### Example #1 
Group the table adding an aggregate column [total] which contains the sum of prices (&#34;each List.Sum([price])&#34;).
```powerquery
Table.Group(
    Table.FromRecords({
        [CustomerID = 1, price = 20],
        [CustomerID = 2, price = 10],
        [CustomerID = 2, price = 20],
        [CustomerID = 1, price = 10],
        [CustomerID = 3, price = 20],
        [CustomerID = 3, price = 5]
    }),
    "CustomerID",
    {"total", each List.Sum([price])}
)
```

Result: 
```powerquery
Table.FromRecords(
    {
        [CustomerID = 1, total = 30],
        [CustomerID = 2, total = 30],
        [CustomerID = 3, total = 25]
    },
    {"CustomerID", "total"}
)
```




## Category
Table.Transformation
