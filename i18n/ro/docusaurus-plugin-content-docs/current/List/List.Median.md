---
title: List.Median
---

# List.Median


## Description

Returnează valoarea mediană din listă.


## Syntax

```powerquery
List.Median(
    list as list,
    optional comparisonCriteria as any
) as any
```


## Details

Returnează elementul median din lista <code>list</code>. Această funcție returnează <code>null</code> dacă lista nu conține valori non-<code>null</code>.    Dacă există un număr par de elemente, funcția alege pe cel mai mic dintre cele două elemente mediane, cu excepția cazului în care lista este    compusă în întregime din elemente datetime, durate, numere sau ore, caz în care returnează media celor două elemente.


## Examples

### Example #1 
Aflaţi elementul median din lista &lt;code&gt;\{5, 3, 1, 7, 9}&lt;/code&gt;.
```powerquery
List.Median({5, 3, 1, 7, 9})
```

Result: 
```powerquery
5
```




## Category
List.Ordering
