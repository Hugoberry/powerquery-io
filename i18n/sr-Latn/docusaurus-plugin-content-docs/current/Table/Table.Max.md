---
title: Table.Max
---

# Table.Max


## Description

Vraća najveći red ili podrazumevanu vrednost na osnovu datih kriterijuma.


## Syntax

```powerquery
Table.Max(
    table as table,
    comparisonCriteria as any,
    optional default as any
) as any
```


## Details

Vraća najveći red u <code>table</code>, na osnovu <code>comparisonCriteria</code>. Ako je tabela prazna, vraća se opcionalna vrednost <code>default</code>. 


## Examples

### Example #1 
Pronalaženje reda sa najvećom vrednošću u koloni [a] u tabeli &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8]})&lt;/code&gt;.
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
Pronalaženje reda sa najvećom vrednošću u koloni [a] u tabeli &lt;code&gt;(\{})&lt;/code&gt;. Ako je tabela prazna, vraća se -1.
```powerquery
Table.Max(#table({"a"}, {}), "a", -1)
```

Result: 
```powerquery
-1
```




## Category
Table.Ordering
