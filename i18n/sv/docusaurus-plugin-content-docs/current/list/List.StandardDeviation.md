---
title: List.StandardDeviation
---

# List.StandardDeviation


Returnerar en sampelbaserad uppskattning av standardavvikelsen.


## Syntax

```powerquery
List.StandardDeviation(
    numbersList as list
) as number
```


## Remarks

Returnerar en sampelbaserad uppskattning av standardavvikelsen för värden i listan <code>numbersList</code>.    Om <code>numbersList</code> är en lista med tal returneras ett tal.    Ett undantag genereras för en tom lista eller en lista med objekt som inte har typen <code>number</code>.


## Examples

### Example #1 
Hitta standardavvikelsen för tal 1 till och med 5.
```powerquery
List.StandardDeviation({1..5})
```

Result: 
```powerquery
1.5811388300841898
```




## Category
List.Averages
