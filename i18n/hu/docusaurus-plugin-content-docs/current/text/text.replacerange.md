---
title: Text.ReplaceRange
---

# Text.ReplaceRange


Eltávolít egy karaktertartományt, és beszúr egy új értéket a megadott pozícióba.


## Syntax

```powerquery
Text.ReplaceRange(
    text as text,
    offset as number,
    count as number,
    newText as text
) as text
```


## Remarks

Azt az eredményt adja vissza, amely a(z) `count` karaktereknek a(z) `text` szöveges érték `offset`. pozíciójától kezdődő eltávolításával, majd a(z) `newText` szöveges értéknek a(z) `text` ugyanazon pozíciójába való beszúrásával keletkezik.


## Examples

### Example #1
Egyetlen karakter lecserélése az „ABGF” szöveges érték 2. pozíciójában az új „CDE” szöveges értékre
```powerquery
Text.ReplaceRange("ABGF", 2, 1, "CDE")
```

Result: 
```powerquery
"ABCDEF"
```




## Category
Text.Modification
