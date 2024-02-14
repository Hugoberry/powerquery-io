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

Indikerar om den givna texten, <code>text</code>, slutar med det angivna värdet, <code>substring</code>. Indikationen är skiftlägeskänslig.      <div>         <code>comparer</code> är en <code>Comparer</code> som används för att kontrollera jämförelsen. Jämförelsefunktioner kan användas för att tillhandahålla skiftlägesokänsliga eller kultur- och språkmedvetna jämförelser.      </div>      <div>        Följande inbyggda jämförelsefunktioner finns tillgängliga i formelspråket:      </div>      <ul>        <li><code>Comparer.Ordinal</code>: Används för att genomföra en exakt ordningstalsjämförelse</li>        <li><code>Comparer.OrdinalIgnoreCase</code>: Används för att genomföra en exakt skiftlägesokänslig ordningstalsjämförelse</li>        <li><code>Comparer.FromCulture</code>: Används för att genomföra en kulturmedveten jämförelse</li>      </ul>


## Examples

### Example #1 
Kontrollera om &#34;Hello, World&#34; slutar med &#34;world&#34;.
```powerquery
Text.EndsWith("Hello, World", "world")
```

Result: 
```powerquery
false
```


### Example #2 
Kontrollera om &#34;Hello, World&#34; slutar med &#34;World&#34;.
```powerquery
Text.EndsWith("Hello, World", "World")
```

Result: 
```powerquery
true
```




## Category
Text.Membership
