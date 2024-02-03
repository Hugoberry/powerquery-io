---
title: Value.FromText
---

# Value.FromText


## Description

Crea un valor fortemente escrito a partir dunha representación textual.


## Syntax

```powerquery
Value.FromText(
    text as any,
    optional culture as text
) as any
```


## Details

Descodifica un valor a partir dunha representación textual, <code>text</code> e interprétao como un valor cun tipo apropiado.    <code>Value.FromText</code> toma un valor de texto e devolve un número, un valor lóxico, un valor nulo, un valor de data e hora, un valor de duración ou un valor de texto. O valor de texto baleiro interprétase como un valor nulo.    Tamén se pode fornecer unha <code>culture</code> opcional (por exemplo, "gl-ES").



## Category
Text.Conversions from and to text
