---
title: Table.FromRecords
---

# Table.FromRecords


Converteşte o listă de înregistrări într-un tabel.


## Syntax

```powerquery
Table.FromRecords(
    records as list,
    optional columns as any,
    optional missingField as MissingField.Type
) as table
```


## Remarks

Efectuează conversia unei liste specificate de înregistrări într-un tabel.

-   `records`: lista de înregistrări de convertit într-un tabel.
-   `columns`: (opțional) o listă cu numele de coloane ale tabelului sau cu tipul tabelului.
-   `missingField`: (opțional) specifică modul de tratare a câmpurilor lipsă dintr-un rând. Utilizați una dintre următoarele valori:
    -   `MissingField.Error`: toate câmpurile lipsă generează o eroare (implicit).
    -   `MissingField.UseNull`: toate câmpurile lipsă sunt incluse ca valori `null`.
      
    Utilizarea `MissingField.Ignore` în acest parametru generează o eroare.


## Examples

### Example #1
Creați un tabel din înregistrări, utilizând nume de câmpuri din înregistrare ca nume de coloane.
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
})
```

Result: 
```powerquery
#table(type table[CustomerID = any, Name = any, Phone = any],
{
    {1, "Bob", "123-4567"},
    {2, "Jim", "987-6543"},
    {3, "Paul", "543-7890"}
})
```


### Example #2
Creați un tabel din înregistrări cu coloane tastate și selectați coloanele numerice.
```powerquery
Table.ColumnsOfType(
    Table.FromRecords(
        {[CustomerID = 1, Name = "Bob"]},
        type table[CustomerID = Number.Type, Name = Text.Type]
    ),
    {type number}
)
```

Result: 
```powerquery
{"CustomerID"}
```


### Example #3
Creați un tabel care conține prenumele, a doua inițială și numele de familie al clienților din înregistrările specificate. Dacă oricare dintre valori lipsește, înlocuiți valoarea cu `null`.
```powerquery
Table.FromRecords({
        [CustomerID = 1, FirstName = "Bob", MiddleInitial = "C", LastName = "Smith"],
        [CustomerID = 2, FirstName = "Sarah", LastName = "Jones"],
        [CustomerID = 3, FirstName = "Harry", MiddleInitial = "H"]
    },
    type table [FirstName = nullable text, MiddleInitial = nullable text, LastName = nullable text],
    MissingField.UseNull)
```

Result: 
```powerquery
#table(type table[FirstName = text, MiddleInitial = text, LastName = text],
{
    {"Bob", "C", "Smith"},
    {"Sarah", null, "Jones"},
    {"Harry", "H", null}
})
```




## Category
Table.Table construction
