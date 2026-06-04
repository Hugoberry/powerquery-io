---
title: Type.RecordFields
---

# Type.RecordFields


Returnează o înregistrare care descrie câmpurile unui tip de înregistrare cu fiecare câmp al tipului de înregistrare returnat, având un nume și o valoare corespunzătoare.


## Syntax

```powerquery
Type.RecordFields(
    type as type
) as record
```


## Remarks

Returnează o înregistrare care descrie câmpurile unei înregistrări `type`. Fiecare câmp al tipului de înregistrare returnat are un nume și o valoare corespunzătoare, sub forma unei înregistrări `[ Type = type, Optional = logical ]`.


## Examples

### Example #1
Găsiți numele și valoarea înregistrării `[ A = number, optional B = any]`.
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
