---
title: Table.Max
---

# Table.Max


Tiek atgriezta lielākā rinda vai noklusējuma vērtība, izmantojot norādītos kritērijus.


## Syntax

```powerquery
Table.Max(
    table as table,
    comparisonCriteria as any,
    optional default as any
) as any
```


## Remarks

Tiek atgriezta `table` lielākā rinda, izmantojot `comparisonCriteria`. Ja tabula ir tukša, tiek atgriezta neobligātā `default` vērtība.


## Examples

### Example #1
Atrodiet rindu ar lielāko vērtību kolonnā \[a\] tabulā `({[a = 2, b = 4], [a = 6, b = 8]})`.
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
Atrodiet rindu ar lielāko vērtību kolonnā \[a\] tabulā `({})`. Ja tā ir tukša, tiek atgriezta vērtība -1.
```powerquery
Table.Max(#table({"a"}, {}), "a", -1)
```

Result: 
```powerquery
-1
```




## Category
Table.Ordering
