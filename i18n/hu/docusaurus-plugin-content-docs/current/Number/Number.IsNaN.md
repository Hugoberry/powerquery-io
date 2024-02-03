---
title: Number.IsNaN
---

# Number.IsNaN


## Description

Azt jelzi, hogy az érték számtól eltérő érték-e (NaN).


## Syntax

```powerquery
Number.IsNaN(
    number as number
) as logical
```


## Details

Azt jelzi, hogy az érték számtól eltérő érték-e (NaN). Ha a(z) <code>number</code> egyenlő az <code>Number.IsNaN</code> értékkel, <code>true</code> értéket ad vissza, egyéb esetben pedig <code>false</code> értéket ad vissza.


## Examples

### Example #1 
Annak ellenőrzése, hogy a 0 osztása 0-val NaN értéket eredményez-e
```powerquery
Number.IsNaN(0/0)
```

Result: 
```powerquery
true
```


### Example #2 
Annak ellenőrzése, hogy az 1 osztása 0-val NaN értéket eredményez-e
```powerquery
Number.IsNaN(1/0)
```

Result: 
```powerquery
false
```




## Category
Number.Information
