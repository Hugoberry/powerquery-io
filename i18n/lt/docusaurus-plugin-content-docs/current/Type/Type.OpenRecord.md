---
title: Type.OpenRecord
---

# Type.OpenRecord


## Description

Pateikiama atidaryta nurodyto įrašo tipo versija (arba to paties tipo, jei jau atidaryta).


## Syntax

```powerquery
Type.OpenRecord(
    type as type
) as type
```


## Details

Pateikiama atidaryta nurodyto <code>record</code> <code>type</code> versija (arba to paties tipo, jei jau atidaryta).


## Examples

### Example #1 
Sukurkite &lt;code&gt;type [ A = number,…]&lt;/code&gt; tipo atidarytą versiją.
```powerquery
Type.OpenRecord(type [A = number])
```

Result: 
```powerquery
type [A = number, ...]
```




## Category
Type
