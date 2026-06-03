---
title: Text.Proper
---

# Text.Proper


Skriver første bogstav i alle ord med stort.


## Syntax

```powerquery
Text.Proper(
    text as text,
    optional culture as text
) as text
```


## Remarks

Returnerer resultatet af kun at skrive første bogstav med stort i alle ord i tekstværdien `text`. Alle andre bogstaver returneres som små bogstaver. Der kan også gives angives en valgfri `culture` (f.eks. "en-US").


## Examples

### Example #1
Brug `Text.Proper` på en simpel sætning.
```powerquery
Text.Proper("the QUICK BrOWn fOx jUmPs oVER tHe LAzy DoG")
```

Result: 
```powerquery
"The Quick Brown Fox Jumps Over The Lazy Dog"
```




## Category
Text.Transformations
