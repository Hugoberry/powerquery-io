---
title: Splitter.SplitTextByRepeatedLengths
---

# Splitter.SplitTextByRepeatedLengths


## Description

Retorna una funció que divideix el text en una llista de text després de la longitud especificada repetidament.


## Syntax

```powerquery
Splitter.SplitTextByRepeatedLengths(
    length as number,
    optional startAtEnd as logical
) as function
```


## Details

Retorna una funció que divideix el text en una llista de text després de la longitud especificada repetidament.


## Examples

### Example #1 
Divideix repetidament l&#39;entrada en fragments de tres caràcters, començant pel principi de l&#39;entrada.
```powerquery
Splitter.SplitTextByRepeatedLengths(3)("12345678")
```

Result: 
```powerquery
{"123", "456", "78"}
```


### Example #2 
Divideix repetidament l&#39;entrada en fragments de tres caràcters, començant pel final de l&#39;entrada.
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
