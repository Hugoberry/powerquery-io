---
title: Splitter.SplitTextByRepeatedLengths
---

# Splitter.SplitTextByRepeatedLengths


## Description

Retorna uma função que divide o texto em uma lista de texto após o comprimento especificado repetidamente.


## Syntax

```powerquery
Splitter.SplitTextByRepeatedLengths(
    length as number,
    optional startAtEnd as logical
) as function
```


## Details

Retorna uma função que divide o texto em uma lista de texto após o comprimento especificado repetidamente.


## Examples

### Example #1 
Divida repetidamente a entrada em partes de três caracteres, começando do início da entrada.
```powerquery
Splitter.SplitTextByRepeatedLengths(3)("12345678")
```

Result: 
```powerquery
{"123", "456", "78"}
```


### Example #2 
Divida repetidamente a entrada em partes de três caracteres, começando do final da entrada.
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
