---
title: Number.ToText
---

# Number.ToText


## Description

Converteix el nombre indicat en text.


## Syntax

```powerquery
Number.ToText(
    number as number,
    optional format as text,
    optional culture as text
) as text
```


## Details

Converteix el valor numèric <code>number</code> en un valor de text segons el format especificat per <code>format</code>.<br />    <br />    El format és un valor de text que indica com s'ha de convertir el nombre. Per obtenir més informació sobre els valors de format admesos, aneu a https://go.microsoft.com/fwlink/?linkid=2241210 i https://go.microsoft.com/fwlink/?linkid=2240884.<br />    <br />    També es pot proporcionar un <code>culture</code> opcional (per exemple, "en-US") per controlar el comportament dependent a la cultura de <code>format</code>.


## Examples

### Example #1 
Converteix un nombre en text sense especificar un format.
```powerquery
Number.ToText(4)
```

Result: 
```powerquery
"4"
```


### Example #2 
Converteix un nombre en format exponencial.
```powerquery
Number.ToText(4, "e")
```

Result: 
```powerquery
"4.000000e+000"
```


### Example #3 
Converteix un nombre en format de percentatge amb només una posició decimal.
```powerquery
Number.ToText(-0.1234, "P1")
```

Result: 
```powerquery
"-12.3 %"
```




## Category
Number.Conversion and formatting
