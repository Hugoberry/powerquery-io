---
title: Number.Sign
---

# Number.Sign


Повертає 1 – якщо число додатне, -1 – якщо число від'ємне, і 0 – якщо число нуль.


## Syntax

```powerquery
Number.Sign(
    number as number
) as number
```


## Remarks

Повертає 1, якщо `number` – додатне число, -1 – якщо від’ємне число, і 0 – якщо нуль. Якщо `number` має Null-значення, `Number.Sign` повертає Null-значення.


## Examples

### Example #1
Визначити знак 182.
```powerquery
Number.Sign(182)
```

Result: 
```powerquery
1
```


### Example #2
Визначити знак -182.
```powerquery
Number.Sign(-182)
```

Result: 
```powerquery
-1
```


### Example #3
Визначити знак 0.
```powerquery
Number.Sign(0)
```

Result: 
```powerquery
0
```




## Category
Number.Operations
