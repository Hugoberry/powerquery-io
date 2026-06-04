---
title: Text.Range
---

# Text.Range


Vrne podniz, ki je najden v odmiku.


## Syntax

```powerquery
Text.Range(
    text as text,
    offset as number,
    optional count as number
) as text
```


## Remarks

Vrne podniz iz besedila `text`, ki je najden v odmiku `offset`. Z izbirnim parametrom `count` lahko določite, koliko znakov bo vrnjenih. Če ni dovolj znakov, pride do napake.


## Examples

### Example #1
Poiščite podniz iz besedila"Hello World", ki se začne z indeksom 6.
```powerquery
Text.Range("Hello World", 6)
```

Result: 
```powerquery
"World"
```


### Example #2
Poiščite podniz iz besedila"Hello World Hello", ki se začne z indeksom 6 v razponu 5 znakov.
```powerquery
Text.Range("Hello World Hello", 6, 5)
```

Result: 
```powerquery
"World"
```




## Category
Text.Extraction
