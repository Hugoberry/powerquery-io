---
title: Text.Clean
---

# Text.Clean


## Description

Visszaadja a szöveges értéket, amelyből el van távolítva az összes vezérlőkarakter.


## Syntax

```powerquery
Text.Clean(
    text as text
) as text
```


## Details

Visszaad egy szöveges értéket, amelyből el van távolítva a(z) <code>text</code> összes vezérlőkaraktere.


## Examples

### Example #1 
Eltávolítja a sortöréseket és az egyéb vezérlőkaraktereket a szöveges értékekből.
```powerquery
Text.Clean("ABC#(lf)D")
```

Result: 
```powerquery
"ABCD"
```




## Category
Text.Transformations
