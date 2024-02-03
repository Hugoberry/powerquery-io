---
title: Table.Min
---

# Table.Min


## Description

Palauttaa pienimmän rivin tai oletusarvon käyttäen annettua ehtoa.


## Syntax

```powerquery
Table.Min(
    table as table,
    comparisonCriteria as any,
    optional default as any
) as any
```


## Details

Palauttaa pienimmän rivin kohteessa <code>table</code>, kun <code>comparisonCriteria</code> on annettu. Jos taulukko on tyhjä, palautetaan valinnainen arvo <code>default</code>.


## Examples

### Example #1 
Etsi rivi, jolla on pienin arvo sarakkeessa [a] taulukossa.
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
Etsi rivi, jolla on pienin arvo sarakkeessa [a] taulukossa. Palauta arvo -1, jos se on tyhjä.
```powerquery
Table.Min(#table({"a"}, {}), "a", -1)
```

Result: 
```powerquery
-1
```




## Category
Table.Ordering
