---
title: Type.RecordFields
---

# Type.RecordFields


Atgriež ierakstu, kurā aprakstīti ieraksta tipa lauki, un katra atgrieztā ieraksta tipa laukam ir atbilstošs nosaukums un vērtība.


## Syntax

```powerquery
Type.RecordFields(
    type as type
) as record
```


## Remarks

Atgriež ierakstu, kurā aprakstīti ieraksta `type` lauki. Katram atgrieztā ieraksta tipa laukam ir atbilstošs nosaukums un vērtība ieraksta `[ Type = type, Optional = logical ]` veidā.


## Examples

### Example #1
Atrodiet ieraksta `[ A = number, optional B = any]` nosaukumu un vērtību.
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
