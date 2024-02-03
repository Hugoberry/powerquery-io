---
title: Type.NonNullable
---

# Type.NonNullable


## Description

Retorna el tipus que no és nullable (no es pot anul·lar) d&#39;un tipus.


## Syntax

```powerquery
Type.NonNullable(
    type as type
) as type
```


## Details

Retorna el tipus que no és <code>nullable</code> de <code>type</code>.


## Examples

### Example #1 
Retorneu el tipus que no és nullable de &lt;code&gt;type nullable number&lt;/code&gt;.
```powerquery
Type.NonNullable(type nullable number)
```

Result: 
```powerquery
type number
```




## Category
Type
