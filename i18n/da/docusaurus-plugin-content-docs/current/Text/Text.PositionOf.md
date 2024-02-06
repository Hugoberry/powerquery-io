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

Returnerer placeringen af den angivne forekomst af tekstværdien <code>substring</code>, som blev fundet i <code>text</code>.   Der kan bruges en valgfri parameter <code>occurrence</code> til at angive, hvilken placering af forekomsten skal returneres (første forekomst som standard).    Returnerer -1, hvis <code>substring</code> ikke blev fundet.      <div>        <code>comparer</code> er en kode af typen <code>Comparer</code>, som bruges til at styre sammenligningen. Sammenligningsfunktioner kan bruges til at udføre sammenligninger, hvor der ikke skelnes mellem store og små bogstaver, eller udføre kulturelle- og landemæssige sammenligninger.      </div>      <div>        Følgende indbyggede sammenligningsfunktioner er tilgængelige på formelsproget:      </div>      <ul>        <li><code>Comparer.Ordinal</code>:  Bruges til at udføre en nøjagtig sammenligning af ordenstal</li>        <li><code>Comparer.OrdinalIgnoreCase</code>: Bruges til at udføre en nøjagtig sammenligning af ordenstal, hvor der ikke skelnes mellem store og små bogstaver</li>        <li><code>Comparer.FromCulture</code>: Bruges til at udføre en kulturel sammenligning</li>      </ul>


## Examples

### Example #1 
Find positionen af den første forekomst af &#34;World&#34; i teksten &#34;Hello, World! Hello, World!&#34;.
```powerquery
Text.PositionOf("Hello, World! Hello, World!", "World")
```

Result: 
```powerquery
7
```


### Example #2 
Find positionen af den sidste forekomst af &#34;World&#34; i &#34;Hello, World! Hello, World!&#34;.
```powerquery
Text.PositionOf("Hello, World! Hello, World!", "World", Occurrence.Last)
```

Result: 
```powerquery
21
```




## Category
Text.Membership
