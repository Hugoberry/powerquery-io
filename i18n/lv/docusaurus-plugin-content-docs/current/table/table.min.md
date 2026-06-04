---
title: Table.Min
---

# Table.Min


Tiek atgriezta mazākā rinda vai noklusējuma vērtība, izmantojot norādītos kritērijus.


## Syntax

```powerquery
Table.Min(
    table as table,
    comparisonCriteria as any,
    optional default as any
) as any
```


## Remarks

Tiek atgriezta `table` mazākā rinda, izmantojot `comparisonCriteria`. Ja tabula ir tukša, tiek atgriezta neobligātā `default` vērtība.


## Examples

### Example #1
Atrodiet tabulā rindu ar mazāko vērtību kolonnā \[a\].
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
Atrodiet tabulā rindu ar mazāko vērtību kolonnā \[a\]. Ja tā ir tukša, tiek atgriezta vērtība -1.
```powerquery
Table.Min(#table({"a"}, {}), "a", -1)
```

Result: 
```powerquery
-1
```




## Category
Table.Ordering
