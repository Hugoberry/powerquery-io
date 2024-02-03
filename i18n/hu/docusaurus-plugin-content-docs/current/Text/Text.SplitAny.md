---
title: Text.SplitAny
---

# Text.SplitAny


## Description

Szöveges értékek listáját adja vissza, amelyet az elválasztóban szereplő bármely karakternél való felosztással állít elő.


## Syntax

```powerquery
Text.SplitAny(
    text as text,
    separators as text
) as list
```


## Details

Szöveges értékek olyan listáját adja vissza, amely a(z) <code>text</code> szöveges értéknek a megadott <code>separators</code> elválasztóban szereplő bármely karakter alapján történő felosztásának eredménye.


## Examples

### Example #1 
Lista létrehozása a „Jamie|Campbell|Admin|Adventure Works|www.adventure-works.com” szöveges értékből
```powerquery
Text.SplitAny("Jamie|Campbell|Admin|Adventure Works|www.adventure-works.com", "|")
```

Result: 
```powerquery
{
    "Jamie",
    "Campbell",
    "Admin",
    "Adventure Works",
    "www.adventure-works.com"
}
```




## Category
Text.Transformations
