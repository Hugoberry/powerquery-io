---
title: Table.AlternateRows
---

# Table.AlternateRows


Păstrează decalajul iniţial, apoi alternează preluarea şi ignorarea următoarelor rânduri.


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

Păstrează decalajul iniţial, apoi alternează preluarea şi ignorarea următoarelor rânduri.

-   `table`: Tabelul de intrare.
-   `offset`: Numărul de rânduri de păstrat înainte de începerea iteraţiilor.
-   `skip`: Numărul de rânduri de eliminat din fiecare iteraţie.
-   `take`: Numărul de rânduri de păstrat în fiecare iteraţie.


## Examples

### Example #1
Returnați un tabel din tabelul care, începând de la primul rând, ignoră 1 valoare, apoi păstrează 1 valoare.
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
