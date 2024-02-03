---
title: Table.AlternateRows
---

# Table.AlternateRows


## Description

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


## Details

Păstrează decalajul iniţial, apoi alternează preluarea şi ignorarea următoarelor rânduri.    <ul>       <li><code>table</code>: Tabelul de intrare.</li>       <li><code>offset</code>: Numărul de rânduri de păstrat înainte de începerea iteraţiilor.</li>       <li><code>skip</code>: Numărul de rânduri de eliminat din fiecare iteraţie.</li>       <li><code>take</code>: Numărul de rânduri de păstrat în fiecare iteraţie.</li>    </ul>    


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
