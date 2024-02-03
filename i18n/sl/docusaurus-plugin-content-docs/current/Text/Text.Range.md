---
title: Text.Range
---

# Text.Range


## Description

Vrne podniz, ki je najden v odmiku.


## Syntax

```powerquery
Text.Range(
    text as text,
    offset as number,
    optional count as number
) as text
```


## Details

Vrne podniz iz besedila <code>text</code>, ki je najden v odmiku <code>offset</code>.    Z izbirnim parametrom <code>count</code> lahko določite, koliko znakov bo vrnjenih. Če ni dovolj znakov, se prikaže sporočilo o napaki.


## Examples

### Example #1 
Poiščite podniz iz besedila &#34;Hello World&#34;, ki se začne z indeksom 6.
```powerquery
Text.Range("Hello World", 6)
```

Result: 
```powerquery
"World"
```


### Example #2 
Poiščite podniz iz besedila &#34;Hello World Hello&#34;, ki se začne z indeksom 6 v razponu 5 znakov.
```powerquery
Text.Range("Hello World Hello", 6, 5)
```

Result: 
```powerquery
"World"
```




## Category
Text.Extraction
