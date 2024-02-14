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

Devuelve una copia del valor de texto <code>text</code> con todos los caracteres desde la posición <code>offset</code> quitados.    Se puede usar un parámetro opcional (<code>count</code>) para especificar el número de caracteres que se van a quitar. El valor predeterminado de <code>count</code> es 1. Los valores de posición empiezan en 0.


## Examples

### Example #1 
Quitar un carácter del valor de texto &#34;ABEFC&#34; en la posición 2.
```powerquery
Text.RemoveRange("ABEFC", 2)
```

Result: 
```powerquery
"ABFC"
```


### Example #2 
Quitar dos caracteres del valor de texto &#34;ABEFC&#34; a partir de la posición 2.
```powerquery
Text.RemoveRange("ABEFC", 2, 2)
```

Result: 
```powerquery
"ABC"
```




## Category
Text.Modification
