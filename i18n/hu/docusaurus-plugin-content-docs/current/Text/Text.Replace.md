---
title: Text.Replace
---

# Text.Replace


## Description

Lecseréli a megadott sztringrészlet összes előfordulását a szövegben.


## Syntax

```powerquery
Text.Replace(
    text as text,
    old as text,
    new as text
) as text
```


## Details

Azt az eredményt adja vissza, amely a(z) <code>old</code> szöveges érték <code>text</code> szöveges értékben levő összes előfordulásának a(z) <code>new</code> szöveges értékre való lecserélésével keletkezik. Ez a függvény megkülönbözteti a kis- és nagybetűket.


## Examples

### Example #1 
A „the” karakterlánc összes előfordulásának lecserélése egy mondatban az „a” karakterre
```powerquery
Text.Replace("the quick brown fox jumps over the lazy dog", "the", "a")
```

Result: 
```powerquery
"a quick brown fox jumps over a lazy dog"
```




## Category
Text.Modification
