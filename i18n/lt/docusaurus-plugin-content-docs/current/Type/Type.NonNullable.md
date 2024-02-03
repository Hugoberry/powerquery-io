---
title: Type.NonNullable
---

# Type.NonNullable


## Description

Pateikiamas ne neapibrėžtas tipas iš tipo.


## Syntax

```powerquery
Type.NonNullable(
    type as type
) as type
```


## Details

Pateikiamas <code>nullable</code> tipas iš <code>type</code>.


## Examples

### Example #1 
Pateikiamas ne neapibrėžtas &lt;code&gt;type nullable number&lt;/code&gt; tipas.
```powerquery
Type.NonNullable(type nullable number)
```

Result: 
```powerquery
type number
```




## Category
Type
