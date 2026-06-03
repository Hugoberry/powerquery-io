---
title: Number.Sqrt
---

# Number.Sqrt


Trả về căn bậc hai của số.


## Syntax

```powerquery
Number.Sqrt(
    number as number
) as number
```


## Remarks

Trả về căn bậc hai của `number`. Nếu `number` là giá trị null thì `Number.Sqrt` trả về giá trị null. Nếu là giá trị âm thì `Number.NaN` được trả về (không phải số).


## Examples

### Example #1
Trả về căn bậc hai của 625.
```powerquery
Number.Sqrt(625)
```

Result: 
```powerquery
25
```


### Example #2
Trả về căn bậc hai của 85.
```powerquery
Number.Sqrt(85)
```

Result: 
```powerquery
9.2195444572928871
```




## Category
Number.Operations
