---
title: Number.IsNaN
---

# Number.IsNaN


Değerin NaN (Sayı değil) olup olmadığını gösterir.


## Syntax

```powerquery
Number.IsNaN(
    number as number
) as logical
```


## Remarks

Değerin NaN (Sayı değil) olup olmadığını gösterir. `number` `Number.NaN` ile eşdeğer ise `true`, aksi halde `false` döndürür.


## Examples

### Example #1
0'ın 0'a bölümünün NaN olup olmadığını denetler.
```powerquery
Number.IsNaN(0/0)
```

Result: 
```powerquery
true
```


### Example #2
1'ın 0'a bölümünün NaN olup olmadığını denetler.
```powerquery
Number.IsNaN(1/0)
```

Result: 
```powerquery
false
```




## Category
Number.Information
