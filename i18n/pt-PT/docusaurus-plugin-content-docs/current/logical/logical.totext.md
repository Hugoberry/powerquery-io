---
title: Logical.ToText
---

# Logical.ToText


Devolve o texto "true" ou "false" com base num valor lógico especificado.


## Syntax

```powerquery
Logical.ToText(
    logicalValue as logical
) as text
```


## Remarks

Cria um valor de texto a partir do valor lógico `logicalValue`, `true` ou `false`. Se `logicalValue` não for um valor lógico, é gerado um erro.


## Examples

### Example #1
Criar um valor de texto a partir do valor lógico `true`.
```powerquery
Logical.ToText(true)
```

Result: 
```powerquery
"true"
```




## Category
Logical
