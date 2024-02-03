---
title: Type.RecordFields
---

# Type.RecordFields


## Description

Vrne zapis, ki opisuje polja vrste zapisa s polji vrnjene vrste zapisa, ki imajo ustrezno ime in vrednost.


## Syntax

```powerquery
Type.RecordFields(
    type as type
) as record
```


## Details

Vrne zapis, ki opisuje polja zapisa <code>type</code>. Vsako polje vrnjene vrste zapisa ima ustrezno ime in vrednost v obliki zapisa <code>[ Type = type, Optional = logical ]</code>.


## Examples

### Example #1 
Poiščite ime in vrednost zapisa &lt;code&gt;[ A = number, optional B = any]&lt;/code&gt;.
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
