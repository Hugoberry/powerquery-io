---
title: Logical.ToText
---

# Logical.ToText


Zwraca tekst „true” lub „false” odpowiadający danej wartości logicznej.


## Syntax

```powerquery
Logical.ToText(
    logicalValue as logical
) as text
```


## Remarks

Tworzy wartość tekstową na podstawie wartości logicznej `logicalValue`, (`true` lub `false`). Jeśli element `logicalValue` nie jest wartością logiczną, jest zgłaszany błąd.


## Examples

### Example #1
Utwórz wartość tekstową na podstawie wartości logicznej `true`.
```powerquery
Logical.ToText(true)
```

Result: 
```powerquery
"true"
```




## Category
Logical
