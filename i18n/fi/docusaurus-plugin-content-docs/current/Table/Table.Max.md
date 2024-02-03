---
title: Table.Max
---

# Table.Max


## Description

Palauttaa suurimman rivin tai oletusarvon käyttäen annettua ehtoa.


## Syntax

```powerquery
Table.Max(
    table as table,
    comparisonCriteria as any,
    optional default as any
) as any
```


## Details

Palauttaa suurimman rivin kohteessa <code>table</code>, kun <code>comparisonCriteria</code> on annettu. Jos taulukko on tyhjä, palautetaan valinnainen arvo <code>default</code>. 


## Examples

### Example #1 
Etsi rivi, jolla on suurin arvo sarakkeessa [a] taulukossa &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8]})&lt;/code&gt;.
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
Etsi rivi, jolla on suurin arvo sarakkeessa [a] taulukossa &lt;code&gt;(\{})&lt;/code&gt;. Palauta arvo -1, jos se on tyhjä.
```powerquery
Table.Max(#table({"a"}, {}), "a", -1)
```

Result: 
```powerquery
-1
```




## Category
Table.Ordering
