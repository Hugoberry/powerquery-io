---
title: Value.As
---

# Value.As


Returnerer værdien, hvis den er kompatibel med den angivne type.


## Syntax

```powerquery
Value.As(
    value as any,
    type as type
) as any
```


## Remarks

Returnerer værdien, hvis den er kompatibel med den angivne type. Dette svarer til operatoren "as" i M med undtagelse af, at det kan acceptere referencer for identifikator-type, f. eks. Number.Type.


## Examples

### Example #1 
Konvertér et tal til et tal.
```powerquery
Value.As(123, Number.Type)
```

Result: 
```powerquery
123
```


### Example #2 
Forsøg på at konvertere en tekstværdi til et tal.
```powerquery
Value.As("abc", type number)
```

Result: 
```powerquery
[Expression.Error] We cannot convert the value "abc" to type Number.
```




## Category
Values.Types
