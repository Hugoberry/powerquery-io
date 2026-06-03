---
title: Number.Power
---

# Number.Power


Bir sayıyı verilen üsse yükseltir.


## Syntax

```powerquery
Number.Power(
    number as number,
    power as number
) as number
```


## Remarks

`number` öğesini `power` üssüne yükseltme işleminin sonucunu döndürür. `number` veya `power` null ise `Number.Power` null döndürür.

-   `number`: Taban.
-   `power`: Üs.


## Examples

### Example #1
5'in 3 üssüne yükseltilmiş değerini bulur (5'in küpü).
```powerquery
Number.Power(5, 3)
```

Result: 
```powerquery
125
```




## Category
Number.Operations
