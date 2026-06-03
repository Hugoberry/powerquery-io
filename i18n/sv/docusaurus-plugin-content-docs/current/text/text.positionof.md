---
title: Text.PositionOf
---

# Text.PositionOf


Returnerar den första positionen för värdet (-1 om inget hittas).


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

Returnerar positionen för den specificerade förekomsten av textvärdet `substring` som påträffades i `text`. Du kan använda den valfria parametern `occurrence` för att ange vilken förekomstposition som ska returneras (första förekomsten är standard). Returnerar -1 om `substring` inte påträffas.

`comparer` är en `Comparer` som används för att styra jämförelsen. Jämförelsefunktioner kan användas för att tillhandahålla skiftlägesokänsliga eller kultur- och språkmedvetna jämförelser.

Följande inbyggda jämförelsefunktioner är tillgängliga i formelspråket:

-   `Comparer.Ordinal`: Används för att genomföra en exakt ordningstalsjämförelse
-   `Comparer.OrdinalIgnoreCase`: Används för att genomföra en exakt skiftlägesokänslig ordningstalsjämförelse
-   `Comparer.FromCulture`: Används för att genomföra en kulturmedveten jämförelse


## Examples

### Example #1
Hämta positionen för den första förekomsten av "World" i texten "Hello, World! Hello, World!".
```powerquery
Text.PositionOf("Hello, World! Hello, World!", "World")
```

Result: 
```powerquery
7
```


### Example #2
Hämta positionen för den sista förekomsten av "World" i "Hello, World! Hello, World!".
```powerquery
Text.PositionOf("Hello, World! Hello, World!", "World", Occurrence.Last)
```

Result: 
```powerquery
21
```




## Category
Text.Membership
