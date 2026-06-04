---
title: Type.IsNullable
---

# Type.IsNullable


Palauttaa arvon true, jos tyyppi on tyhjäarvoja tukeva tyyppi, ja muussa tapauksessa arvon false.


## Syntax

```powerquery
Type.IsNullable(
    type as type
) as logical
```


## Remarks

Palauttaa arvon `true`, jos tyyppi on `nullable`\-tyyppi, ja muussa tapauksessa arvon `false`.


## Examples

### Example #1
Selvitä, tukeeko `number` tyhjäarvoja.
```powerquery
Type.IsNullable(type number)
```

Result: 
```powerquery
false
```


### Example #2
Selvitä, tukeeko `type nullable number` tyhjäarvoja.
```powerquery
Type.IsNullable(type nullable number)
```

Result: 
```powerquery
true
```




## Category
Type
