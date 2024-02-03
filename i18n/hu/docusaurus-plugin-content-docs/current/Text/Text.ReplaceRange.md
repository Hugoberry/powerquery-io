---
title: Text.ReplaceRange
---

# Text.ReplaceRange


## Description

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


## Details

Azt az eredményt adja vissza, amely a(z) <code>count</code> karaktereknek a(z) <code>text</code> szöveges érték <code>offset</code>. pozíciójától kezdődő eltávolításával, majd a(z) <code>newText</code> szöveges értéknek a(z) <code>text</code> ugyanazon pozíciójába való beszúrásával keletkezik.


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
