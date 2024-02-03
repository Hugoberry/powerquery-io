---
title: Table.Max
---

# Table.Max


## Description

Na základě daných kritérií vrátí největší řádek nebo výchozí hodnotu.


## Syntax

```powerquery
Table.Max(
    table as table,
    comparisonCriteria as any,
    optional default as any
) as any
```


## Details

Na základě daných kritérií (<code>comparisonCriteria</code>) vrátí největší řádek v tabulce <code>table</code>. Pokud je tabulka prázdná, vrátí se volitelná hodnota <code>default</code>. 


## Examples

### Example #1 
Najde v tabulce &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8]})&lt;/code&gt; řádek s největší hodnotou ve sloupci [a].
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
Najde v tabulce &lt;code&gt;(\{})&lt;/code&gt; řádek s největší hodnotou ve sloupci [a]. Pokud je prázdný, vrátí se hodnota -1.
```powerquery
Table.Max(#table({"a"}, {}), "a", -1)
```

Result: 
```powerquery
-1
```




## Category
Table.Ordering
