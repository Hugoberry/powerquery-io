---
title: Type.IsOpenRecord
---

# Type.IsOpenRecord


## Description

Nurodo, ar įrašo tipas atidarytas.


## Syntax

```powerquery
Type.IsOpenRecord(
    type as type
) as logical
```


## Details

Pateikiama <code>logical</code> reikšmė, nurodanti, ar įrašas <code>type</code> atidarytas.


## Examples

### Example #1 
Nustatykite, ar įrašas &lt;code&gt;type [ A = number, ...]&lt;/code&gt; atidarytas.
```powerquery
Type.IsOpenRecord(type [A = number, ...])
```

Result: 
```powerquery
true
```




## Category
Type
