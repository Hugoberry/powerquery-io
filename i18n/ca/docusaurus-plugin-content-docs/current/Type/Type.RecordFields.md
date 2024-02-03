---
title: Type.RecordFields
---

# Type.RecordFields


## Description

Retorna un registre que descriu els camps d&#39;un tipus de registre amb cada camp del tipus de registre retornat que té un nom i un valor corresponents.


## Syntax

```powerquery
Type.RecordFields(
    type as type
) as record
```


## Details

Retorna un registre que descriu els camps d'un registre <code>type</code>. Cada camp del tipus de registre retornat té un nom i un valor corresponent, amb la forma d'un registre <code>[ Type = type, Optional = logical ]</code>.


## Examples

### Example #1 
Cerqueu el nom i el valor del registre &lt;code&gt;[ A = number, optional B = any]&lt;/code&gt;.
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
