---
title: Type.IsNullable
---

# Type.IsNullable


## Description

Ak ide o typ s povolenou hodnotou Null, vráti hodnotu True, v opačnom prípade vráti hodnotu False.


## Syntax

```powerquery
Type.IsNullable(
    type as type
) as logical
```


## Details

Ak ide o typ <code>s povolenou hodnotou Null</code>, vráti hodnotu <code>True</code> v opačnom prípade vráti hodnotu <code>False</code>.


## Examples

### Example #1 
Zisti, či má &lt;code&gt;číslo&lt;/code&gt; povolenú hodnotu Null.
```powerquery
Type.IsNullable(type number)
```

Result: 
```powerquery
false
```


### Example #2 
Zisti, či má &lt;code&gt;zadajte číslo s povolenou hodnotou Null&lt;/code&gt; povolenú hodnotu Null.
```powerquery
Type.IsNullable(type nullable number)
```

Result: 
```powerquery
true
```




## Category
Type
