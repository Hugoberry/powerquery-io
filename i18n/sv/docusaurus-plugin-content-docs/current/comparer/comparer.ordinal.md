---
title: Comparer.Ordinal
---

# Comparer.Ordinal


Returnerar en jämförelsefunktion som använder ordningstalsregler för att jämföra värden.


## Syntax

```powerquery
Comparer.Ordinal(
    x as any,
    y as any
) as number
```


## Remarks

Returnerar en jämförelsefunktion som använder ordningstalsregler för att jämföra de angivna värdena `x` and `y`.  
  
En jämförelsefunktion accepterar två argument och returnerar -1, 0 eller 1 baserat på om det första värdet är mindre än, lika med, eller större än den andra.


## Examples

### Example #1
Jämför med ordningstalsregler om "encyclopædia" och "encyclopaedia" är ekvivalenta. Observera att dessa är ekvivalenta vid användning av `Comparer.FromCulture("en-US")`.
```powerquery
Comparer.Equals(Comparer.Ordinal, "encyclopædia", "encyclopaedia")
```

Result: 
```powerquery
false
```




## Category
Comparer
