---
title: Table.Min
---

# Table.Min


## Description

Na základě daných kritérií vrátí nejmenší řádek nebo výchozí hodnotu.


## Syntax

```powerquery
Table.Min(
    table as table,
    comparisonCriteria as any,
    optional default as any
) as any
```


## Details

Na základě daných kritérií (<code>comparisonCriteria</code>) vrátí nejmenší řádek v tabulce <code>table</code>. Pokud je tabulka prázdná, vrátí se volitelná hodnota <code>default</code>.


## Examples

### Example #1 
Najde v tabulce řádek s nejmenší hodnotou ve sloupci [a].
```powerquery
Table.Min(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 6, b = 8]
    }),
    "a"
)
```

Result: 
```powerquery
[a = 2, b = 4]
```


### Example #2 
Najde v tabulce řádek s nejmenší hodnotou ve sloupci [a]. Pokud je prázdný, vrátí se hodnota -1.
```powerquery
Table.Min(#table({"a"}, {}), "a", -1)
```

Result: 
```powerquery
-1
```




## Category
Table.Ordering
