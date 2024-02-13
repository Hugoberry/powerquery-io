---
title: Number.Sign
---

# Number.Sign


Trả về 1 nếu là số dương, -1 nếu là số âm và 0 nếu là số 0.


## Syntax

```powerquery
Number.Sign(
    number as number
) as number
```


## Remarks

Trả về 1 nếu <code>number</code> là số dương, -1 nếu là số âm và 0 nếu là số 0.    Nếu <code>number</code> là giá trị null thì <code>Number.Sign</code> trả về giá trị null.


## Examples

### Example #1 
Xác định dấu (cộng trừ) của 182.
```powerquery
Number.Sign(182)
```

Result: 
```powerquery
1
```


### Example #2 
Xác định dấu (cộng trừ) của -182.
```powerquery
Number.Sign(-182)
```

Result: 
```powerquery
-1
```


### Example #3 
Xác định dấu (cộng trừ) của 0.
```powerquery
Number.Sign(0)
```

Result: 
```powerquery
0
```




## Category
Number.Operations
