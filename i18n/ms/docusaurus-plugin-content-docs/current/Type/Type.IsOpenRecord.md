---
title: Type.IsOpenRecord
---

# Type.IsOpenRecord


## Description

Kembalikan sama ada jenis rekod adalah terbuka.


## Syntax

```powerquery
Type.IsOpenRecord(
    type as type
) as logical
```


## Details

Kembalikan <code>logical</code> menentukan sama ada rekod <code>type</code> adalah terbuka.


## Examples

### Example #1 
Tentukan jika rekod &lt;code&gt;type [ A = number, ...]&lt;/code&gt; adalah terbuka.
```powerquery
Type.IsOpenRecord(type [A = number, ...])
```

Result: 
```powerquery
true
```




## Category
Type
