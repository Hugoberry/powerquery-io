---
title: List.StandardDeviation
---

# List.StandardDeviation


## Description

Стандартты ауытқудың үлгіге негізделіп есептелген мәнін қайтарады.


## Syntax

```powerquery
List.StandardDeviation(
    numbersList as list
) as number
```


## Details

<code>numbersList</code> тізіміндегі мәндердің стандартты ауытқуының үлгіге негізделген мәнін қайтарады.    Егер <code>numbersList</code> сандар тізімі болса, сан қайтарылады.    Бос тізім болса немесе <code>number</code> түрінде емес элементтер тізімі болса, ерекшелік беріледі.


## Examples

### Example #1 
1 мен 5 арасындағы сандардың стандартты ауытқуын анықтау.
```powerquery
List.StandardDeviation({1..5})
```

Result: 
```powerquery
1.5811388300841898
```




## Category
List.Averages
