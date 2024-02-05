---
title: List.Median
---

# List.Median


## Description

Returnerar medianvärdet i listan.


## Syntax

```powerquery
List.Median(
    list as list,
    optional comparisonCriteria as any
) as any
```


## Details

Returnerar medianobjektet i listan <code>list</code>. Den här funktionen returnerar <code>null</code> om listan inte innehåller några värden som inte är <code>null</code>.    Om det finns ett jämnt antal objekt, väljer funktionen det mindre av de två medianobjekten, såvida listan inte helt    består av enbart datumtider, varaktigheter, siffror eller tider, i så fall returnerar den medelvärdet för de två objekten.


## Examples

### Example #1 
Hitta medianvärdet i listan &lt;code&gt;\{5, 3, 1, 7, 9}&lt;/code&gt;.
```powerquery
List.Median({5, 3, 1, 7, 9})
```

Result: 
```powerquery
5
```




## Category
List.Ordering
