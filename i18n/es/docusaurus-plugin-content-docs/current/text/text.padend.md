---
title: Text.PadEnd
---

# Text.PadEnd


Devuelve texto de una longitud especificada rellenando el final del texto dado.


## Syntax

```powerquery
Text.PadEnd(
    text as text,
    count as number,
    optional character as text
) as text
```


## Remarks

Devuelve un valor `text` rellenado hasta la longitud `count` insertando espacios al final del valor de texto `text`. Se puede usar un carácter opcional `character` para especificar el carácter usado para el relleno. El carácter de relleno predeterminado es un espacio.


## Examples

### Example #1
Rellenar el final de un valor de texto para que tenga 10 caracteres de largo.
```powerquery
Text.PadEnd("Name", 10)
```

Result: 
```powerquery
"Name      "
```


### Example #2
Rellenar el final de un valor de texto con "|" para que tenga 10 caracteres de largo.
```powerquery
Text.PadEnd("Name", 10, "|")
```

Result: 
```powerquery
"Name||||||"
```




## Category
Text.Transformations
