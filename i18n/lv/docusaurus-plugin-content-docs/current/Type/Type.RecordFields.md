---
title: Type.RecordFields
---

# Type.RecordFields


## Description

Atgriež ierakstu, kurā aprakstīti ieraksta tipa lauki, un katra atgrieztā ieraksta tipa laukam ir atbilstošs nosaukums un vērtība.


## Syntax

```powerquery
Type.RecordFields(
    type as type
) as record
```


## Details

Atgriež ierakstu, kurā aprakstīti ieraksta <code>type</code> lauki. Katram atgrieztā ieraksta tipa laukam ir atbilstošs nosaukums un vērtība ieraksta <code>[ Type = type, Optional = logical ]</code> veidā.


## Examples

### Example #1 
Atrodiet ieraksta &lt;code&gt;[ A = number, optional B = any]&lt;/code&gt; nosaukumu un vērtību.
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
