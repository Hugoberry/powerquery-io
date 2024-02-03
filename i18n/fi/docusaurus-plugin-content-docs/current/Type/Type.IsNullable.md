---
title: Type.IsNullable
---

# Type.IsNullable


## Description

Palauttaa arvon true, jos tyyppi on tyhjäarvoja tukeva tyyppi, ja muussa tapauksessa arvon false.


## Syntax

```powerquery
Type.IsNullable(
    type as type
) as logical
```


## Details

Palauttaa arvon <code>true</code>, jos tyyppi on <code>nullable</code>-tyyppi, ja muussa tapauksessa arvon <code>false</code>.


## Examples

### Example #1 
Selvitä, tukeeko &lt;code&gt;number&lt;/code&gt; tyhjäarvoja.
```powerquery
Type.IsNullable(type number)
```

Result: 
```powerquery
false
```


### Example #2 
Selvitä, tukeeko &lt;code&gt;type nullable number&lt;/code&gt; tyhjäarvoja.
```powerquery
Type.IsNullable(type nullable number)
```

Result: 
```powerquery
true
```




## Category
Type
