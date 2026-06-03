---
title: Text.At
---

# Text.At


Retourneert het teken op de opgegeven positie.


## Syntax

```powerquery
Text.At(
    text as text,
    index as number
) as text
```


## Remarks

Retourneert het teken in de tekstwaarde `text` op positie `index`. Het eerste teken in de tekst staat op positie 0.


## Examples

### Example #1
Het teken op positie 4 in de tekenreeks "Hallo wereld" zoeken.
```powerquery
Text.At("Hello, World", 4)
```

Result: 
```powerquery
"o"
```




## Category
Text.Extraction
