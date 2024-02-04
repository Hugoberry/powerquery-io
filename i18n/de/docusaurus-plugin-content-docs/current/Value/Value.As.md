---
title: Value.As
---

# Value.As


## Description

Gibt den Wert zurück, wenn er mit dem angegebenen Typ kompatibel ist.


## Syntax

```powerquery
Value.As(
    value as any,
    type as type
) as any
```


## Details

Gibt den Wert zurück, wenn er mit dem angegebenen Typ kompatibel ist. Dies entspricht dem Operator „as“ in M, mit der Ausnahme, dass er Verweise des Bezeichnertyps wie „Number.Type“ akzeptieren kann.


## Examples

### Example #1 
Wandeln Sie eine Zahl in eine Zahl um.
```powerquery
Value.As(123, Number.Type)
```

Result: 
```powerquery
123
```


### Example #2 
Versuchen Sie, einen Textwert in eine Zahl umzuwandeln.
```powerquery
Value.As("abc", type number)
```

Result: 
```powerquery
[Expression.Error] We cannot convert the value "abc" to type Number.
```




## Category
Values.Types
