---
title: Type.NonNullable
---

# Type.NonNullable


## Description

Vrací z typu typ, který nemůže mít hodnotu null (není nullable).


## Syntax

```powerquery
Type.NonNullable(
    type as type
) as type
```


## Details

Vrací z: <code>type</code> typ, který nemůže mít hodnotu null (není <code>nullable</code>).


## Examples

### Example #1 
Vrací typ, který nemůže mít hodnotu null (není nullable), čísla, které může mít typ s hodnotou null (&lt;code&gt;type nullable number&lt;/code&gt;).
```powerquery
Type.NonNullable(type nullable number)
```

Result: 
```powerquery
type number
```




## Category
Type
