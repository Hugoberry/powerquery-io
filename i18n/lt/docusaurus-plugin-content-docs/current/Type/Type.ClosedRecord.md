---
title: Type.ClosedRecord
---

# Type.ClosedRecord


## Description

Pateikiama uždaryta nurodyto įrašo tipo versija (arba to paties tipo, jei jau uždaryta).


## Syntax

```powerquery
Type.ClosedRecord(
    type as type
) as type
```


## Details

Pateikiama uždaryta nurodyto <code>record</code> <code>type</code> versija (arba to paties tipo, jei jau uždaryta).


## Examples

### Example #1 
Sukurkite &lt;code&gt;type [ A = number,…]&lt;/code&gt; tipo uždarytą versiją.
```powerquery
Type.ClosedRecord(type [A = number, ...])
```

Result: 
```powerquery
type [A = number]
```




## Category
Type
