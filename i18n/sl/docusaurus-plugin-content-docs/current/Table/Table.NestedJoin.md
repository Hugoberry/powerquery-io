---
title: Table.NestedJoin
---

# Table.NestedJoin


## Description

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


## Details

Združi vrstice tabele <code>table1</code> z vrsticami tabele <code>table2</code> glede na enakost vrednosti stolpcev ključa, ki jih izbereta <code>key1</code> (za <code>table1</code>) in <code>key2</code> (za <code>table2</code>). Rezultati so vneseni v stolpec z imenom <code>newColumnName</code>.<br />Izbirni parameter <code>joinKind</code> določa, kakšna vrsta združevanja bo izvedena. Če parameter <code>joinKind</code> ni naveden, je privzeto izvedeno levo zunanje združevanje.<br />Vključite lahko izbirni nabor parametrov <code>keyEqualityComparers</code>, s katerim določite način primerjave stolpcev ključa. Ta funkcija je trenutno namenjena samo interni uporabi<br />  


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
