---
title: Replacer.ReplaceText
---

# Replacer.ReplaceText


Reemplaza el texto dentro de la entrada proporcionada.


## Syntax

```powerquery
Replacer.ReplaceText(
    text as text,
    old as text,
    new as text
) as text
```


## Remarks

Reemplaza el texto `old` del original `text` con el texto `new`. Esta función sustituto se puede usar en `List.ReplaceValue` y `Table.ReplaceValue`.


## Examples

### Example #1
Reemplazar el texto "hO" con "Ho" en la cadena "hOla mundo".
```powerquery
Replacer.ReplaceText("hEllo world", "hE", "He")
```

Result: 
```powerquery
"Hello world"
```




## Category
Replacer
