---
title: Table.Min
---

# Table.Min


Returnerer den mindste række eller en standardværdi ved hjælp af de angivne kriterier.


## Syntax

```powerquery
Table.Min(
    table as table,
    comparisonCriteria as any,
    optional default as any
) as any
```


## Remarks

Returnerer den mindste række i `table` med den angivne `comparisonCriteria`. Hvis tabellen er tom, returneres den valgfrie værdi `default`.


## Examples

### Example #1
Find rækken med den mindste værdi i kolonnen \[a\] i tabellen.
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
Find rækken med den mindste værdi i kolonnen \[a\] i tabellen. Returner -1, hvis tabellen er tom.
```powerquery
Table.Min(#table({"a"}, {}), "a", -1)
```

Result: 
```powerquery
-1
```




## Category
Table.Ordering
