---
title: Logical.ToText
---

# Logical.ToText


Devolve o texto "verdadeiro" ou "falso" indicado un valor lóxico.


## Syntax

```powerquery
Logical.ToText(
    logicalValue as logical
) as text
```


## Remarks

Crea un valor de texto a partir do valor lóxico `logicalValue`, ou `true` ou `false`. Se `logicalValue` non é un valor lóxico, xérase un erro.


## Examples

### Example #1
Crear un valor de texto a partir de `true` lóxico.
```powerquery
Logical.ToText(true)
```

Result: 
```powerquery
"true"
```




## Category
Logical
