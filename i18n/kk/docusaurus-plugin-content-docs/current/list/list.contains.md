---
title: List.Contains
---

# List.Contains


Тізімнің мәнді қамтитынын көрсетеді.


## Syntax

```powerquery
List.Contains(
    list as list,
    value as any,
    optional equationCriteria as any
) as logical
```


## Remarks

Тізімнің көрсетілген мәнді қамтитынын көрсетеді. Егер мән тізімде табылса, `true`, әйтпесе `false` мәнін қайтарады.

-   `list`: Іздеуге арналған тізім.
-   `value`: Тізімде іздеуге арналған мән.
-   `equationCriteria`: (Міндетті емес) Екі мәннің тең екенін анықтау үшін пайдаланылатын салыстыру құралы.


## Examples

### Example #1
\{1, 2, 3, 4, 5\} тізімінде 3 бар-жоғын анықтаңыз.
```powerquery
List.Contains({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
true
```


### Example #2
\{1, 2, 3, 4, 5\} тізімінде 6 бар-жоғын анықтаңыз.
```powerquery
List.Contains({1, 2, 3, 4, 5}, 6)
```

Result: 
```powerquery
false
```


### Example #3
Регистрді елемей, тізімде "rhubarb" бар-жоғын анықтаңыз.
```powerquery
List.Contains({"Pears", "Bananas", "Rhubarb", "Peaches"},
    "rhubarb",
    Comparer.OrdinalIgnoreCase
)
```

Result: 
```powerquery
true
```


### Example #4
Тізімде 2022 жылы 8 сәуір күні бар-жоғын анықтаңыз.
```powerquery
let
    Source = {#date(2024, 2, 23), #date(2023, 12, 2), #date(2022, 4, 8), #date(2021, 7, 6)},
    ContainsDate = List.Contains(Source, Date.From("4/8/2022"))
in
    ContainsDate
```

Result: 
```powerquery
true
```




## Category
List.Membership functions
