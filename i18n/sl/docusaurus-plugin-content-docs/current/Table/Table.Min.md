---
title: Table.Min
---

# Table.Min


## Description

Vrne najmanjšo vrstico ali privzeto vrednost glede na dane kriterije.


## Syntax

```powerquery
Table.Min(
    table as table,
    comparisonCriteria as any,
    optional default as any
) as any
```


## Details

Vrne najmanjšo vrstico v tabeli <code>table</code>, če navedete <code>comparisonCriteria</code>. Če je tabela prazna, je vrnjena izbirna vrednost <code>default</code>.


## Examples

### Example #1 
Poiščite vrstico z najmanjšo vrednostjo v stolpcu [a] v tabeli.
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
Poiščite vrstico z najmanjšo vrednostjo v stolpcu [a] v tabeli. Vrnite –1, če je tabela prazna.
```powerquery
Table.Min(#table({"a"}, {}), "a", -1)
```

Result: 
```powerquery
-1
```




## Category
Table.Ordering
