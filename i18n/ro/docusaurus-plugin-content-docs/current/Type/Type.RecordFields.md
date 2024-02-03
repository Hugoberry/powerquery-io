---
title: Type.RecordFields
---

# Type.RecordFields


## Description

Returnează o înregistrare care descrie câmpurile unui tip de înregistrare cu fiecare câmp al tipului de înregistrare returnat, având un nume și o valoare corespunzătoare.


## Syntax

```powerquery
Type.RecordFields(
    type as type
) as record
```


## Details

Returnează o înregistrare care descrie câmpurile unei înregistrări <code>type</code>. Fiecare câmp al tipului de înregistrare returnat are un nume și o valoare corespunzătoare, sub forma unei înregistrări <code>[ Type = type, Optional = logical ]</code>.


## Examples

### Example #1 
Găsiți numele și valoarea înregistrării &lt;code&gt;[ A = number, optional B = any]&lt;/code&gt;.
```powerquery
Type.RecordFields(type [A = number, optional B = any])
```

Result: 
```powerquery
[
    A = [Type = type number, Optional = false],
    B = [Type = type any, Optional = true]
]
```




## Category
Type
