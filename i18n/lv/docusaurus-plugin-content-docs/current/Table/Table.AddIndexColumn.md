---
title: Table.AddIndexColumn
---

# Table.AddIndexColumn


## Description

Tiek pievienota kolonna, kurā ir ietvertas konkrētas pozīciju vērtības.


## Syntax

```powerquery
Table.AddIndexColumn(
    table as table,
    newColumnName as text,
    optional initialValue as number,
    optional increment as number,
    optional columnType as type
) as table
```


## Details

Tabulai <code>table</code> tiek pievienota kolonna ar nosaukumu <code>newColumnName</code>, kurā ir ietvertas konkrētas pozīciju vērtības.    Varat norādīt papildu sākotnējā indeksa vērtību <code>initialValue</code>. Varat norādīt papildu vērtību <code>increment</code>, lai noteiktu katras indeksa vērtības palielinājumu.


## Examples

### Example #1 
Pievienojiet tabulai indeksa kolonnu ar nosaukumu &#34;Index&#34;.
```powerquery
Table.AddIndexColumn(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    "Index"
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = "Bob", Phone = "123-4567", Index = 0],
    [CustomerID = 2, Name = "Jim", Phone = "987-6543", Index = 1],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890", Index = 2],
    [CustomerID = 4, Name = "Ringo", Phone = "232-1550", Index = 3]
})
```


### Example #2 
Pievienojiet tabulai indeksa kolonnu ar nosaukumu &#34;index&#34;, kuras pirmā vērtība ir 10 un katra nākamā vērtība ir palielināta par 5.
```powerquery
Table.AddIndexColumn(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    "Index",
    10,
    5
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = "Bob", Phone = "123-4567", Index = 10],
    [CustomerID = 2, Name = "Jim", Phone = "987-6543", Index = 15],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890", Index = 20],
    [CustomerID = 4, Name = "Ringo", Phone = "232-1550", Index = 25]
})
```




## Category
Table.Transformation
