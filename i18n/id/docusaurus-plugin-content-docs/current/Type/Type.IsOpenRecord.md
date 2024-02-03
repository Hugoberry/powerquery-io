---
title: Type.IsOpenRecord
---

# Type.IsOpenRecord


## Description

Menghasilkan apakah jenis rekaman terbuka atau tidak.


## Syntax

```powerquery
Type.IsOpenRecord(
    type as type
) as logical
```


## Details

Menghasilkan  <code>logical</code> yang mengindikasikan apakah rekaman <code>type</code> terbuka atau tidak.


## Examples

### Example #1 
Tentukan apakah rekaman &lt;code&gt;type [ A = number, ...]&lt;/code&gt; terbuka.
```powerquery
Type.IsOpenRecord(type [A = number, ...])
```

Result: 
```powerquery
true
```




## Category
Type
