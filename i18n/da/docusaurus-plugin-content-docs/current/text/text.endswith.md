---
title: Text.EndsWith
---

# Text.EndsWith


Angiver, om teksten slutter med den angivne værdi.


## Syntax

```powerquery
Text.EndsWith(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Remarks

Angiver, om den angivne tekst, `text`, slutter med den angivne værdi, `substring`. I resultatet skelnes der mellem store og små bogstaver.

`comparer` er en kode af typen `Comparer`, dvs. en sammenligningsfunktion, som bruges til at styre sammenligningen. Sammenligningsfunktioner kan bruges til at udføre sammenligninger, hvor der ikke skelnes mellem store og små bogstaver, eller udføre kulturelle- og landemæssige sammenligninger.

Følgende indbyggede sammenligningsfunktioner er tilgængelige på formelsproget:

-   `Comparer.Ordinal`: Bruges til at udføre en nøjagtig sammenligning af ordenstal
-   `Comparer.OrdinalIgnoreCase`: Bruges til at udføre en nøjagtig sammenligning af ordenstal, hvor der ikke skelnes mellem store og små bogstaver
-   `Comparer.FromCulture`: Bruges til at udføre en kulturel sammenligning


## Examples

### Example #1
Kontrollér, om "Hello, World" slutter på "world".
```powerquery
Text.EndsWith("Hello, World", "world")
```

Result: 
```powerquery
false
```


### Example #2
Kontrollér, om "Hello, World" slutter på "World".
```powerquery
Text.EndsWith("Hello, World", "World")
```

Result: 
```powerquery
true
```




## Category
Text.Membership
