---
title: Type.RecordFields
---

# Type.RecordFields


## Description

Returnerar en post som beskriver en posttyps fält där varje fält för den returnerade posttypen har ett motsvarande namn och värde.


## Syntax

```powerquery
Type.RecordFields(
    type as type
) as record
```


## Details

Returnerar en post som beskriver fälten för en post <code>type</code>. Varje fält av den returnerade posttypen har ett motsvarande namn och ett värde, i formen av en post <code>[ Type = type, Optional = logical ]</code>.


## Examples

### Example #1 
Hitta namnet och värdet för posten &lt;code&gt;[ A = number, optional B = any]&lt;/code&gt;.
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
