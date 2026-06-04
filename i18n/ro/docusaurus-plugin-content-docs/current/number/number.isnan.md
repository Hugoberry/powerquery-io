---
title: Number.IsNaN
---

# Number.IsNaN


Indică dacă valoarea este NaN (nu este număr).


## Syntax

```powerquery
Number.IsNaN(
    number as number
) as logical
```


## Remarks

Indică dacă valoarea este NaN (nu este număr). Returnează `true` dacă `number` este echivalent cu `Number.NaN`; în caz contrar, returnează `false`.


## Examples

### Example #1
Verificaţi dacă 0 împărţit la 0 este NaN.
```powerquery
Number.IsNaN(0/0)
```

Result: 
```powerquery
true
```


### Example #2
Verificaţi dacă 1 împărţit la 0 este NaN.
```powerquery
Number.IsNaN(1/0)
```

Result: 
```powerquery
false
```




## Category
Number.Information
