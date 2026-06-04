---
title: Table.Group
---

# Table.Group


Grupează rândurile din tabel care au aceeaşi cheie.


## Syntax

```powerquery
Table.Group(
    table as table,
    key as any,
    aggregatedColumns as list,
    optional groupKind as GroupKind.Type,
    optional comparer as function
) as table
```


## Remarks

Grupează rândurile de `table` după coloanele cheie definite de `key`. `key` poate fi un nume de coloană unic sau o listă de nume de coloane. Pentru fiecare grup, este construită o înregistrare care conține coloanele cheie (și valorile lor), împreună cu toate coloanele agregate specificate de `aggregatedColumns`. Opțional, `groupKind` și `comparer` pot fi, de asemenea, specificate.  
  
Dacă datele sunt sortate deja de coloanele cheie, se poate furniza un `groupKind` de tipul GroupKind.Local. Acest lucru poate îmbunătăți performanța grupării în anumite cazuri, deoarece toate rândurile cu un set dat de valori cheie sunt considerate contigue.  
  
La trecerea unui `comparer`, rețineți că, dacă tratează chei diferite ca egale, un rând poate fi plasat într-un grup ale cărui chei diferă de ale sale.  
  
Această funcție nu garantează ordinea rândurilor returnate.


## Examples

### Example #1
Grupați tabelul adăugând o coloană de agregat \[total\], care conține suma prețurilor ("each List.Sum(\[price\])").
```powerquery
Table.Group(
    Table.FromRecords({
        [CustomerID = 1, price = 20],
        [CustomerID = 2, price = 10],
        [CustomerID = 2, price = 20],
        [CustomerID = 1, price = 10],
        [CustomerID = 3, price = 20],
        [CustomerID = 3, price = 5]
    }),
    "CustomerID",
    {"total", each List.Sum([price])}
)
```

Result: 
```powerquery
Table.FromRecords(
    {
        [CustomerID = 1, total = 30],
        [CustomerID = 2, total = 30],
        [CustomerID = 3, total = 25]
    },
    {"CustomerID", "total"}
)
```




## Category
Table.Transformation
