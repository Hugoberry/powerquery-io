---
title: Text.Contains
---

# Text.Contains


Returnerar huruvida texten innehåller delsträngen.


## Syntax

```powerquery
Text.Contains(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Remarks

Identifierar om <code>text</code> innehåller värdet <code>substring</code>. Returnerar true om värdet hittas. Den här funktionen stöder inte jokertecken eller vanliga uttryck.      <br />      <br /> Det valfria argumentet <code>comparer</code> kan användas för att ange skiftlägesokänsliga jämförelser eller kultur- och språkmedvetna jämförelser.     Följande inbyggda jämförelseverktyg är tillgängliga på formelspråket:      <ul>        <li><code>Comparer.Ordinal</code>: Används för att utföra en skiftlägeskänslig ordningstalsjämförelse</li>        <li><code>Comparer.OrdinalIgnoreCase</code>:  Används för att utföra en skiftlägesokänslig ordningstalsjämförelse</li>         <li><code>Comparer.FromCulture</code>: Används för att utföra en kulturmedveten jämförelse</li>        </ul>


## Examples

### Example #1 
Kontrollera om texten &#34;Hello World&#34; innehåller &#34;Hello&#34;.
```powerquery
Text.Contains("Hello World", "Hello")
```

Result: 
```powerquery
true
```


### Example #2 
Kontrollera om texten &#34;Hello World&#34; innehåller &#34;hello&#34;.
```powerquery
Text.Contains("Hello World", "hello")
```

Result: 
```powerquery
false
```


### Example #3 
Ta reda på om texten &#34;Hello World&#34; innehåller &#34;hello&#34; med hjälp av en skiftlägesokänslig jämförelse.
```powerquery
Text.Contains("Hello World", "hello", Comparer.OrdinalIgnoreCase)
```

Result: 
```powerquery
true
```




## Category
Text.Membership
