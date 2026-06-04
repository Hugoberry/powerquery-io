---
title: Table.FromRows
---

# Table.FromRows


Creează un tabel dintr-o listă de valori pentru rând și coloane opționale.


## Syntax

```powerquery
Table.FromRows(
    rows as list,
    optional columns as any
) as table
```


## Remarks

Creează un tabel din lista `rows`, în care fiecare element din listă este o listă interioară, care conține valorile de coloane pentru un singur rând. O listă opțională de nume de coloane, un tip de tabel sau un număr de coloane pot fi furnizate pentru `columns`.


## Examples

### Example #1
Returnează un tabel cu coloana \[IDClient\] cu valorile \{1, 2\}, coloana \[Nume\] cu valorile \{"Bob", "Jim"\} și coloana \[Telefon\] cu valorile \{"123-4567", "987-6543"\}.
```powerquery
Table.FromRows(
    {
        {1, "Bob", "123-4567"},
        {2, "Jim", "987-6543"}
    },
    {"CustomerID", "Name", "Phone"}
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
Returnează un tabel cu coloana \[IDClient\] cu valorile \{1, 2\}, coloana \[Nume\] cu valorile \{"Bob", "Jim"\} și coloana \[Telefon\] cu valorile \{"123-4567", "987-6543"\}, unde \[IDClient\] este tipul de număr și \[Nume\] și \[Telefon\] sunt tipuri de text.
```powerquery
Table.FromRows(
    {
        {1, "Bob", "123-4567"},
        {2, "Jim", "987-6543"}
    },
    type table [CustomerID = number, Name = text, Phone = text]
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"]
})
```




## Category
Table.Table construction
