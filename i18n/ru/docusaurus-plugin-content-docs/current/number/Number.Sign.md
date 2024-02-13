---
title: Number.Sign
---

# Number.Sign


Возвращает значение 1, если число положительное, значение -1, если оно отрицательное, и 0, если оно равно нулю.


## Syntax

```powerquery
Number.Sign(
    number as number
) as number
```


## Remarks

Возвращает 1, если <code>number</code> является положительным числом; значение –1, если отрицательным; и 0, если оно равно нулю.    Если <code>number</code> имеет значение NULL, <code>Number.Sign</code> возвращает NULL.


## Examples

### Example #1 
Определить знак числа 182.
```powerquery
Number.Sign(182)
```

Result: 
```powerquery
1
```


### Example #2 
Определить знак числа -182.
```powerquery
Number.Sign(-182)
```

Result: 
```powerquery
-1
```


### Example #3 
Определить знак числа 0.
```powerquery
Number.Sign(0)
```

Result: 
```powerquery
0
```




## Category
Number.Operations
