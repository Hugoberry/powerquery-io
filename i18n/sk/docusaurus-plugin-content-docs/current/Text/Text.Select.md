---
title: Text.Select
---

# Text.Select


## Description

Vyberie všetky výskyty daného znaku alebo zoznamu znakov zo vstupnej textovej hodnoty.


## Syntax

```powerquery
Text.Select(
    text as text,
    selectChars as any
) as text
```


## Details

Vráti kópiu textovej hodnoty <code>text</code>, pričom odstráni všetky znaky, ktoré nie sú v <code>selectChars</code>.  


## Examples

### Example #1 
Vyberte z textovej hodnoty všetky znaky v rozsahu od a po z.
```powerquery
Text.Select("a,b;c", {"a".."z"})
```

Result: 
```powerquery
"abc"
```




## Category
Text.Modification
