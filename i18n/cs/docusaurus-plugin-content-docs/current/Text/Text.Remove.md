---
title: Text.Remove
---

# Text.Remove


## Description

Odebere všechny výskyty daného znaku nebo seznamu znaků ze vstupní textové hodnoty.


## Syntax

```powerquery
Text.Remove(
    text as text,
    removeChars as any
) as text
```


## Details

Vrátí kopii textové hodnoty <code>text</code> s odebranými znaky z hodnoty <code>removeChars</code>.  


## Examples

### Example #1 
Odebere znaky , a ; z textové hodnoty.
```powerquery
Text.Remove("a,b;c", {",",";"})
```

Result: 
```powerquery
"abc"
```




## Category
Text.Modification
