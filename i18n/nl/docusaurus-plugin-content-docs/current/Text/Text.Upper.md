---
title: Text.Upper
---

# Text.Upper


## Description

Converteert alle tekens naar hoofdletters.


## Syntax

```powerquery
Text.Upper(
    text as text,
    optional culture as text
) as text
```


## Details

Hiermee wordt het resultaat geretourneerd van de conversie van alle tekens in <code>text</code> naar hoofdletters. Er kan ook een optionele <code>culture</code> worden opgegeven (bijvoorbeeld: nl-NL).


## Examples

### Example #1 
De tekst &#34;aBcD&#34; ophalen in hoofdletters.
```powerquery
Text.Upper("aBcD")
```

Result: 
```powerquery
"ABCD"
```




## Category
Text.Transformations
