---
title: Value.As
---

# Value.As


Returnerar värdet om det är kompatibelt med den angivna typen.


## Syntax

```powerquery
Value.As(
    value as any,
    type as type
) as any
```


## Remarks

Returnerar värdet om det är kompatibelt med den angivna typen. Detta motsvarar operatorn "som" i M, med undantaget att den kan acceptera referenser för identifieringstyp som Number.Type.


## Examples

### Example #1 
Typkonvertera ett nummer till ett nummer.
```powerquery
Value.As(123, Number.Type)
```

Result: 
```powerquery
123
```


### Example #2 
Försök att typkonvertera ett textvärde till ett nummer.
```powerquery
Value.As("abc", type number)
```

Result: 
```powerquery
[Expression.Error] We cannot convert the value "abc" to type Number.
```




## Category
Values.Types
