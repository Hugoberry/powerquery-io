---
title: Table.Max
---

# Table.Max


Na základě daných kritérií vrátí největší řádek nebo výchozí hodnotu.


## Syntax

```powerquery
Table.Max(
    table as table,
    comparisonCriteria as any,
    optional default as any
) as any
```


## Remarks

Na základě daných kritérií (`comparisonCriteria`) vrátí největší řádek v tabulce `table`. Pokud je tabulka prázdná, vrátí se volitelná hodnota `default`.


## Examples

### Example #1
Najde v tabulce `({[a = 2, b = 4], [a = 6, b = 8]})` řádek s největší hodnotou ve sloupci \[a\].
```powerquery
Table.Max(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 6, b = 8]
    }),
    "a"
)
```

Result: 
```powerquery
[a = 6, b = 8]
```


### Example #2
Najde v tabulce `({})` řádek s největší hodnotou ve sloupci \[a\]. Pokud je prázdný, vrátí se hodnota -1.
```powerquery
Table.Max(#table({"a"}, {}), "a", -1)
```

Result: 
```powerquery
-1
```




## Category
Table.Ordering
