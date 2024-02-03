---
title: Text.RemoveRange
---

# Text.RemoveRange


## Description

Odstrani število znakov z začetkom v danem odmiku.


## Syntax

```powerquery
Text.RemoveRange(
    text as text,
    offset as number,
    optional count as number
) as text
```


## Details

Vrne kopijo besedilne vrednosti <code>text</code>, iz katere so odstranjeni vsi znaki s položajem <code>offset</code>.    Z izbirnim parametrom <code>count</code> lahko določite, koliko znakov bo odstranjenih. Privzeta vrednost parametra <code>count</code> je 1. Vrednosti položajev se začnejo pri 0.


## Examples

### Example #1 
Odstranite 1 znak iz besedilne vrednosti &#34;ABEFC&#34; na položaju 2.
```powerquery
Text.RemoveRange("ABEFC", 2)
```

Result: 
```powerquery
"ABFC"
```


### Example #2 
Odstranite dva znaka iz besedilne vrednosti &#34;ABEFC&#34; z začetkom na položaju 2.
```powerquery
Text.RemoveRange("ABEFC", 2, 2)
```

Result: 
```powerquery
"ABC"
```




## Category
Text.Modification
