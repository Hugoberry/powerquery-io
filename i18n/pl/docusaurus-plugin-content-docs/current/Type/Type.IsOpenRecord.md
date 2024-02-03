---
title: Type.IsOpenRecord
---

# Type.IsOpenRecord


## Description

Określa, czy typ rekordu jest otwarty.


## Syntax

```powerquery
Type.IsOpenRecord(
    type as type
) as logical
```


## Details

Zwraca wartość <code>logical</code> określającą, czy rekord <code>type</code> jest otwarty.


## Examples

### Example #1 
Określ, czy rekord &lt;code&gt;type [ A = number, ...]&lt;/code&gt; jest otwarty.
```powerquery
Type.IsOpenRecord(type [A = number, ...])
```

Result: 
```powerquery
true
```




## Category
Type
