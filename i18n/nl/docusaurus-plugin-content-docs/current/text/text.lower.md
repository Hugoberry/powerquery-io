---
title: Text.Lower
---

# Text.Lower


Converteert alle tekens naar kleine letters.


## Syntax

```powerquery
Text.Lower(
    text as text,
    optional culture as text
) as text
```


## Remarks

Hiermee wordt het resultaat geretourneerd van de conversie van alle tekens in `text` naar kleine letters. Er kan ook een optionele `culture` worden opgegeven (bijvoorbeeld: nl-NL).


## Examples

### Example #1
De tekst "AbCd" ophalen in kleine letters.
```powerquery
Text.Lower("AbCd")
```

Result: 
```powerquery
"abcd"
```




## Category
Text.Transformations
