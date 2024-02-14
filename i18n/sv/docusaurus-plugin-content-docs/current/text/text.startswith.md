---
title: Text.StartsWith
---

# Text.StartsWith


Anger om texten börjar med ett angivet värde.


## Syntax

```powerquery
Text.StartsWith(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Remarks

Returnerar sant om textvärdet <code>text</code> inleds med textvärdet <code>substring</code>.      <ul>        <li><code>text</code>: <i></i> Ett <code>text</code>-värde som det ska sökas efter</li>        <li><code>substring</code>: <i></i> Ett <code>text</code>-värde som är den delsträng som ska sökas efter i <code>substring</code></li>        <li><code>comparer</code>: <i>[Valfritt]</i> En <code>Comparer</code> som används för att kontrollera jämförelsen. <code>Comparer.OrdinalIgnoreCase</code> kan till exempel användas för att genomföra skiftlägesokänsliga sökningar</li>      </ul>      <div>        <code>comparer</code> är en <code>Comparer</code> som används för att kontrollera jämförelsen. Jämförelsefunktioner kan användas för att tillhandahålla skiftlägesokänsliga eller kultur- och språkmedvetna jämförelser.      </div>      <div>        Följande inbyggda jämförelsefunktioner är tillgängliga i formelspråket      </div>      <ul>        <li><code>Comparer.Ordinal</code>: Används för att genomföra en exakt ordningstalsjämförelse</li>        <li><code>Comparer.OrdinalIgnoreCase</code>: Används för att genomföra en exakt skiftlägesokänslig ordningstalsjämförelse</li>        <li><code>Comparer.FromCulture</code>: Används för att genomföra en kulturmedveten jämförelse</li>      </ul>


## Examples

### Example #1 
Kontrollera om texten &#34;Hello, World&#34; börjar med texten &#34;hello&#34;.
```powerquery
Text.StartsWith("Hello, World", "hello")
```

Result: 
```powerquery
false
```


### Example #2 
Kontrollera om texten &#34;Hello, World&#34; börjar med texten &#34;Hello&#34;.
```powerquery
Text.StartsWith("Hello, World", "Hello")
```

Result: 
```powerquery
true
```




## Category
Text.Membership
