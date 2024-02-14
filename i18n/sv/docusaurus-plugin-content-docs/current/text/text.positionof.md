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

Returnerar positionen för den specificerade förekomsten av textvärdet <code>substring</code> som påträffades i <code>text</code>.    Du kan använda den valfria parametern <code>occurrence</code> för att ange vilken förekomstposition som ska returneras (första förekomsten är standard).    Returnerar -1 om <code>substring</code> inte påträffas.      <div>        <code>comparer</code> är en <code>Comparer</code> som används för att styra jämförelsen. Jämförelsefunktioner kan användas för att tillhandahålla skiftlägesokänsliga eller kultur- och språkmedvetna jämförelser.      </div>      <div>        Följande inbyggda jämförelsefunktioner är tillgängliga i formelspråket:      </div>      <ul>        <li><code>Comparer.Ordinal</code>: Används för att genomföra en exakt ordningstalsjämförelse</li>        <li><code>Comparer.OrdinalIgnoreCase</code>: Används för att genomföra en exakt skiftlägesokänslig ordningstalsjämförelse</li>        <li> <code>Comparer.FromCulture</code>: Används för att genomföra en kulturmedveten jämförelse</li>      </ul>


## Examples

### Example #1 
Hämta positionen för den första förekomsten av &#34;World&#34; i texten &#34;Hello, World! Hello, World!&#34;.
```powerquery
Text.PositionOf("Hello, World! Hello, World!", "World")
```

Result: 
```powerquery
7
```


### Example #2 
Hämta positionen för den sista förekomsten av &#34;World&#34; i &#34;Hello, World! Hello, World!&#34;.
```powerquery
Text.PositionOf("Hello, World! Hello, World!", "World", Occurrence.Last)
```

Result: 
```powerquery
21
```




## Category
Text.Membership
