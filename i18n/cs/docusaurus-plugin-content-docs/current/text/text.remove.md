---
title: Text.Remove
---

# Text.Remove


Odebere všechny výskyty daného znaku nebo seznamu znaků ze vstupní textové hodnoty.


## Syntax

```powerquery
Text.Remove(
    text as text,
    removeChars as any
) as text
```


## Remarks

Vrátí kopii textové hodnoty `text` s odebranými znaky z hodnoty `removeChars`.


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
