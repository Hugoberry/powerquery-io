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

Trả về căn bậc hai của <code>number</code>.    Nếu <code>number</code> là giá trị null thì <code>Number.Sqrt</code> trả về giá trị null. Nếu là giá trị âm thì <code>Number.NaN</code> được trả về (không phải số).


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
