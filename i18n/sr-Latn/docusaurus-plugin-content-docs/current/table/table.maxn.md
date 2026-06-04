---
title: Table.MaxN
---

# Table.MaxN


Vraća najveće redove na osnovu datih kriterijuma.


## Syntax

```powerquery
Table.MaxN(
    table as table,
    comparisonCriteria as any,
    countOrCondition as any
) as table
```


## Remarks

Daje najveće redove u `table`, na osnovu `comparisonCriteria`. Nakon sortiranja redova mora se navesti parametar `countOrCondition` da bi se rezultat dodatno filtrirao. Imajte u vidu da algoritam sortiranja ne može da garantuje fiksni sortirani rezultat. Parametar `countOrCondition` može da ima više oblika:

-   Ako se navede broj, vraća se lista od najviše `countOrCondition` stavki po rastućem redosledu.
-   Ako se navede uslov, vraća se lista stavki koje inicijalno zadovoljavaju uslov. Ako neka stavka ne zadovolji uslov, kasnije stavke se ne uzimaju u obzir.


## Examples

### Example #1
Pronalaženje reda sa najvećom vrednošću u koloni \[a\] uz uslov \[a\] > 0 u tabeli. Redovi se sortiraju pre nego što se primeni filter.
```powerquery
Table.MaxN(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 0, b = 0],
        [a = 6, b = 2]
    }),
    "a",
    each [a] > 0
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = 6, b = 2],
    [a = 2, b = 4]
})
```


### Example #2
Pronalaženje reda sa najvećom vrednošću u koloni \[a\] uz uslov \[b\] > 0 u tabeli. Redovi se sortiraju pre nego što se primeni filter.
```powerquery
Table.MaxN(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 8, b = 0],
        [a = 6, b = 2]
    }),
    "a",
    each [b] > 0
)
```

Result: 
```powerquery
Table.FromRecords({})
```




## Category
Table.Ordering
