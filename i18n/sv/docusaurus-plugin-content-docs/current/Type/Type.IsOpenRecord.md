---
title: Type.IsOpenRecord
---

# Type.IsOpenRecord


## Description

Returnerar om en posttyp är öppen.


## Syntax

```powerquery
Type.IsOpenRecord(
    type as type
) as logical
```


## Details

Returnerar en <code>logical</code> som indikerar om posten <code>type</code> är öppen.


## Examples

### Example #1 
Fastställ om posten &lt;code&gt;type [ A = number, ... ]&lt;/code&gt; är öppen.
```powerquery
Type.IsOpenRecord(type [A = number, ...])
```

Result: 
```powerquery
true
```




## Category
Type
