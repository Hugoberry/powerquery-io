---
title: Text.Upper
---

# Text.Upper


Converteert alle tekens naar hoofdletters.


## Syntax

```powerquery
Text.Upper(
    text as text,
    optional culture as text
) as text
```


## Remarks

Hiermee wordt het resultaat geretourneerd van de conversie van alle tekens in `text` naar hoofdletters. Er kan ook een optionele `culture` worden opgegeven (bijvoorbeeld: nl-NL).


## Examples

### Example #1
De tekst "aBcD" ophalen in hoofdletters.
```powerquery
Text.Upper("aBcD")
```

Result: 
```powerquery
"ABCD"
```




## Category
Text.Transformations
