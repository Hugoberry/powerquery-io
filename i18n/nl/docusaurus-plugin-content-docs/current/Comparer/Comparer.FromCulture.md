---
title: Comparer.FromCulture
---

# Comparer.FromCulture


Hiermee wordt een vergelijkingsfunctie geretourneerd op basis van de opgegeven cultuur en hoofdlettergevoeligheid.


## Syntax

```powerquery
Comparer.FromCulture(
    culture as text,
    optional ignoreCase as logical
) as function
```


## Remarks

Hiermee wordt een vergelijkingsfunctie geretourneerd die de <code>culture</code> en de hoofdlettergevoeligheid gebruikt die is opgegeven door <code>ignoreCase</code> om vergelijkingen uit te voeren.<br />      <br />      Een vergelijkingsfunctie accepteert twee argumenten en retourneert -1, 0 of 1 op basis van of de eerste waarde kleiner is dan, gelijk is aan of groter is dan de tweede.<br />      <br />      De standaardwaarde voor <code>ignoreCase</code> is false. De <code>culture</code> moet een van de landinstellingen zijn die worden ondersteund door het .NET-framework (bijvoorbeeld: nl-NL).    


## Examples

### Example #1 
Vergelijk a en A aan de hand van de landinstelling en-US om te bepalen of de waarden gelijk zijn.
```powerquery
Comparer.FromCulture("en-US")("a", "A")
```

Result: 
```powerquery
-1
```


### Example #2 
Vergelijk a en A aan de hand van de landinstelling en-US waarbij de hoofdlettergevoeligheid wordt genegeerd, om te bepalen of de waarden gelijk zijn.
```powerquery
Comparer.FromCulture("en-US", true)("a", "A")
```

Result: 
```powerquery
0
```




## Category
Comparer
