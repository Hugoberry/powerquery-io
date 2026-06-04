---
title: Text.Middle
---

# Text.Middle


Vrne podniz do določene dolžine.


## Syntax

```powerquery
Text.Middle(
    text as text,
    start as number,
    optional count as number
) as text
```


## Remarks

Vrne `count` znakov ali do konca `text` pri odmiku `start`.


## Examples

### Example #1
Poiščite podniz iz besedila"Hello World", ki se začne z indeksom 6 v razponu 5 znakov.
```powerquery
Text.Middle("Hello World", 6, 5)
```

Result: 
```powerquery
"World"
```


### Example #2
Poiščite podniz iz besedila"Hello World", ki se začne z indeksom 6 do konca.
```powerquery
Text.Middle("Hello World", 6, 20)
```

Result: 
```powerquery
"World"
```


### Example #3
Poiščite podniz iz besedila"Hello World", ki se začne z indeksom 0 in obsega 2 znaka.
```powerquery
Text.Middle("Hello World", 0, 2)
```

Result: 
```powerquery
"He"
```




## Category
Text.Extraction
