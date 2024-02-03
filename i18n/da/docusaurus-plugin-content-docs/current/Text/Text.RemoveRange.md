---
title: Text.RemoveRange
---

# Text.RemoveRange


## Description

Fjerner et antal tegn med start ved den angivne forskydning.


## Syntax

```powerquery
Text.RemoveRange(
    text as text,
    offset as number,
    optional count as number
) as text
```


## Details

Returnerer en kopi af tekstværdien <code>text</code>, hvor alle tegn fra position <code>offset</code> er fjernet.    Der kan bruges en valgfri parameter, <code>count</code>, til at angive antallet af tegn, der skal fjernes. Standardværdien for <code>count</code> er 1. Positionsværdier starter ved 0.


## Examples

### Example #1 
Fjern 1 tegn fra tekstværdien &#34;ABEFC&#34; ved position 2.
```powerquery
Text.RemoveRange("ABEFC", 2)
```

Result: 
```powerquery
"ABFC"
```


### Example #2 
Fjern 2 tegn fra tekstværdien &#34;ABEFC&#34; med start ved position 2.
```powerquery
Text.RemoveRange("ABEFC", 2, 2)
```

Result: 
```powerquery
"ABC"
```




## Category
Text.Modification
