---
title: Text.RemoveRange
---

# Text.RemoveRange


## Description

Odstráni počet znakov, počnúc pri danom posune


## Syntax

```powerquery
Text.RemoveRange(
    text as text,
    offset as number,
    optional count as number
) as text
```


## Details

Vráti kópiu textovej hodnoty <code>text</code>, pričom odstráni všetky znaky z pozície <code>offset</code>.    Na zadanie počtu znakov, ktoré sa majú odstrániť, možno použiť voliteľný parameter <code>count</code>. Predvolená hodnota parametra <code>count</code> je 1. Hodnoty pozície začínajú číslom 0.


## Examples

### Example #1 
Odstráňte 1 znak z textovej hodnoty &#34;ABEFC&#34; na pozícii 2.
```powerquery
Text.RemoveRange("ABEFC", 2)
```

Result: 
```powerquery
"ABFC"
```


### Example #2 
Odstráňte dva znaky z textovej hodnoty &#34;ABEFC&#34;, počnúc pozíciou 2.
```powerquery
Text.RemoveRange("ABEFC", 2, 2)
```

Result: 
```powerquery
"ABC"
```




## Category
Text.Modification
