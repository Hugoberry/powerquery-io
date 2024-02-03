---
title: Table.Max
---

# Table.Max


## Description

Tiek atgriezta lielākā rinda vai noklusējuma vērtība, izmantojot norādītos kritērijus.


## Syntax

```powerquery
Table.Max(
    table as table,
    comparisonCriteria as any,
    optional default as any
) as any
```


## Details

Tiek atgriezta <code>table</code> lielākā rinda, izmantojot <code>comparisonCriteria</code>. Ja tabula ir tukša, tiek atgriezta neobligātā <code>default</code> vērtība. 


## Examples

### Example #1 
Atrodiet rindu ar lielāko vērtību kolonnā [a] tabulā &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8]})&lt;/code&gt;.
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
Atrodiet rindu ar lielāko vērtību kolonnā [a] tabulā &lt;code&gt;(\{})&lt;/code&gt;. Ja tā ir tukša, tiek atgriezta vērtība -1.
```powerquery
Table.Max(#table({"a"}, {}), "a", -1)
```

Result: 
```powerquery
-1
```




## Category
Table.Ordering
