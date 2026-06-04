---
title: Text.RemoveRange
---

# Text.RemoveRange


Odstrani število znakov z začetkom v danem odmiku.


## Syntax

```powerquery
Text.RemoveRange(
    text as text,
    offset as number,
    optional count as number
) as text
```


## Remarks

Vrne kopijo besedilne vrednosti `text`, iz katere so odstranjeni vsi znaki s položajem `offset`. Z izbirnim parametrom `count` lahko določite, koliko znakov bo odstranjenih. Privzeta vrednost parametra `count` je 1. Vrednosti položajev se začnejo pri 0.


## Examples

### Example #1
Odstranite 1 znak iz besedilne vrednosti"ABEFC"na položaju 2.
```powerquery
Text.RemoveRange("ABEFC", 2)
```

Result: 
```powerquery
"ABFC"
```


### Example #2
Odstranite dva znaka iz besedilne vrednosti"ABEFC"z začetkom na položaju 2.
```powerquery
Text.RemoveRange("ABEFC", 2, 2)
```

Result: 
```powerquery
"ABC"
```




## Category
Text.Modification
