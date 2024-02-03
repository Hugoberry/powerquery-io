---
title: Splitter.SplitTextByRanges
---

# Splitter.SplitTextByRanges


## Description

Повертає функцію, яка розділяє текст на список тексту відповідно до вказаних зсувів і довжин.


## Syntax

```powerquery
Splitter.SplitTextByRanges(
    ranges as list,
    optional startAtEnd as logical
) as function
```


## Details

Повертає функцію, яка розділяє текст на список рядків відповідно до вказаних зсувів і довжин. Довжина null указує, що має бути долучено також і решту вхідних даних.


## Examples

### Example #1 
Розділення вхідних даних за вказаними парами позиції й довжини, починаючи з початку. Зверніть увагу, що діапазони в цьому прикладі перекриваються.
```powerquery
Splitter.SplitTextByRanges({{0, 4}, {2, 10}})("codelimiter")
```

Result: 
```powerquery
{"code", "delimiter"}
```


### Example #2 
Розділення вхідних даних за вказаними парами позиції й довжини, починаючи з кінця.
```powerquery
let
    startAtEnd = true
in
    Splitter.SplitTextByRanges({{0, 5}, {6, 2}}, startAtEnd)("RedmondWA?98052")
```

Result: 
```powerquery
{"WA", "98052"}
```


### Example #3 
Виділити з вхідних даних поштовий індекс із фіксованою довжиною, а після нього назву міста зі змінною довжиною.
```powerquery
Splitter.SplitTextByRanges({{0, 5}, {5, null}})("98052Redmond")
```

Result: 
```powerquery
{"98052", "Redmond"}
```




## Category
Splitter
