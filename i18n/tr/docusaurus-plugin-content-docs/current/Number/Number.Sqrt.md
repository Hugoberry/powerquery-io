---
title: Number.Sqrt
---

# Number.Sqrt


## Description

Sayının kare kökünü döndürür.


## Syntax

```powerquery
Number.Sqrt(
    number as number
) as number
```


## Details

<code>number</code> sayısının kare kökünü döndürür.    <code>number</code> null ise <code>Number.Sqrt</code> null döndürür. Negatif bir değer ise <code>Number.NaN</code> döndürülür (Sayı değil).


## Examples

### Example #1 
625&#39;in kare kökünü bulur.
```powerquery
Number.Sqrt(625)
```

Result: 
```powerquery
25
```


### Example #2 
85&#39;in kare kökünü bulur.
```powerquery
Number.Sqrt(85)
```

Result: 
```powerquery
9.2195444572928871
```




## Category
Number.Operations
