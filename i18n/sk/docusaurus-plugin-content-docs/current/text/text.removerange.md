---
title: Text.RemoveRange
---

# Text.RemoveRange


Odstráni počet znakov, počnúc pri danom posune


## Syntax

```powerquery
Text.RemoveRange(
    text as text,
    offset as number,
    optional count as number
) as text
```


## Remarks

Vráti kópiu textovej hodnoty `text`, pričom odstráni všetky znaky z pozície `offset`. Na zadanie počtu znakov, ktoré sa majú odstrániť, možno použiť voliteľný parameter `count`. Predvolená hodnota parametra `count` je 1. Hodnoty pozície začínajú číslom 0.


## Examples

### Example #1
Odstráňte 1 znak z textovej hodnoty "ABEFC" na pozícii 2.
```powerquery
Text.RemoveRange("ABEFC", 2)
```

Result: 
```powerquery
"ABFC"
```


### Example #2
Odstráňte dva znaky z textovej hodnoty "ABEFC", počnúc pozíciou 2.
```powerquery
Text.RemoveRange("ABEFC", 2, 2)
```

Result: 
```powerquery
"ABC"
```




## Category
Text.Modification
