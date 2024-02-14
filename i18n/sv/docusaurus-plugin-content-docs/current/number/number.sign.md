---
title: Number.Sign
---

# Number.Sign


Returnerar 1 om talet är positivt, -1 om det är negativt och 0 om det är noll.


## Syntax

```powerquery
Number.Sign(
    number as number
) as number
```


## Remarks

Returnerar 1 om <code>number</code> är ett positivt tal, -1 om det är ett negativt tal och 0 om det är noll.    Om <code>number</code> är null returnerar <code>Number.Sign</code> null.


## Examples

### Example #1 
Avgör tecknet för 182.
```powerquery
Number.Sign(182)
```

Result: 
```powerquery
1
```


### Example #2 
Avgör tecknet för -182.
```powerquery
Number.Sign(-182)
```

Result: 
```powerquery
-1
```


### Example #3 
Avgör tecknet för 0.
```powerquery
Number.Sign(0)
```

Result: 
```powerquery
0
```




## Category
Number.Operations
