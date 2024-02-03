---
title: Table.RemoveLastN
---

# Table.RemoveLastN


## Description

Returnerar en tabell där de sista N raderna tagits bort.


## Syntax

```powerquery
Table.RemoveLastN(
    table as table,
    optional countOrCondition as any
) as table
```


## Details

Returnerar en tabell som inte innehåller de sista <code>countOrCondition</code> raderna i tabellen <code>table</code>.        Hur många rader som tas bort beror på den valfria parametern <code>countOrCondition</code>.    <ul>    <li> Om <code>countOrCondition</code> utelämnas tas bara den sista raden bort. </li>    <li> Om <code>countOrCondition</code> är ett tal tas så många rader (med början nedifrån) bort. </li>    <li> Om <code>countOrCondition</code> är ett villkor tas de rader som uppfyller villkoret bort tills en rad inte uppfyller villkoret.</li>    </ul>


## Examples

### Example #1 
Ta bort den sista raden i tabellen.
```powerquery
Table.RemoveLastN(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    1
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
})
```


### Example #2 
Ta bort de sista raderna där [CustomerID] &gt; 2 i tabellen.
```powerquery
Table.RemoveLastN(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    each [CustomerID] >= 2
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```




## Category
Table.Row operations
