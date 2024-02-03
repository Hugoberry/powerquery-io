---
title: Table.Min
---

# Table.Min


## Description

Vraća najmanji red ili podrazumevanu vrednost na osnovu datih kriterijuma.


## Syntax

```powerquery
Table.Min(
    table as table,
    comparisonCriteria as any,
    optional default as any
) as any
```


## Details

Vraća najmanji red u <code>table</code>, na osnovu <code>comparisonCriteria</code>. Ako je tabela prazna, vraća se opcionalna vrednost <code>default</code>.


## Examples

### Example #1 
Pronalaženje reda sa najmanjom vrednošću u koloni [a] u tabeli.
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
Pronalaženje reda sa najmanjom vrednošću u koloni [a] u tabeli. Ako je tabela prazna, vraća se -1.
```powerquery
Table.Min(#table({"a"}, {}), "a", -1)
```

Result: 
```powerquery
-1
```




## Category
Table.Ordering
