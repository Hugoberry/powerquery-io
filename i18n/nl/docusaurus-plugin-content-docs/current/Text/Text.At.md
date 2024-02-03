---
title: Text.At
---

# Text.At


## Description

Retourneert het teken op de opgegeven positie.


## Syntax

```powerquery
Text.At(
    text as text,
    index as number
) as text
```


## Details

Retourneert het teken in de tekstwaarde <code>text</code> op positie <code>index</code>. Het eerste teken in de tekst staat op positie 0.


## Examples

### Example #1 
Het teken op positie 4 in de tekenreeks &#34;Hallo wereld&#34; zoeken.
```powerquery
Text.At("Hello, World", 4)
```

Result: 
```powerquery
"o"
```




## Category
Text.Extraction
