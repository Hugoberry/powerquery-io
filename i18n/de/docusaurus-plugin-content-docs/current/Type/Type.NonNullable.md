---
title: Type.NonNullable
---

# Type.NonNullable


## Description

Gibt von einem Typ den Typ zurück, der keine NULL-Werte zulässt.


## Syntax

```powerquery
Type.NonNullable(
    type as type
) as type
```


## Details

Gibt von <code>type</code> den Typ zurück, der keine <code>NULL-Werte</code> zulässt.


## Examples

### Example #1 
Geben Sie den Typ von &lt;code&gt;type nullable number&lt;/code&gt; zurück, der keine NULL-Werte zulässt.
```powerquery
Type.NonNullable(type nullable number)
```

Result: 
```powerquery
type number
```




## Category
Type
