---
title: Table.AddIndexColumn
---

# Table.AddIndexColumn


## Description

Dodaje kolonu sa izričitim vrednostima položaja.


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

Dodaje kolonu <code>newColumnName</code> u <code>table</code> sa izričitim vrednostima položaja.    Opcionalna vrednost, <code>initialValue</code>, predstavlja početnu vrednost indeksa. Opcionalna vrednost, <code>increment</code>, navodi koliko se povećava svaka vrednost indeksa.


## Examples

### Example #1 
Dodavanje kolone indeksa „Indeks“ u tabelu.
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
Dodavanje kolone indeksa „Indeks“ u tabelu, počev od vrednosti 10 i sa inkrementom 5.
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
