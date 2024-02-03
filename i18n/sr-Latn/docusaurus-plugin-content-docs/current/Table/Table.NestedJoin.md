---
title: Table.NestedJoin
---

# Table.NestedJoin


## Description

Obavlja spajanje tabela na navedenim kolonama i daje rezultat spajanja u novoj koloni.


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

Povezuje redove iz <code>table1</code> sa redovima iz <code>table2</code> na osnovu jednakosti vrednosti kolona ključa koje bira <code>key1</code> (za <code>table1</code>) i <code>key2</code> (za <code>table2</code>). Rezultati se unose u kolonu pod imenom <code>newColumnName</code>.<br />Opcionalni <code>joinKind</code> navodi vrstu spajanja koje se obavlja. Podrazumevano se obavlja levo spoljno spajanje ako nije naveden <code>joinKind</code>.<br />Možda će biti uključen opcionalni skup <code>keyEqualityComparers</code> da bi se navelo kako porediti kolone ključa. Ova funkcija je trenutno predviđena samo za internu upotrebu.<br />  


## Examples

### Example #1 
Spojite dve tabele pomoću jedne kolone ključa.
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
