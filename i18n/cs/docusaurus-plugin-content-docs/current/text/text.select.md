---
title: Text.Select
---

# Text.Select


Vybere všechny výskyty daného znaku nebo seznamu znaků ze vstupní textové hodnoty.


## Syntax

```powerquery
Text.Select(
    text as text,
    selectChars as any
) as text
```


## Remarks

Vrátí kopii textové hodnoty `text` s odebranými všemi znaky, které nejsou v `selectChars`.


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
