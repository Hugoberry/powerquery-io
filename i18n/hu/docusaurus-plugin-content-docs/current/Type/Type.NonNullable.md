---
title: Type.NonNullable
---

# Type.NonNullable


## Description

Egy adott típus nullmentes típusvariánsának visszaadása.


## Syntax

```powerquery
Type.NonNullable(
    type as type
) as type
```


## Details

A(z) <code>type</code> paraméterben megadott típus <code>nullable</code> típusmódosítótól megfosztott variánsának visszaadása.


## Examples

### Example #1 
A &lt;code&gt;type nullable number&lt;/code&gt; érték nullmentes típusvariánsának visszaadása.
```powerquery
Type.NonNullable(type nullable number)
```

Result: 
```powerquery
type number
```




## Category
Type
