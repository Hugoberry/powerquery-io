---
title: Table.Min
---

# Table.Min


## Description

Vráti najmenšiu hodnotu riadka alebo predvolenú hodnotu pomocou daných kritérií.


## Syntax

```powerquery
Table.Min(
    table as table,
    comparisonCriteria as any,
    optional default as any
) as any
```


## Details

Vráti najmenšiu hodnotu riadka v tabuľke <code>table</code> s daným kritériom <code>comparisonCriteria</code>. Ak je tabuľka prázdna, vráti sa voliteľná hodnota <code>default</code>.


## Examples

### Example #1 
Nájdite v tabuľke riadok s najmenšou hodnotou v stĺpci [a].
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
Nájdite v tabuľke riadok s najmenšou hodnotou v stĺpci [a]. Ak je tabuľka prázdna, vráti sa hodnota –1.
```powerquery
Table.Min(#table({"a"}, {}), "a", -1)
```

Result: 
```powerquery
-1
```




## Category
Table.Ordering
