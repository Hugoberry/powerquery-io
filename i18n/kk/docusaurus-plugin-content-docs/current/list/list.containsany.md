---
title: List.ContainsAny
---

# List.ContainsAny


Тізім басқа тізімдегі мәндердің кез келгенін қайда қамтитынын көрсетеді.


## Syntax

```powerquery
List.ContainsAny(
    list as list,
    values as list,
    optional equationCriteria as any
) as logical
```


## Remarks

Тізімде басқа тізімдегі мәндердің бар-жоғын көрсетеді. Егер мәндер тізімде табылса, `true`, әйтпесе `false` мәнін қайтарады.

-   `list`: Іздеуге арналған тізім.
-   `values`: Бірінші тізімде іздеуге арналған мәндер тізімі.
-   `equationCriteria`: (Міндетті емес) Екі мәннің тең екенін анықтау үшін пайдаланылатын салыстыру құралы.


## Examples

### Example #1
\{1, 2, 3, 4, 5\} тізімінде 3 және 9 бар-жоғын анықтаңыз.
```powerquery
List.ContainsAny({1, 2, 3, 4, 5}, {3, 9})
```

Result: 
```powerquery
true
```


### Example #2
\{1, 2, 3, 4, 5\} тізімінде 6 және 7 сандары бар-жоғын анықтаңыз.
```powerquery
List.ContainsAny({1, 2, 3, 4, 5}, {6, 7})
```

Result: 
```powerquery
false
```


### Example #3
Регистрді ескермей, тізімде жылқы пен үкі бар-жоғын анықтаңыз.
```powerquery
List.ContainsAny({"dog", "cat", "racoon", "horse", "rabbit"}, {"Horse", "OWL"}, Comparer.OrdinalIgnoreCase)
```

Result: 
```powerquery
true
```


### Example #4
Тізімде 2022 жылғы 8 сәуір немесе 2021 жылғы 12 қаңтар күні бар-жоғын анықтаңыз.
```powerquery
let
    Source = {#date(2024, 2, 23), #date(2023, 12, 2), #date(2022, 4, 8), #date(2021, 7, 6)},
    ContainsDates = List.ContainsAny(Source, {Date.From("Apr 8, 2022"), Date.From("Jan 11, 2021")})
in
    ContainsDates
```

Result: 
```powerquery
true
```




## Category
List.Membership functions
