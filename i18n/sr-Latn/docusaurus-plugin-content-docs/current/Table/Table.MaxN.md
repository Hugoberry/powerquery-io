---
title: Table.MaxN
---

# Table.MaxN


## Description

Vraća najveće redove na osnovu datih kriterijuma.


## Syntax

```powerquery
Table.MaxN(
    table as table,
    comparisonCriteria as any,
    countOrCondition as any
) as table
```


## Details

Daje najveće redove u <code>table</code>, na osnovu <code>comparisonCriteria</code>.    Nakon sortiranja redova mora se navesti parametar <code>countOrCondition</code> da bi se rezultat dodatno filtrirao. Imajte u vidu da algoritam sortiranja ne može da garantuje fiksni sortirani rezultat. Parametar <code>countOrCondition</code> može da ima više oblika:    <ul>        <li> Ako se navede broj, vraća se lista od najviše <code>countOrCondition</code> stavki po rastućem redosledu. </li>        <li> Ako se navede uslov, vraća se lista stavki koje inicijalno zadovoljavaju uslov. Ako neka stavka ne zadovolji uslov, kasnije stavke se ne uzimaju u obzir. </li> </ul>


## Examples

### Example #1 
Pronalaženje reda sa najvećom vrednošću u koloni [a] uz uslov [a] &gt; 0 u tabeli. Redovi se sortiraju pre nego što se primeni filter.
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
Pronalaženje reda sa najvećom vrednošću u koloni [a] uz uslov [b] &gt; 0 u tabeli. Redovi se sortiraju pre nego što se primeni filter.
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
