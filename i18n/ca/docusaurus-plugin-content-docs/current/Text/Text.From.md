---
title: Text.From
---

# Text.From


## Description

Crea un valor de text a partir del valor donat.


## Syntax

```powerquery
Text.From(
    value as any,
    optional culture as text
) as text
```


## Details

Retorna la representació de text del valor <code>value</code>. <code>value</code> pot ser un valor <code>number</code>, <code>date</code>, <code>time</code>, <code>datetime</code>, <code>datetimezone</code>, <code>logical</code>, <code>duration</code> o <code>binary</code>.    Si el valor proporcionat és nul, <code>Text.From</code> retorna el valor nul. També es pot proporcionar un valor <code>culture</code> (per exemple, "en-US").


## Examples

### Example #1 
Crea un valor de text a partir del nombre 3.
```powerquery
Text.From(3)
```

Result: 
```powerquery
"3"
```




## Category
Text.Conversions from and to text
