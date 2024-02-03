---
title: Function.Invoke
---

# Function.Invoke


## Description

Käynnistää annetun funktion


## Syntax

```powerquery
Function.Invoke(
    function as function,
    args as list
) as any
```


## Details

Käynnistää annetun funktion käyttäen määritettyä argumenttiluetteloa ja palauttaa tuloksen.


## Examples

### Example #1 
Käynnistää funktion Record.FieldNames käyttäen yhtä argumenttia [A=1,B=2]
```powerquery
Function.Invoke(Record.FieldNames, {[A = 1, B = 2]})
```

Result: 
```powerquery
{"A", "B"}
```




## Category
Function
