---
title: Type.IsOpenRecord
---

# Type.IsOpenRecord


## Description

Returnează dacă un tip de înregistrare este deschis.


## Syntax

```powerquery
Type.IsOpenRecord(
    type as type
) as logical
```


## Details

Returnează o valoare <code>logică</code> indicând dacă o înregistrare <code>type</code> este deschisă.


## Examples

### Example #1 
Determinați dacă înregistrarea de &lt;code&gt;type [ A = number, ...]&lt;/code&gt; este deschisă.
```powerquery
Type.IsOpenRecord(type [A = number, ...])
```

Result: 
```powerquery
true
```




## Category
Type
