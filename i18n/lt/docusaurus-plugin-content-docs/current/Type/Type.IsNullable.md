---
title: Type.IsNullable
---

# Type.IsNullable


## Description

Pateikiama reikšmė „true“, jei tipas neapibrėžtas. Kitais atvejais pateikiama „false“.


## Syntax

```powerquery
Type.IsNullable(
    type as type
) as logical
```


## Details

Pateikiama <code>true</code>, jei tipas yra <code>nullable</code>; kitais atvejais – <code>false</code>.


## Examples

### Example #1 
Nustatykite, ar &lt;code&gt;number&lt;/code&gt; neapibrėžtas.
```powerquery
Type.IsNullable(type number)
```

Result: 
```powerquery
false
```


### Example #2 
Nustatykite, ar &lt;code&gt;type nullable number&lt;/code&gt; neapibrėžtas.
```powerquery
Type.IsNullable(type nullable number)
```

Result: 
```powerquery
true
```




## Category
Type
