---
title: Type.IsOpenRecord
---

# Type.IsOpenRecord


## Description

Vrne rezultat, ali je vrsta zapisa odprta.


## Syntax

```powerquery
Type.IsOpenRecord(
    type as type
) as logical
```


## Details

Vrne <code>logično vrednost</code>, ki ponazarja, ali je zapis <code>type</code> odprt.


## Examples

### Example #1 
Določite, ali je zapis &lt;code&gt;type [ A = number, ...]&lt;/code&gt; odprt.
```powerquery
Type.IsOpenRecord(type [A = number, ...])
```

Result: 
```powerquery
true
```




## Category
Type
