---
title: Splitter.SplitTextByRepeatedLengths
---

# Splitter.SplitTextByRepeatedLengths


## Description

Devolve unha función que divide texto nunha lista de texto despois da lonxitude especificada de maneira repetida.


## Syntax

```powerquery
Splitter.SplitTextByRepeatedLengths(
    length as number,
    optional startAtEnd as logical
) as function
```


## Details

Devolve unha función que divide texto nunha lista de texto despois da lonxitude especificada de maneira repetida.


## Examples

### Example #1 
Divide repetidamente a entrada en anacos de tres caracteres, comezando dende o principio da entrada.
```powerquery
Splitter.SplitTextByRepeatedLengths(3)("12345678")
```

Result: 
```powerquery
{"123", "456", "78"}
```


### Example #2 
Divide repetidamente a entrada en anacos de tres caracteres, comezando dende o final da entrada.
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
