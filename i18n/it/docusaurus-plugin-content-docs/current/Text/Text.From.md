---
title: Text.From
---

# Text.From


Crea un valore di testo dal valore specificato.


## Syntax

```powerquery
Text.From(
    value as any,
    optional culture as text
) as text
```


## Remarks

Restituisce la rappresentazione di testo di <code>value</code>. <code>value</code> può essere un valore <code>number</code>, <code>date</code>, <code>time</code>, <code>datetime</code>, <code>datetimezone</code>, <code>logical</code>, <code>duration</code> o <code>binary</code>.    Se il valore specificato è Null, <code>Text.From</code> restituisce Null. È anche possibile specificare un valore <code>culture</code> facoltativo, ad esempio "it-IT".


## Examples

### Example #1 
Creare un valore di testo dal numero 3.
```powerquery
Text.From(3)
```

Result: 
```powerquery
"3"
```




## Category
Text.Conversions from and to text
