---
title: Splitter.SplitTextByLengths
---

# Splitter.SplitTextByLengths


## Description

Повертає функцію, яка розділяє текст на список тексту в кожному вказаному роздільнику на кожну вказану довжину.


## Syntax

```powerquery
Splitter.SplitTextByLengths(
    lengths as list,
    optional startAtEnd as logical
) as function
```


## Details

Повертає функцію, яка розділяє текст на список тексту в кожному вказаному роздільнику на кожну вказану довжину.


## Examples

### Example #1 
Розділення вхідних даних на перші два символи й наступні три, починаючи з початку.
```powerquery
Splitter.SplitTextByLengths({2, 3})("AB123")
```

Result: 
```powerquery
{"AB", "123"}
```


### Example #2 
Розділення вхідних даних на перші три символи й наступні два, починаючи з кінця.
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
