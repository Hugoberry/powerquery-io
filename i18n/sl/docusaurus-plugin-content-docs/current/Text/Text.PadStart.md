---
title: Text.PadStart
---

# Text.PadStart


## Description

Vrne besedilo z navedeno dolžino, tako da zapolni začetek danega besedila.


## Syntax

```powerquery
Text.PadStart(
    text as text,
    count as number,
    optional character as text
) as text
```


## Details

Vrne <code>text</code> vrednost s polnilom do dolžine <code>count</code>, tako da vstavi presledke na začetku besedilne vrednosti <code>text</code>.    Z izbirnim znakom <code>character</code> lahko določite znak, ki bo uporabljen za zapolnjevanje. Privzeti znak polnila je presledek.


## Examples

### Example #1 
Zapolnite začetek besedilne vrednosti, da bo njena dolžina 10 znakov.
```powerquery
Text.PadStart("Name", 10)
```

Result: 
```powerquery
"      Name"
```


### Example #2 
Zapolnite začetek besedilne vrednosti z &#34;|&#34;, da bo njena dolžina 10 znakov.
```powerquery
Text.PadStart("Name", 10, "|")
```

Result: 
```powerquery
"||||||Name"
```




## Category
Text.Transformations
