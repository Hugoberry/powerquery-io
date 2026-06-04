---
title: Table.Max
---

# Table.Max


Palauttaa suurimman rivin tai oletusarvon käyttäen annettua ehtoa.


## Syntax

```powerquery
Table.Max(
    table as table,
    comparisonCriteria as any,
    optional default as any
) as any
```


## Remarks

Palauttaa suurimman rivin kohteessa `table`, kun `comparisonCriteria` on annettu. Jos taulukko on tyhjä, palautetaan valinnainen arvo `default`.


## Examples

### Example #1
Etsi rivi, jolla on suurin arvo sarakkeessa \[a\] taulukossa `({[a = 2, b = 4], [a = 6, b = 8]})`.
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
Etsi rivi, jolla on suurin arvo sarakkeessa \[a\] taulukossa `({})`. Palauta arvo -1, jos se on tyhjä.
```powerquery
Table.Max(#table({"a"}, {}), "a", -1)
```

Result: 
```powerquery
-1
```




## Category
Table.Ordering
