---
title: Value.As
---

# Value.As


Retourneert de waarde als deze compatibel is met het opgegeven type.


## Syntax

```powerquery
Value.As(
    value as any,
    type as type
) as any
```


## Remarks

Retourneert de waarde als deze compatibel is met het opgegeven type. Dit is gelijk aan de operator 'is' in M, met de uitzondering dat het id-typeverwijzingen zoals Number.Type kan accepteren.


## Examples

### Example #1 
Een getal converteren naar een getal.
```powerquery
Value.As(123, Number.Type)
```

Result: 
```powerquery
123
```


### Example #2 
Poging om een tekstwaarde te converteren naar een getal.
```powerquery
Value.As("abc", type number)
```

Result: 
```powerquery
[Expression.Error] We cannot convert the value "abc" to type Number.
```




## Category
Values.Types
