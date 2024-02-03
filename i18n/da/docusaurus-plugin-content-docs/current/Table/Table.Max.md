---
title: Table.Max
---

# Table.Max


## Description

Returnerer den største række eller standardværdien ved hjælp af de angivne kriterier.


## Syntax

```powerquery
Table.Max(
    table as table,
    comparisonCriteria as any,
    optional default as any
) as any
```


## Details

Returnerer den største række i <code>table</code> med den angivne <code>comparisonCriteria</code>. Hvis tabellen er tom, returneres den valgfrie værdi <code>default</code>. 


## Examples

### Example #1 
Find rækken med den største værdi i kolonnen [a] i tabellen &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8]})&lt;/code&gt;.
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
Find rækken med den største værdi i kolonnen [a] i tabellen &lt;code&gt;(\{})&lt;/code&gt;. Returner -1, hvis tabellen er tom.
```powerquery
Table.Max(#table({"a"}, {}), "a", -1)
```

Result: 
```powerquery
-1
```




## Category
Table.Ordering
