---
title: Splitter.SplitTextByRepeatedLengths
---

# Splitter.SplitTextByRepeatedLengths


## Description

Retourneert een functie die bij de opgegeven lengte tekst steeds opnieuw splitst in een lijst met tekst.


## Syntax

```powerquery
Splitter.SplitTextByRepeatedLengths(
    length as number,
    optional startAtEnd as logical
) as function
```


## Details

Retourneert een functie die bij de opgegeven lengte tekst steeds opnieuw splitst in een lijst met tekst.


## Examples

### Example #1 
De invoer herhaaldelijk splitsen in segmenten van drie tekens, te beginnen bij het begin van de invoer.
```powerquery
Splitter.SplitTextByRepeatedLengths(3)("12345678")
```

Result: 
```powerquery
{"123", "456", "78"}
```


### Example #2 
De invoer herhaaldelijk splitsen in segmenten van drie tekens, te beginnen bij het einde van de invoer.
```powerquery
let
    startAtEnd = true
in
    Splitter.SplitTextByRepeatedLengths(3, startAtEnd)("87654321")
```

Result: 
```powerquery
{"87", "654", "321"}
```




## Category
Splitter
