---
title: List.StandardDeviation
---

# List.StandardDeviation


Стандартты ауытқудың үлгіге негізделіп есептелген мәнін қайтарады.


## Syntax

```powerquery
List.StandardDeviation(
    numbersList as list
) as number
```


## Remarks

`numbersList` тізіміндегі мәндердің стандартты ауытқуының үлгіге негізделген мәнін қайтарады. Егер `numbersList` сандар тізімі болса, сан қайтарылады. Бос тізім болса немесе `number` түрінде емес элементтер тізімі болса, қате туындайды.


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
