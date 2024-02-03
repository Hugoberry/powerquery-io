---
title: Text.At
---

# Text.At


## Description

Visszaadja a megadott pozíciónál található karaktert.


## Syntax

```powerquery
Text.At(
    text as text,
    index as number
) as text
```


## Details

Visszaadja a(z) <code>text</code> szöveges érték <code>index</code> pozíciójánál található karaktert. A szöveg első karaktere számít 0-s pozíciónak.


## Examples

### Example #1 
Megkeresi a 4-es pozíciónál levő karaktert a „Hello, World” sztringben.
```powerquery
Text.At("Hello, World", 4)
```

Result: 
```powerquery
"o"
```




## Category
Text.Extraction
