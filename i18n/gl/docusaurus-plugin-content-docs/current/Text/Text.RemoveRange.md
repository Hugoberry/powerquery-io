---
title: Text.RemoveRange
---

# Text.RemoveRange


## Description

Eliminar a conta de caracteres comezando no desprazamento indicado.


## Syntax

```powerquery
Text.RemoveRange(
    text as text,
    offset as number,
    optional count as number
) as text
```


## Details

Devolve unha copia do valor de texto <code>text</code> con todos os caracteres desde a posición <code>offset</code> eliminados.    O parámetro opcional <code>count</code> pódese usar para especificar o número de caracteres que se van eliminar. O valor predefinido de <code>count</code> é 1. Os valores de posición comezan en 0.


## Examples

### Example #1 
Eliminar un carácter do valor de texto &#34;ABEFC&#34; na posición 2.
```powerquery
Text.RemoveRange("ABEFC", 2)
```

Result: 
```powerquery
"ABFC"
```


### Example #2 
Eliminar dous caracteres do valor de texto &#34;ABEFC&#34; comezando na posición 2.
```powerquery
Text.RemoveRange("ABEFC", 2, 2)
```

Result: 
```powerquery
"ABC"
```




## Category
Text.Modification
