---
title: Type.IsOpenRecord
---

# Type.IsOpenRecord


## Description

Rekordtípus nyitottságának meghatározása.


## Syntax

```powerquery
Type.IsOpenRecord(
    type as type
) as logical
```


## Details

A(z) <code>type</code> paraméterben megadott rekord nyitottságát jelző <code>logical</code> típusú érték visszaadása.


## Examples

### Example #1 
A &lt;code&gt;type [ A = number, ...]&lt;/code&gt; rekord nyitottságának meghatározása.
```powerquery
Type.IsOpenRecord(type [A = number, ...])
```

Result: 
```powerquery
true
```




## Category
Type
