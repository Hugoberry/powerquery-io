---
title: Table.Distinct
---

# Table.Distinct


Fjerner dublerede rækker fra tabellen.


## Syntax

```powerquery
Table.Distinct(
    table as table,
    optional equationCriteria as any
) as table
```


## Remarks

Removes duplicate rows from the table. An optional parameter, `equationCriteria`, specifies which columns of the table are tested for duplication. If `equationCriteria` is not specified, all columns are tested.  
  
Because Power Query sometimes offloads certain operations to backend data sources (known as "folding"), and also sometimes optimizes queries by skipping operations that aren't strictly necessary, in general there's no guarantee which specific duplicate will be preserved. For example, you can't assume that the first row with a unique set of column values will remain, and rows further down in the table will be removed. If you want the duplicate removal to behave predictably, first buffer the table using `Table.Buffer`.


## Examples

### Example #1
Fjern de dublerede rækker fra tabellen.
```powerquery
Table.Distinct(
    Table.FromRecords({
        [a = "A", b = "a"],
        [a = "B", b = "b"],
        [a = "A", b = "a"]
    })
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = "A", b = "a"],
    [a = "B", b = "b"]
})
```


### Example #2
Fjern de dublerede rækker fra kolonnen \[b\] i tabellen `({[a = "A", b = "a"], [a = "B", b = "a"], [a = "A", b = "b"]})`.
```powerquery
Table.Distinct(
    Table.FromRecords({
        [a = "A", b = "a"],
        [a = "B", b = "a"],
        [a = "A", b = "b"]
    }),
    "b"
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = "A", b = "a"],
    [a = "A", b = "b"]
})
```




## Category
Table.Membership
