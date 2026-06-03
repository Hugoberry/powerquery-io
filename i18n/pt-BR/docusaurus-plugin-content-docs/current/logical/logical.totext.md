---
title: Logical.ToText
---

# Logical.ToText


Retorna o texto "true" ou "false" a partir de um valor lógico.


## Syntax

```powerquery
Logical.ToText(
    logicalValue as logical
) as text
```


## Remarks

Cria um valor de texto a partir do valor lógico `logicalValue`, `true` ou `false`. Se `logicalValue` não for um valor lógico, um erro será gerado.


## Examples

### Example #1
Crie um valor de texto a partir do valor `true` lógico.
```powerquery
Logical.ToText(true)
```

Result: 
```powerquery
"true"
```




## Category
Logical
