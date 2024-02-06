---
title: Type.RecordFields
---

# Type.RecordFields


Returnerer en post, der beskriver felterne for en posttype, hvor de enkelte felter i den returnerede posttype har et tilsvarende navn og en værdi.


## Syntax

```powerquery
Type.RecordFields(
    type as type
) as record
```


## Remarks

Returnerer en post, der beskriver felterne for en post <code>type</code>. De enkelte felter for den returnerede posttype har et tilsvarende navn og en værdi i form af en post <code>[ Type = type, Optional = logical ]</code>.


## Examples

### Example #1 
Find navnet på og værdien for posten &lt;code&gt;[ A = number, optional B = any]&lt;/code&gt;.
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
