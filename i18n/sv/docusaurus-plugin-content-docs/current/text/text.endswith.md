---
title: Text.EndsWith
---

# Text.EndsWith


Anger om texten slutar med det angivna värdet.


## Syntax

```powerquery
Text.EndsWith(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Remarks

Indikerar om den givna texten, `text`, slutar med det angivna värdet, `substring`. Indikationen är skiftlägeskänslig.

`comparer` är en `Comparer` som används för att kontrollera jämförelsen. Jämförelsefunktioner kan användas för att tillhandahålla skiftlägesokänsliga eller kultur- och språkmedvetna jämförelser.

Följande inbyggda jämförelsefunktioner finns tillgängliga i formelspråket:

-   `Comparer.Ordinal`: Används för att genomföra en exakt ordningstalsjämförelse
-   `Comparer.OrdinalIgnoreCase`: Används för att genomföra en exakt skiftlägesokänslig ordningstalsjämförelse
-   `Comparer.FromCulture`: Används för att genomföra en kulturmedveten jämförelse


## Examples

### Example #1
Kontrollera om "Hello, World" slutar med "world".
```powerquery
Text.EndsWith("Hello, World", "world")
```

Result: 
```powerquery
false
```


### Example #2
Kontrollera om "Hello, World" slutar med "World".
```powerquery
Text.EndsWith("Hello, World", "World")
```

Result: 
```powerquery
true
```




## Category
Text.Membership
