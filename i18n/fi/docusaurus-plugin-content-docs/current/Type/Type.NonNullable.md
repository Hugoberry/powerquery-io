---
title: Type.NonNullable
---

# Type.NonNullable


## Description

Palauttaa tyhjäarvoja tukemattoman tyypin tyypistä.


## Syntax

```powerquery
Type.NonNullable(
    type as type
) as type
```


## Details

Palauttaa tyypin, joka ei ole <code>nullable</code>, kohteesta <code>type</code>.


## Examples

### Example #1 
Palauttaa kohteen &lt;code&gt;type nullable number&lt;/code&gt; tyhjäarvoja tukemattoman tyypin.
```powerquery
Type.NonNullable(type nullable number)
```

Result: 
```powerquery
type number
```




## Category
Type
