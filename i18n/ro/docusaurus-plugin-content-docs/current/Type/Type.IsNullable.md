---
title: Type.IsNullable
---

# Type.IsNullable


## Description

Returnează true dacă o funcție este de un tip care acceptă valori null; altfel, fals.


## Syntax

```powerquery
Type.IsNullable(
    type as type
) as logical
```


## Details

Returnează <code>true</code> dacă un tip <code>nullable</code>; altfel, <code>false</code>.


## Examples

### Example #1 
Determinați dacă &lt;code&gt;număr&lt;/code&gt; acceptă valori null.
```powerquery
Type.IsNullable(type number)
```

Result: 
```powerquery
false
```


### Example #2 
Determinați dacă &lt;code&gt;tip număr care acceptă valoarea null&lt;/code&gt; acceptă valoarea null.
```powerquery
Type.IsNullable(type nullable number)
```

Result: 
```powerquery
true
```




## Category
Type
