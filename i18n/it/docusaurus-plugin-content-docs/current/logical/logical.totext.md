---
title: Logical.ToText
---

# Logical.ToText


Restituisce il testo "true" o "false" corrispondente a un valore logico.


## Syntax

```powerquery
Logical.ToText(
    logicalValue as logical
) as text
```


## Remarks

Crea un valore di testo dal valore logico `logicalValue`, `true` o `false`. Se `logicalValue` non è un valore logico, viene generato un errore.


## Examples

### Example #1
Creare un valore di testo da valore logico `true`.
```powerquery
Logical.ToText(true)
```

Result: 
```powerquery
"true"
```




## Category
Logical
