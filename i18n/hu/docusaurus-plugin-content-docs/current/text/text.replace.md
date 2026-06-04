---
title: Text.Replace
---

# Text.Replace


Lecseréli a megadott sztringrészlet összes előfordulását a szövegben.


## Syntax

```powerquery
Text.Replace(
    text as text,
    old as text,
    new as text
) as text
```


## Remarks

Azt az eredményt adja vissza, amely a(z) `old` szöveges érték `text` szöveges értékben levő összes előfordulásának a(z) `new` szöveges értékre való lecserélésével keletkezik. Ez a függvény megkülönbözteti a kis- és nagybetűket.


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
