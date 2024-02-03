---
title: Combiner.CombineTextByRanges
---

# Combiner.CombineTextByRanges


## Description

Retourneert een functie die een lijst met tekst combineert met behulp van de opgegeven posities en lengten.


## Syntax

```powerquery
Combiner.CombineTextByRanges(
    ranges as list,
    optional template as text
) as function
```


## Details

Retourneert een functie die een lijst met tekstwaarden combineert tot één tekstwaarde met behulp van de opgegeven uitvoerposities en lengten. Een null-lengte geeft aan dat de volledige tekstwaarde moet worden opgenomen.


## Examples

### Example #1 
Een lijst met tekstwaarden combineren met de opgegeven uitvoerposities en -lengten.
```powerquery
Combiner.CombineTextByRanges({{0, 1}, {3, 2}, {6, null}})({"abc", "def", "ghijkl"})
```

Result: 
```powerquery
"a  de ghijkl"
```




## Category
Combiner
