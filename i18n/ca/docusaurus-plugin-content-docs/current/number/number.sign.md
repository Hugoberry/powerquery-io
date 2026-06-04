---
title: Number.Sign
---

# Number.Sign


Retorna 1 si el nombre és positiu, -1 si és negatiu i 0 si és zero.


## Syntax

```powerquery
Number.Sign(
    number as number
) as number
```


## Remarks

Retorna 1 si `number` és un nombre positiu, -1 si és un nombre negatiu i 0 si és zero. Si `number` és "null", `Number.Sign` retorna "null".


## Examples

### Example #1
Determina el signe de 182.
```powerquery
Number.Sign(182)
```

Result: 
```powerquery
1
```


### Example #2
Determina el signe de -182.
```powerquery
Number.Sign(-182)
```

Result: 
```powerquery
-1
```


### Example #3
Determina el signe de 0.
```powerquery
Number.Sign(0)
```

Result: 
```powerquery
0
```




## Category
Number.Operations
