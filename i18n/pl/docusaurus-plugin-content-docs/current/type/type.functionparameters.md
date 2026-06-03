---
title: Type.FunctionParameters
---

# Type.FunctionParameters


Zwraca rekord z wartościami pól ustawionymi jako nazwy parametrów typu funkcji i wartościami ustawionymi jako odpowiednie typy.


## Syntax

```powerquery
Type.FunctionParameters(
    type as type
) as record
```


## Remarks

Zwraca rekord z wartościami pól ustawionymi jako nazwy parametrów funkcji `type` i wartościami ustawionymi jako odpowiednie typy.


## Examples

### Example #1
Znajdź typy parametrów funkcji `(x as number, y as text)`.
```powerquery
Type.FunctionParameters(type function (x as number, y as text) as any)
```

Result: 
```powerquery
[x = type number, y = type text]
```




## Category
Type
