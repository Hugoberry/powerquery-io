---
title: Table.NestedJoin
---

# Table.NestedJoin


Efectuează o uniune între tabele pe coloanele furnizate şi produce rezultatul uniunii într-o coloană nouă.


## Syntax

```powerquery
Table.NestedJoin(
    table1 as table,
    key1 as any,
    table2 as any,
    key2 as any,
    newColumnName as text,
    optional joinKind as JoinKind.Type,
    optional keyEqualityComparers as list
) as table
```


## Remarks

Unește rândurile din `table1` cu rândurile din `table2` pe baza egalității valorilor din coloanele cheie selectate de `key1` (pentru `table1`) și `key2` (pentru `table2`). Rezultatele sunt introduse în coloana cu numele `newColumnName`.

Opțional, `joinKind` specifică tipul de unire care se va efectua. În mod implicit, se efectuează o unire externă la stânga, dacă nu se specifică `joinKind`.

Se poate include un set opțional de `keyEqualityComparers` pentru a specifica modul de comparare a coloanelor cheie. Caracteristica este destinată momentan numai pentru utilizare internă.


## Examples

### Example #1
Asociați două tabele utilizând o singură coloană cheie.
```powerquery
Table.NestedJoin(
    Table.FromRecords({
        [CustomerToCall = 1],
        [CustomerToCall = 3]
    }),
    {"CustomerToCall"},
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    {"CustomerID"},
    "CustomerDetails"
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerToCall = 1, CustomerDetails = Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})],
    [CustomerToCall = 3, CustomerDetails = Table.FromRecords({[CustomerID = 3, Name = "Paul", Phone = "543-7890"]})]
})
```




## Category
Table.Transformation
