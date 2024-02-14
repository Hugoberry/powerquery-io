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

Değerin NaN (Sayı değil) olup olmadığını gösterir. <code>number</code> <code>Number.IsNaN</code> ile eşdeğer ise <code>true</code>, aksi halde <code>false</code> döndürür.


## Examples

### Example #1 
0&#39;ın 0&#39;a bölümünün NaN olup olmadığını denetler.
```powerquery
Number.IsNaN(0/0)
```

Result: 
```powerquery
true
```


### Example #2 
1&#39;ın 0&#39;a bölümünün NaN olup olmadığını denetler.
```powerquery
Number.IsNaN(1/0)
```

Result: 
```powerquery
false
```




## Category
Number.Information
