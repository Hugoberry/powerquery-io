---
title: Splitter.SplitTextByPositions
---

# Splitter.SplitTextByPositions


## Description

Повертає функцію, яка розділяє текст на список тексту в кожній указаній позиції.


## Syntax

```powerquery
Splitter.SplitTextByPositions(
    positions as list,
    optional startAtEnd as logical
) as function
```


## Details

Повертає функцію, яка розділяє текст на список тексту в кожній указаній позиції.


## Examples

### Example #1 
Розділення вхідних даних у вказаних позиціях, починаючи з початку.
```powerquery
Splitter.SplitTextByPositions({0, 3, 4})("ABC|12345")
```

Result: 
```powerquery
{"ABC", "|", "12345"}
```


### Example #2 
Розділення вхідних даних у вказаних позиціях, починаючи з кінця.
```powerquery
let
    startAtEnd = true
in
    Splitter.SplitTextByPositions({0, 5}, startAtEnd)("Redmond98052")
```

Result: 
```powerquery
{"Redmond", "98052"}
```




## Category
Splitter
