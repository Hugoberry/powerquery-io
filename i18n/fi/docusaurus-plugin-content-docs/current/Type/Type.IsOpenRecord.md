---
title: Type.IsOpenRecord
---

# Type.IsOpenRecord


## Description

Palauttaa, onko tietuetyyppi avoin.


## Syntax

```powerquery
Type.IsOpenRecord(
    type as type
) as logical
```


## Details

Palauttaa kohteen <code>logical</code>, joka ilmaisee, onko tietue <code>type</code> avoin.


## Examples

### Example #1 
Selvitä, onko tietue &lt;code&gt;type [ A = luku, ...]&lt;/code&gt; auki.
```powerquery
Type.IsOpenRecord(type [A = number, ...])
```

Result: 
```powerquery
true
```




## Category
Type
