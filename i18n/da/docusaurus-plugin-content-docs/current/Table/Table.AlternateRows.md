---
title: Table.AlternateRows
---

# Table.AlternateRows


Bevarer den første forskydning og skifter derefter mellem at hente og springe følgende rækker over.


## Syntax

```powerquery
Table.AlternateRows(
    table as table,
    offset as number,
    skip as number,
    take as number
) as table
```


## Remarks

Bevarer den første forskydning og skifter derefter mellem at hente og springe følgende rækker over.    <ul>       <li><code>table</code>: Inputtabellen.</li>       <li><code>offset</code>: Det antal rækker, der skal bevares, før gentagelser startes.</li>       <li><code>skip</code>: Det antal rækker, der skal fjernes i hver gentagelse.</li>       <li><code>take</code>: Det antal rækker, der skal bevares i hver gentagelse.</li>    </ul>    


## Examples

### Example #1 
Opret en tabel ud fra tabellen, som med start ved første række springer én værdi over og derefter bevarer én værdi.
```powerquery
Table.AlternateRows(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
    }),
    1,
    1,
    1
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
})
```




## Category
Table.Row operations
