---
title: List.Mode
---

# List.Mode


Тізімдегі ең жиі кездесетін мәнді қайтарады.


## Syntax

```powerquery
List.Mode(
    list as list,
    optional equationCriteria as any
) as any
```


## Remarks

`list` ішінде ең жиі болатын элементті қайтарады. Егер тізім бос болса, қате пайда болады. Максималды жиілігі бірдей бірнеше элемент көрінсе, соңғысы таңдалады. Тең болу сынағын басқару үшін міндетті емес салыстыру шарттары мәнін (`equationCriteria`) көрсетуге болады.


## Examples

### Example #1
`{"A", 1, 2, 3, 3, 4, 5}` тізімінде ең жиі кездесетін элементті анықтау.
```powerquery
List.Mode({"A", 1, 2, 3, 3, 4, 5})
```

Result: 
```powerquery
3
```


### Example #2
`{"A", 1, 2, 3, 3, 4, 5, 5}` тізімінде ең жиі кездесетін элементті анықтау.
```powerquery
List.Mode({"A", 1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
5
```




## Category
List.Averages
