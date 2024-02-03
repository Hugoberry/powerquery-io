---
title: Type.IsNullable
---

# Type.IsNullable


## Description

Vraća vrednost „true“ ako je tip onaj koji može biti bez vrednosti. U suprotnom, vraća vrednost „false“.


## Syntax

```powerquery
Type.IsNullable(
    type as type
) as logical
```


## Details

Vraća vrednost <code>true</code> ako je tip <code>nullable</code>. U suprotnom, <code>false</code>.


## Examples

### Example #1 
Odredite da li &lt;code&gt;number&lt;/code&gt; može da bude bez vrednosti.
```powerquery
Type.IsNullable(type number)
```

Result: 
```powerquery
false
```


### Example #2 
Odredite da li &lt;code&gt;type nullable number&lt;/code&gt; može da bude bez vrednosti.
```powerquery
Type.IsNullable(type nullable number)
```

Result: 
```powerquery
true
```




## Category
Type
