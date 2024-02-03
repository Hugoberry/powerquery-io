---
title: Splitter.SplitTextByRepeatedLengths
---

# Splitter.SplitTextByRepeatedLengths


## Description

Devuelve una función que divide el texto en una lista de texto repetidamente después de la longitud especificada.


## Syntax

```powerquery
Splitter.SplitTextByRepeatedLengths(
    length as number,
    optional startAtEnd as logical
) as function
```


## Details

Devuelve una función que divide el texto en una lista de texto repetidamente después de la longitud especificada.


## Examples

### Example #1 
Divida la entrada repetidamente en fragmentos de tres caracteres, empezando desde el principio de la entrada.
```powerquery
Splitter.SplitTextByRepeatedLengths(3)("12345678")
```

Result: 
```powerquery
{"123", "456", "78"}
```


### Example #2 
Divida la entrada repetidamente en fragmentos de tres caracteres, empezando desde el final de la entrada.
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
