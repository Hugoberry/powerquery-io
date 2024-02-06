---
title: Value.As
---

# Value.As


Zwraca wartość, jeśli jest ona zgodna z określonym typem.


## Syntax

```powerquery
Value.As(
    value as any,
    type as type
) as any
```


## Remarks

Zwraca wartość, jeśli jest ona zgodna z określonym typem. Jest to odpowiednik operatora „is” w M, z wyjątkiem tego, że może akceptować odwołania do typu identyfikatora, takie jak Number.Type.


## Examples

### Example #1 
Rzutowanie liczby na liczbę.
```powerquery
Value.As(123, Number.Type)
```

Result: 
```powerquery
123
```


### Example #2 
Próba rzutowania wartości tekstowej na liczbę.
```powerquery
Value.As("abc", type number)
```

Result: 
```powerquery
[Expression.Error] We cannot convert the value "abc" to type Number.
```




## Category
Values.Types
