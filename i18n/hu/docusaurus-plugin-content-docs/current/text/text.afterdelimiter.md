---
title: Text.AfterDelimiter
---

# Text.AfterDelimiter


Text.AfterDelimiter


## Syntax

```powerquery
Text.AfterDelimiter(
    text as text,
    delimiter as text,
    optional index as any
) as any
```


## Remarks

`text` részét adja vissza a meghatározott `delimiter` után. Egy opcionális `index` szám jelöli, a(z) `delimiter` melyik előfordulása legyen számba véve. Egy opcionális `index` lista jelöli, a(z) `delimiter` mely előfordulása legyen számba véve, valamint, hogy az indexelés a bevitel elejétől vagy végétől induljon-e.


## Examples

### Example #1
„111-222-333” részének lekérése az (első) kötőjel után.
```powerquery
Text.AfterDelimiter("111-222-333", "-")
```

Result: 
```powerquery
"222-333"
```


### Example #2
„111-222-333” részének lekérése a második kötőjel után.
```powerquery
Text.AfterDelimiter("111-222-333", "-", 1)
```

Result: 
```powerquery
"333"
```


### Example #3
„111-222-333” részének lekérése az utolsó előtti kötőjel után.
```powerquery
Text.AfterDelimiter("111-222-333", "-", {1, RelativePosition.FromEnd})
```

Result: 
```powerquery
"222-333"
```




## Category
Text.Transformations
