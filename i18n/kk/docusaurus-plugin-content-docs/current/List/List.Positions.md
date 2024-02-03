---
title: List.Positions
---

# List.Positions


## Description

Енгізбе үшін ауытқулардың тізімін қайтарады.


## Syntax

```powerquery
List.Positions(
    list as list
) as list
```


## Details

<code>list</code> кіріс тізімі үшін ауытқулар тізімін қайтарады.    Тізімді өзгерту үшін List.Transform функциясын қайтарғанда, орындардың тізімін пайдаланып орынға түрлендіру қатынасын беруге болады.


## Examples

### Example #1 
\{1, 2, 3, 4, null, 5} тізіміндегі мәндердің ауытқуларын анықтау.
```powerquery
List.Positions({1, 2, 3, 4, null, 5})
```

Result: 
```powerquery
{0, 1, 2, 3, 4, 5}
```




## Category
List.Selection
