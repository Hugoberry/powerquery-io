---
title: Text.Select
---

# Text.Select


## Description

Vybere všechny výskyty daného znaku nebo seznamu znaků ze vstupní textové hodnoty.


## Syntax

```powerquery
Text.Select(
    text as text,
    selectChars as any
) as text
```


## Details

Vrátí kopii textové hodnoty <code>text</code> s odebranými všemi znaky, které nejsou v <code>selectChars</code>.  


## Examples

### Example #1 
Vybrat všechny znaky v rozsahu od „a“ do „z“ z dané textové hodnoty.
```powerquery
Text.Select("a,b;c", {"a".."z"})
```

Result: 
```powerquery
"abc"
```




## Category
Text.Modification
