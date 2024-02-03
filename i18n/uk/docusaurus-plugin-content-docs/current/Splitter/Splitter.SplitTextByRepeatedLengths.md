---
title: Splitter.SplitTextByRepeatedLengths
---

# Splitter.SplitTextByRepeatedLengths


## Description

Повертає функцію, яка розділяє текст на список тексту після вказаної довжини повторно.


## Syntax

```powerquery
Splitter.SplitTextByRepeatedLengths(
    length as number,
    optional startAtEnd as logical
) as function
```


## Details

Повертає функцію, яка розділяє текст на список тексту після вказаної довжини повторно.


## Examples

### Example #1 
Повторне розділення вхідних даних на порції з трьох символів, починаючи з початку.
```powerquery
Splitter.SplitTextByRepeatedLengths(3)("12345678")
```

Result: 
```powerquery
{"123", "456", "78"}
```


### Example #2 
Повторне розділення вхідних даних на порції з трьох символів, починаючи з кінця.
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