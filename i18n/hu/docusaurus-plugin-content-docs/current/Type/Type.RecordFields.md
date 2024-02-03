---
title: Type.RecordFields
---

# Type.RecordFields


## Description

Egy adott rekordtípus mezőit leíró rekord visszaadása. A visszaadott rekordtípus egyes mezői az eredeti típus mezőinek nevét és értékét tartalmazzák.


## Syntax

```powerquery
Type.RecordFields(
    type as type
) as record
```


## Details

A(z) <code>type</code> paraméterben megadott rekord mezőit leíró rekord visszaadása. A visszaadott rekordtípus egyes mezői az eredeti típus mezőinek nevét és értékét tartalmazzák, <code>[ Type = type, Optional = logical ]</code> formátumban.


## Examples

### Example #1 
Az &lt;code&gt;[ A = number, optional B = any]&lt;/code&gt; rekordbeli mezők nevének és értékének megkeresése.
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
