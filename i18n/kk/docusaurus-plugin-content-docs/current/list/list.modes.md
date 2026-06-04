---
title: List.Modes
---

# List.Modes


Тізімдегі ең жиі кездесетін мәндердің тізімін қайтарады.


## Syntax

```powerquery
List.Modes(
    list as list,
    optional equationCriteria as any
) as list
```


## Remarks

`list` ішінде ең жиі болатын элементтерді қайтарады. Егер тізім бос болса, қате пайда болады. Максималды жиілігі бірдей бірнеше элемент көрінсе, олардың барлығы қайтарылады. Тең болу сынағын басқару үшін міндетті емес салыстыру шарттары мәнін (`equationCriteria`) көрсетуге болады.


## Examples

### Example #1
`{"A", 1, 2, 3, 3, 4, 5, 5}` тізімінде ең жиі кездесетін элементтерді анықтау.
```powerquery
List.Modes({"A", 1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
{3, 5}
```




## Category
List.Averages
