---
title: Text.PositionOfAny
---

# Text.PositionOfAny


Retourneert de eerste positie in de tekstwaarde van een vermeld teken (-1 als er niets worden gevonden).


## Syntax

```powerquery
Text.PositionOfAny(
    text as text,
    characters as list,
    optional occurrence as Occurrence.Type
) as any
```


## Remarks

Retourneert de eerste positie van een willekeurig teken in de lijst `characters`, die is gevonden in `text`. Een optionele parameter`occurrence` kan worden gebruikt om op te geven welke exemplaarpositie moet worden geretourneerd.


## Examples

### Example #1
Zoek de eerste positie van 'W' of 'H' in de tekst 'Hallo, wereld!'.
```powerquery
Text.PositionOfAny("Hello, World!", {"H", "W"})
```

Result: 
```powerquery
0
```


### Example #2
Zoek alle posities van 'W' of 'H' in de tekst 'Hallo, wereld!'.
```powerquery
Text.PositionOfAny("Hello, World!", {"H", "W"}, Occurrence.All)
```

Result: 
```powerquery
{0, 7}
```




## Category
Text.Membership
