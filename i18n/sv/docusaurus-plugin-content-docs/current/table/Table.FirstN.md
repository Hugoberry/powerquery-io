---
title: Table.FirstN
---

# Table.FirstN


Returnerar så många första rader som angetts.


## Syntax

```powerquery
Table.FirstN(
    table as table,
    countOrCondition as any
) as table
```


## Remarks

Returnerar den eller de första raderna i tabellen <code>table</code>, beroende på värdet för <code>countOrCondition</code>:    <ul>    <li> Om <code>countOrCondition</code> är ett tal returneras så många rader (med början ovanifrån). </li>    <li> Om <code>countOrCondition</code> är ett villkor returneras de rader som uppfyller villkoret tills en rad inte uppfyller villkoret.</li></ul>


## Examples

### Example #1 
Hitta de två första raderna i tabellen.
```powerquery
Table.FirstN(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
    }),
    2
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"]
})
```


### Example #2 
Hitta de första raderna där [a] &gt; 0 i tabellen.
```powerquery
Table.FirstN(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 3, b = 4],
        [a = -5, b = -6]
    }),
    each [a] > 0
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = 1, b = 2],
    [a = 3, b = 4]
})
```




## Category
Table.Row operations
