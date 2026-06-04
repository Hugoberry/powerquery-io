---
title: Text.BeforeDelimiter
---

# Text.BeforeDelimiter


Text.BeforeDelimiter


## Syntax

```powerquery
Text.BeforeDelimiter(
    text as text,
    delimiter as text,
    optional index as any
) as any
```


## Remarks

`text` részét adja vissza a meghatározott `delimiter` előtt. Egy opcionális `index` szám jelöli, a(z) `delimiter` melyik előfordulása legyen számba véve. Egy opcionális `index` lista jelöli, a(z) `delimiter` mely előfordulása legyen számba véve, valamint, hogy az indexelés a bevitel elejétől vagy végétől induljon-e.


## Examples

### Example #1
„111-222-333” részének lekérése az (első) kötőjel előtt.
```powerquery
Text.BeforeDelimiter("111-222-333", "-")
```

Result: 
```powerquery
"111"
```


### Example #2
„111-222-333” részének lekérése a második kötőjel előtt.
```powerquery
Text.BeforeDelimiter("111-222-333", "-", 1)
```

Result: 
```powerquery
"111-222"
```


### Example #3
„111-222-333” részének lekérése az utolsó előtti kötőjel előtt.
```powerquery
Text.BeforeDelimiter("111-222-333", "-", {1, RelativePosition.FromEnd})
```

Result: 
```powerquery
"111"
```




## Category
Text.Transformations
