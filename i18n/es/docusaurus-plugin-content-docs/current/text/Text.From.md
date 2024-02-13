---
title: Text.From
---

# Text.From


Crea un valor de texto a partir del valor dado.


## Syntax

```powerquery
Text.From(
    value as any,
    optional culture as text
) as text
```


## Remarks

Devuelve la representación de texto de <code>value</code>. <code>value</code> puede ser un valor <code>number</code>, <code>date</code>, <code>time</code>, <code>datetime</code>, <code>datetimezone</code>, <code>logical</code>, <code>duration</code> o <code>binary</code>.    Si el valor dado es "null", <code>Text.From</code> devuelve "null". También se puede proporcionar un parámetro <code>culture</code> opcional (por ejemplo, "es-ES").


## Examples

### Example #1 
Crear un valor de texto a partir del número 3.
```powerquery
Text.From(3)
```

Result: 
```powerquery
"3"
```




## Category
Text.Conversions from and to text
