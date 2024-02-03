---
title: Text.From
---

# Text.From


## Description

Creează o valoare text din valoarea dată.


## Syntax

```powerquery
Text.From(
    value as any,
    optional culture as text
) as text
```


## Details

Returnează reprezentarea text a <code>value</code>. <code>value</code> poate fi o valoare <code>number</code>, <code>date</code>, <code>time</code>, <code>datetime</code>, <code>datetimezone</code>, <code>logical</code>, <code>duration</code> sau <code>binary</code>.    Dacă valoarea specificată este nulă, <code>Text.From</code> returnează nul. De asemenea, poate fi furnizat un parametru <code>culture</code> opțional (de exemplu, „ro-RO”).


## Examples

### Example #1 
Creaţi o valoare text din numărul 3.
```powerquery
Text.From(3)
```

Result: 
```powerquery
"3"
```




## Category
Text.Conversions from and to text
