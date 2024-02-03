---
title: Splitter.SplitTextByLengths
---

# Splitter.SplitTextByLengths


## Description

Retorna una funció que divideix el text en una llista de text per cada longitud especificada.


## Syntax

```powerquery
Splitter.SplitTextByLengths(
    lengths as list,
    optional startAtEnd as logical
) as function
```


## Details

Retorna una funció que divideix el text en una llista de text per cada longitud especificada.


## Examples

### Example #1 
Divideix l&#39;entrada en els dos primers caràcters seguits dels tres següents, començant pel principi de l&#39;entrada.
```powerquery
Splitter.SplitTextByLengths({2, 3})("AB123")
```

Result: 
```powerquery
{"AB", "123"}
```


### Example #2 
Divideix l&#39;entrada en els tres primers caràcters seguits dels dos següents, començant pel final de l&#39;entrada.
```powerquery
let
    startAtEnd = true
in
    Splitter.SplitTextByLengths({5, 2}, startAtEnd)("RedmondWA98052")
```

Result: 
```powerquery
{"WA", "98052"}
```




## Category
Splitter
