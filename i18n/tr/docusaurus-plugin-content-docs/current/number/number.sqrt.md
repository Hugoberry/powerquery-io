---
title: Number.Sqrt
---

# Number.Sqrt


Sayının kare kökünü döndürür.


## Syntax

```powerquery
Number.Sqrt(
    number as number
) as number
```


## Remarks

`number` sayısının kare kökünü döndürür. `number` null ise `Number.Sqrt` null döndürür. Negatif bir değer ise `Number.NaN` döndürülür (Sayı değil).


## Examples

### Example #1
625'in kare kökünü bulur.
```powerquery
Number.Sqrt(625)
```

Result: 
```powerquery
25
```


### Example #2
85'in kare kökünü bulur.
```powerquery
Number.Sqrt(85)
```

Result: 
```powerquery
9.2195444572928871
```




## Category
Number.Operations
