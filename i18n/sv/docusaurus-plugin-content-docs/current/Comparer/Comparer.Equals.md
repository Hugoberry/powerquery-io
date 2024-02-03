---
title: Comparer.Equals
---

# Comparer.Equals


## Description

Returnerar ett logiskt värde baserat på en likhetskontroll av de två givna värdena.


## Syntax

```powerquery
Comparer.Equals(
    comparer as function,
    x as any,
    y as any
) as logical
```


## Details

Returnerar ett <code>logical</code>-värde baserat på en likhetskontroll av de två givna värdena, <code>x</code> och <code>y</code>, med det tillhandahållna <code>comparer</code>.      <div>        <code>comparer</code>är en <code>Comparer</code> som används för att kontrollera jämförelsen.        En jämförelse är en funktion som accepterar två argument och returnerar -1, 0 eller 1 baserat på om det första värdet är mindre än, lika med,  eller större än den andra.        Jämförelsefunktioner kan användas för att tillhandahålla skiftlägesokänsliga eller kultur- och språkmedvetna jämförelser.      </div>      <div>        Följande inbyggda jämförelsefunktioner är tillgängliga i formelspråket:      </div>      <ul>        <li><code>Comparer.Ordinal</code>: Används för att genomföra en exakt ordningstalsjämförelse</li>        <li><code>Comparer.OrdinalIgnoreCase</code>: Används för att genomföra en exakt skiftlägesokänslig ordningstalsjämförelse</li>         <li><code>Comparer.FromCulture</code>: Används för att genomföra en kulturmedveten jämförelse</li>      </ul>


## Examples

### Example #1 
Jämför &#34;1&#34; och &#34;A&#34; med den nationella inställningen &#34;sv-SE&#34; för att bestämma om värdena är lika.
```powerquery
Comparer.Equals(Comparer.FromCulture("en-US"), "1", "A")
```

Result: 
```powerquery
false
```




## Category
Comparer
