---
title: Text.RemoveRange
---

# Text.RemoveRange


Quita un número de caracteres a partir del desplazamiento dado


## Syntax

```powerquery
Text.RemoveRange(
    text as text,
    offset as number,
    optional count as number
) as text
```


## Remarks

Devuelve una copia del valor de texto `text` con todos los caracteres desde la posición `offset` quitados. Se puede usar un parámetro opcional (`count`) para especificar el número de caracteres que se van a quitar. El valor predeterminado de `count` es 1. Los valores de posición empiezan en 0.


## Examples

### Example #1
Quitar un carácter del valor de texto "ABEFC" en la posición 2.
```powerquery
Text.RemoveRange("ABEFC", 2)
```

Result: 
```powerquery
"ABFC"
```


### Example #2
Quitar dos caracteres del valor de texto "ABEFC" a partir de la posición 2.
```powerquery
Text.RemoveRange("ABEFC", 2, 2)
```

Result: 
```powerquery
"ABC"
```




## Category
Text.Modification
