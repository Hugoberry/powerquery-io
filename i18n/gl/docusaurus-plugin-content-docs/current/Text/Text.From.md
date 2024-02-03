---
title: Text.From
---

# Text.From


## Description

Crea un valor de texto a partir do valor indicado.


## Syntax

```powerquery
Text.From(
    value as any,
    optional culture as text
) as text
```


## Details

Devolve a representación de texto de <code>value</code>. <code>value</code> pode ser un valor <code>number</code>, <code>date</code>, <code>time</code>, <code>datetime</code>, <code>datetimezone</code>, <code>logical</code>, <code>duration</code> ou <code>binary</code>.    Se o valor indicado é null, <code>Text.From</code> devolve null. Tamén se pode fornecer unha <code>culture</code> opcional (por exemplo, "gl-ES").


## Examples

### Example #1 
Crear un valor de texto a partir do número 3.
```powerquery
Text.From(3)
```

Result: 
```powerquery
"3"
```




## Category
Text.Conversions from and to text
