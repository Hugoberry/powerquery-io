---
title: Text.Middle
---

# Text.Middle


## Description

Vrne podniz do določene dolžine.


## Syntax

```powerquery
Text.Middle(
    text as text,
    start as number,
    optional count as number
) as text
```


## Details

Vrne <code>count</code> znakov ali do konca <code>text</code> pri odmiku <code>start</code>.


## Examples

### Example #1 
Poiščite podniz iz besedila &#34;Hello World&#34;, ki se začne z indeksom 6 v razponu 5 znakov.
```powerquery
Text.Middle("Hello World", 6, 5)
```

Result: 
```powerquery
"World"
```


### Example #2 
Poiščite podniz iz besedila &#34;Hello World&#34;, ki se začne z indeksom 6 do konca.
```powerquery
Text.Middle("Hello World", 6, 20)
```

Result: 
```powerquery
"World"
```




## Category
Text.Extraction
