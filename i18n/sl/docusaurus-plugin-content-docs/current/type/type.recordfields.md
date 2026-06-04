---
title: Type.RecordFields
---

# Type.RecordFields


Vrne zapis, ki opisuje polja vrste zapisa s polji vrnjene vrste zapisa, ki imajo ustrezno ime in vrednost.


## Syntax

```powerquery
Type.RecordFields(
    type as type
) as record
```


## Remarks

Vrne zapis, ki opisuje polja zapisa `type`. Vsako polje vrnjene vrste zapisa ima ustrezno ime in vrednost v obliki zapisa `[ Type = type, Optional = logical ]`.


## Examples

### Example #1
Poiščite ime in vrednost zapisa `[ A = number, optional B = any]`.
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
