---
title: Table.Min
---

# Table.Min


## Description

Tiek atgriezta mazākā rinda vai noklusējuma vērtība, izmantojot norādītos kritērijus.


## Syntax

```powerquery
Table.Min(
    table as table,
    comparisonCriteria as any,
    optional default as any
) as any
```


## Details

Tiek atgriezta <code>table</code> mazākā rinda, izmantojot <code>comparisonCriteria</code>. Ja tabula ir tukša, tiek atgriezta neobligātā <code>default</code> vērtība.


## Examples

### Example #1 
Atrodiet tabulā rindu ar mazāko vērtību kolonnā [a].
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
Atrodiet tabulā rindu ar mazāko vērtību kolonnā [a]. Ja tā ir tukša, tiek atgriezta vērtība -1.
```powerquery
Table.Min(#table({"a"}, {}), "a", -1)
```

Result: 
```powerquery
-1
```




## Category
Table.Ordering
