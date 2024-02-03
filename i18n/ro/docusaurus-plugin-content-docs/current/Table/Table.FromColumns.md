---
title: Table.FromColumns
---

# Table.FromColumns


## Description

Creează un tabel cu o listă de coloane şi valori specificate.


## Syntax

```powerquery
Table.FromColumns(
    lists as list,
    optional columns as any
) as table
```


## Details

Creează un tabel de tip <code>columns</code> dintr-o listă <code>lists</code> care conține liste imbricate cu nume și valori pentru coloane.    Dacă anumite coloane au mai multe valori decât alte coloane, valorile lipsă vor fi completate cu valoarea implicită, „null”, în cazul în care coloanele pot avea valori nule.


## Examples

### Example #1 
Se returnează un tabel dintr-o listă de nume de clienți. Fiecare valoare din elementul listă de clienți devine valoare de rând și fiecare listă devine o coloană.
```powerquery
Table.FromColumns({
    {1, "Bob", "123-4567"},
    {2, "Jim", "987-6543"},
    {3, "Paul", "543-7890"}
})
```

Result: 
```powerquery
Table.FromRecords({
    [Column1 = 1, Column2 = 2, Column3 = 3],
    [Column1 = "Bob", Column2 = "Jim", Column3 = "Paul"],
    [Column1 = "123-4567", Column2 = "987-6543", Column3 = "543-7890"]
})
```


### Example #2 
Creaţi un tabel de la o listă de coloane dată şi de la o listă de nume de coloane.
```powerquery
Table.FromColumns(
    {
        {1, "Bob", "123-4567"},
        {2, "Jim", "987-6543"},
        {3, "Paul", "543-7890"}
    },
    {"CustomerID", "Name", "Phone"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = 2, Phone = 3],
    [CustomerID = "Bob", Name = "Jim", Phone = "Paul"],
    [CustomerID = "123-4567", Name = "987-6543", Phone = "543-7890"]
})
```


### Example #3 
Creați un tabel cu un număr diferit de coloane pe rând. Valoarea unui rând lipsă este nulă.
```powerquery
Table.FromColumns(
    {
        {1, 2, 3},
        {4, 5},
        {6, 7, 8, 9}
    },
    {"column1", "column2", "column3"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [column1 = 1, column2 = 4, column3 = 6],
    [column1 = 2, column2 = 5, column3 = 7],
    [column1 = 3, column2 = null, column3 = 8],
    [column1 = null, column2 = null, column3 = 9]
})
```




## Category
Table.Table construction
