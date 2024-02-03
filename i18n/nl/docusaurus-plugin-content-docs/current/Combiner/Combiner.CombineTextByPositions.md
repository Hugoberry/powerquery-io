---
title: Combiner.CombineTextByPositions
---

# Combiner.CombineTextByPositions


## Description

Retourneert een functie die een lijst met tekst combineert met behulp van de opgegeven uitvoerposities.


## Syntax

```powerquery
Combiner.CombineTextByPositions(
    positions as list,
    optional template as text
) as function
```


## Details

Retourneert een functie die een lijst met tekstwaarden combineert tot één tekstwaarde met behulp van de opgegeven uitvoerposities.


## Examples

### Example #1 
Een lijst met tekstwaarden combineren door deze op de opgegeven posities in de uitvoer te plaatsen.
```powerquery
Combiner.CombineTextByPositions({0, 5, 10})({"abc", "def", "ghi"})
```

Result: 
```powerquery
"abc  def  ghi"
```




## Category
Combiner
