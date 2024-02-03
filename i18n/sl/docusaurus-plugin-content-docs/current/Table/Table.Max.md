---
title: Table.Max
---

# Table.Max


## Description

Vrne največjo vrstico ali privzeto vrednost glede na dane kriterije.


## Syntax

```powerquery
Table.Max(
    table as table,
    comparisonCriteria as any,
    optional default as any
) as any
```


## Details

Vrne največjo vrstico v tabeli <code>table</code>, če navedete <code>comparisonCriteria</code>. Če je tabela prazna, je vrnjena izbirna vrednost <code>default</code>. 


## Examples

### Example #1 
Poiščite vrstico z največjo vrednostjo v stolpcu [a] v tabeli &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8]})&lt;/code&gt;.
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
Poiščite vrstico z največjo vrednostjo v stolpcu [a] v tabeli &lt;code&gt;(\{})&lt;/code&gt;. Vrnite –1, če je tabela prazna.
```powerquery
Table.Max(#table({"a"}, {}), "a", -1)
```

Result: 
```powerquery
-1
```




## Category
Table.Ordering
