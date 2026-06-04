---
title: Logical.ToText
---

# Logical.ToText


Returnează textul „true” sau „false” dintr-o valoare logică.


## Syntax

```powerquery
Logical.ToText(
    logicalValue as logical
) as text
```


## Remarks

Creează o valoare text din valoarea logică `logicalValue`, fie `true`, fie `false`. Dacă `logicalValue` nu este o valoare logică, se generează o eroare.


## Examples

### Example #1
Creaţi o valoare text din valoarea logică `true`.
```powerquery
Logical.ToText(true)
```

Result: 
```powerquery
"true"
```




## Category
Logical
