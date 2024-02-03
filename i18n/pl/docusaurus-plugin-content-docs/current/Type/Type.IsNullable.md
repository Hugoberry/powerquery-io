---
title: Type.IsNullable
---

# Type.IsNullable


## Description

Zwraca wartość true, jeśli typ może mieć wartość null; w przeciwnym razie zwraca wartość false.


## Syntax

```powerquery
Type.IsNullable(
    type as type
) as logical
```


## Details

Zwraca wartość <code>true</code>, jeśli typ to <code>nullable</code>; w przeciwnym razie zwraca wartość <code>false</code>.


## Examples

### Example #1 
Określ, czy element &lt;code&gt;number&lt;/code&gt; może mieć wartość null.
```powerquery
Type.IsNullable(type number)
```

Result: 
```powerquery
false
```


### Example #2 
Określ, czy element &lt;code&gt;type nullable number&lt;/code&gt; może mieć wartość null.
```powerquery
Type.IsNullable(type nullable number)
```

Result: 
```powerquery
true
```




## Category
Type
