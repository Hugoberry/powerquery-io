---
title: Table.MaxN
---

# Table.MaxN


## Description

Na základě daných kritérií vrátí největší řádky.


## Syntax

```powerquery
Table.MaxN(
    table as table,
    comparisonCriteria as any,
    countOrCondition as any
) as table
```


## Details

Na základě daných kritérií (<code>comparisonCriteria</code>) vrátí největší řádky v tabulce <code>table</code>.    Po seřazení řádků se musí zadat parametr <code>countOrCondition</code> pro další filtrování výsledku. Algoritmus řazení nedokáže zaručit pevně seřazený výsledek. Parametr <code>countOrCondition</code> může mít několik tvarů:    <ul>        <li> Pokud je zadané číslo, vrátí se seznam až <code>countOrCondition</code> položek ve vzestupném pořadí. </li>        <li> Pokud je zadaná podmínka, vrátí se seznam položek, které splňují tuto podmínku. Jakmile nějaká položka podmínku nesplňuje, další položky se už neuvažují. </li>  </ul>


## Examples

### Example #1 
Najde v tabulce řádek s největší hodnotou ve sloupci [a] splňující podmínku [a] &gt; 0. Před použitím filtru jsou řádky seřazeny.
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
Najde v tabulce řádek s největší hodnotou ve sloupci [a] splňující podmínku [b] &gt; 0. Před použitím filtru jsou řádky seřazeny.
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
