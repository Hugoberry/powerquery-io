---
title: Comparer.Equals
---

# Comparer.Equals


Returnerar ett logiskt värde baserat på en likhetskontroll av de två givna värdena.


## Syntax

```powerquery
Comparer.Equals(
    comparer as function,
    x as any,
    y as any
) as logical
```


## Remarks

Returnerar ett `logical`\-värde baserat på en likhetskontroll av de två givna värdena, `x` och `y`, med det tillhandahållna `comparer`.

`comparer`är en `Comparer` som används för att kontrollera jämförelsen. En jämförelse är en funktion som accepterar två argument och returnerar -1, 0 eller 1 baserat på om det första värdet är mindre än, lika med, eller större än den andra. Jämförelsefunktioner kan användas för att tillhandahålla skiftlägesokänsliga eller kultur- och språkmedvetna jämförelser.

Följande inbyggda jämförelsefunktioner är tillgängliga i formelspråket:

-   `Comparer.Ordinal`: Används för att genomföra en exakt ordningstalsjämförelse
-   `Comparer.OrdinalIgnoreCase`: Används för att genomföra en exakt skiftlägesokänslig ordningstalsjämförelse
-   `Comparer.FromCulture`: Används för att genomföra en kulturmedveten jämförelse


## Examples

### Example #1
Jämför "1" och "A" med den nationella inställningen "sv-SE" för att bestämma om värdena är lika.
```powerquery
Comparer.Equals(Comparer.FromCulture("en-US"), "1", "A")
```

Result: 
```powerquery
false
```




## Category
Comparer
