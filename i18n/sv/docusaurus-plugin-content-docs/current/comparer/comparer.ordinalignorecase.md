---
title: Comparer.OrdinalIgnoreCase
---

# Comparer.OrdinalIgnoreCase


Returnerar en skiftlägeskänslig jämförelsefunktion som använder ordningstalsregler för att jämföra värden.


## Syntax

```powerquery
Comparer.OrdinalIgnoreCase(
    x as any,
    y as any
) as number
```


## Remarks

Returnerar en skiftlägesokänslig jämförelsefunktion som använder ordningstalsregler för att jämföra de angivna värdena `x` and `y`.  
  
En jämförelsefunktion accepterar två argument och returnerar -1, 0 eller 1 baserat på om det första värdet är mindre än, lika med, eller större än den andra.


## Examples

### Example #1
Använder skiftlägeskänsliga ordningstalsregler, jämför "Abc" med "abc". Observera att "Abc" är mindre än "abc" vid användning av `Comparer.Ordinal`.
```powerquery
Comparer.OrdinalIgnoreCase("Abc", "abc")
```

Result: 
```powerquery
0
```




## Category
Comparer
