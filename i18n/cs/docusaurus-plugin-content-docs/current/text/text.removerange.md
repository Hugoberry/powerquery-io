---
title: Text.RemoveRange
---

# Text.RemoveRange


Odebere počet znaků počínaje daným posunem.


## Syntax

```powerquery
Text.RemoveRange(
    text as text,
    offset as number,
    optional count as number
) as text
```


## Remarks

Vrátí kopii textové hodnoty `text` po odebrání všech znaků z pozice `offset`. K určení počtu odebraných znaků může být použit volitelný parametr `count`. Výchozí hodnota parametru `count` je 1. Hodnoty pozice začínají hodnotou 0.


## Examples

### Example #1
Odebere 1 znak z textové hodnoty „ABEFC“ na pozici 2.
```powerquery
Text.RemoveRange("ABEFC", 2)
```

Result: 
```powerquery
"ABFC"
```


### Example #2
Odebere dva znaky z textové hodnoty „ABEFC“ počínaje pozicí 2.
```powerquery
Text.RemoveRange("ABEFC", 2, 2)
```

Result: 
```powerquery
"ABC"
```




## Category
Text.Modification
