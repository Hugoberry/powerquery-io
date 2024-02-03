---
title: Text.PadEnd
---

# Text.PadEnd


## Description

Devuelve texto de una longitud especificada rellenando el final del texto dado.


## Syntax

```powerquery
Text.PadEnd(
    text as text,
    count as number,
    optional character as text
) as text
```


## Details

Devuelve un valor <code>text</code> rellenado hasta la longitud <code>count</code> insertando espacios al final del valor de texto <code>text</code>.    Se puede usar un carácter opcional <code>character</code> para especificar el carácter usado para el relleno. El carácter de relleno predeterminado es un espacio.


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
Rellenar el final de un valor de texto con &#34;|&#34; para que tenga 10 caracteres de largo.
```powerquery
Text.PadEnd("Name", 10, "|")
```

Result: 
```powerquery
"Name||||||"
```




## Category
Text.Transformations
