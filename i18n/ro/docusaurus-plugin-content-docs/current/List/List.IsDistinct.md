---
title: List.IsDistinct
---

# List.IsDistinct


## Description

Indică dacă există duplicate în listă.


## Syntax

```powerquery
List.IsDistinct(
    list as list,
    optional equationCriteria as any
) as logical
```


## Details

Returnează o valoare logică dacă există duplicate în lista <code>list</code>; <code>true</code> dacă lista este distinctă, <code>false</code> dacă există valori duplicat. 


## Examples

### Example #1 
Aflaţi dacă lista \{1, 2, 3} este distinctă (adică, fără duplicate).
```powerquery
List.IsDistinct({1, 2, 3})
```

Result: 
```powerquery
true
```


### Example #2 
Aflaţi dacă lista \{1, 2, 3, 3} este distinctă (adică, fără duplicate).
```powerquery
List.IsDistinct({1, 2, 3, 3})
```

Result: 
```powerquery
false
```




## Category
List.Selection
