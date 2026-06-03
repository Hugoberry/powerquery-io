---
title: Text.PositionOf
---

# Text.PositionOf


Returnerer den første position for værdien (-1, hvis den ikke blev fundet).


## Syntax

```powerquery
Text.PositionOf(
    text as text,
    substring as text,
    optional occurrence as Occurrence.Type,
    optional comparer as function
) as any
```


## Remarks

Returnerer placeringen af den angivne forekomst af tekstværdien `substring`, som blev fundet i `text`. Der kan bruges en valgfri parameter `occurrence` til at angive, hvilken placering af forekomsten skal returneres (første forekomst som standard). Returnerer -1, hvis `substring` ikke blev fundet.

`comparer` er en kode af typen `Comparer`, som bruges til at styre sammenligningen. Sammenligningsfunktioner kan bruges til at udføre sammenligninger, hvor der ikke skelnes mellem store og små bogstaver, eller udføre kulturelle- og landemæssige sammenligninger.

Følgende indbyggede sammenligningsfunktioner er tilgængelige på formelsproget:

-   `Comparer.Ordinal`: Bruges til at udføre en nøjagtig sammenligning af ordenstal
-   `Comparer.OrdinalIgnoreCase`: Bruges til at udføre en nøjagtig sammenligning af ordenstal, hvor der ikke skelnes mellem store og små bogstaver
-   `Comparer.FromCulture`: Bruges til at udføre en kulturel sammenligning


## Examples

### Example #1
Find positionen af den første forekomst af "World" i teksten "Hello, World! Hello, World!".
```powerquery
Text.PositionOf("Hello, World! Hello, World!", "World")
```

Result: 
```powerquery
7
```


### Example #2
Get the position of the last occurrence of "World" in "Hello, World! Hello, World!".
```powerquery
Text.PositionOf("Hello, World! Hello, World!", "World", Occurrence.Last)
```

Result: 
```powerquery
21
```




## Category
Text.Membership
