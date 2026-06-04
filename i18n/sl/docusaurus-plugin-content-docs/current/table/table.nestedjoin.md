---
title: Table.NestedJoin
---

# Table.NestedJoin


Združi tabele v podanih stolpcih in vrne rezultat združevanja v novem stolpcu.


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

Združi vrstice tabele `table1` z vrsticami tabele `table2` glede na enakost vrednosti stolpcev ključa, ki jih izbereta `key1` (za `table1`) in `key2` (za `table2`). Rezultati so vneseni v stolpec z imenom `newColumnName`.

Izbirni parameter `joinKind` določa, kakšna vrsta združevanja bo izvedena. Če parameter `joinKind` ni naveden, je privzeto izvedeno levo zunanje združevanje.

Vključite lahko izbirni nabor parametrov `keyEqualityComparers`, s katerim določite način primerjave stolpcev ključa. Ta funkcija je trenutno namenjena samo interni uporabi


## Examples

### Example #1
Združite dve tabeli z enim stolpcem ključa.
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
