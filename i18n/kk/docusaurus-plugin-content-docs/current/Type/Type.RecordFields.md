---
title: Type.RecordFields
---

# Type.RecordFields


## Description

Тиісті атауы мен мәні бар берілген жазба түрінің әр өрісімен бірге жазба түрінің өрістерін сипаттайтын жазбаны береді.


## Syntax

```powerquery
Type.RecordFields(
    type as type
) as record
```


## Details

<code>type</code> жазбасының өрістерін сипаттайтын жазбаны береді. Берілген жазба түрінің әр өрісінде <code>[ Type = type, Optional = logical ]</code> жазбасының пішініндегі тиісті атау мен мән бар.


## Examples

### Example #1 
&lt;code&gt;[ A = number, optional B = any]&lt;/code&gt; жазбасының атауы мен мәнін табыңыз.
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
