---
title: Table.MaxN
---

# Table.MaxN


Na základě daných kritérií vrátí největší řádky.


## Syntax

```powerquery
Table.MaxN(
    table as table,
    comparisonCriteria as any,
    countOrCondition as any
) as table
```


## Remarks

Na základě daných kritérií (`comparisonCriteria`) vrátí největší řádky v tabulce `table`. Po seřazení řádků se musí zadat parametr `countOrCondition` pro další filtrování výsledku. Algoritmus řazení nedokáže zaručit pevně seřazený výsledek. Parametr `countOrCondition` může mít několik tvarů:

-   Pokud je zadané číslo, vrátí se seznam až `countOrCondition` položek ve vzestupném pořadí.
-   Pokud je zadaná podmínka, vrátí se seznam položek, které splňují tuto podmínku. Jakmile nějaká položka podmínku nesplňuje, další položky se už neuvažují.


## Examples

### Example #1
Najde v tabulce řádek s největší hodnotou ve sloupci \[a\] splňující podmínku \[a\] > 0. Před použitím filtru jsou řádky seřazeny.
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
Najde v tabulce řádek s největší hodnotou ve sloupci \[a\] splňující podmínku \[b\] > 0. Před použitím filtru jsou řádky seřazeny.
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
