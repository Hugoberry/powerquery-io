---
title: Value.FromText
---

# Value.FromText


Crea un valor con establecimiento inflexible de tipos a partir de una representación de texto.


## Syntax

```powerquery
Value.FromText(
    text as any,
    optional culture as text
) as any
```


## Remarks

Permite descodificar un valor a partir de una representación de texto, <code>text</code>, y lo interpreta como un valor con un tipo apropiado.    <code>Value.FromText</code> toma un valor de texto y devuelve un número, un valor lógico, un valor NULL, un valor de fecha y hora, un valor de duración o un valor de texto. El valor de texto vacío se interpreta como un valor NULL.    También se puede proporcionar un parámetro <code>culture</code> opcional (por ejemplo, "es-ES").



## Category
Text.Conversions from and to text
