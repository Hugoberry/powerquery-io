---
title: Text.PositionOfAny
---

# Text.PositionOfAny


## Description

Retourneert de eerste positie in de tekstwaarde van een vermeld teken (-1 als er niets worden gevonden).


## Syntax

```powerquery
Text.PositionOfAny(
    text as text,
    characters as list,
    optional occurrence as Occurrence.Type
) as any
```


## Details

Retourneert de eerste positie van een willekeurig teken in de lijst <code>characters</code>, die is gevonden in <code>text</code>.    Een optionele parameter<code>occurrence</code> kan worden gebruikt om op te geven welke exemplaarpositie moet worden geretourneerd.


## Examples

### Example #1 
Zoek de eerste positie van &#39;W&#39; of &#39;H&#39; in de tekst &#39;Hallo, wereld!&#39;.
```powerquery
Text.PositionOfAny("Hello, World!", {"H", "W"})
```

Result: 
```powerquery
0
```


### Example #2 
Zoek alle posities van &#39;W&#39; of &#39;H&#39; in de tekst &#39;Hallo, wereld!&#39;.
```powerquery
Text.PositionOfAny("Hello, World!", {"H", "W"}, Occurrence.All)
```

Result: 
```powerquery
{0, 7}
```




## Category
Text.Membership
