---
title: List.ContainsAll
---

# List.ContainsAll


Тізім басқа тізімдегі барлық мәндерді қайда қамтитынын көрсетеді.


## Syntax

```powerquery
List.ContainsAll(
    list as list,
    values as list,
    optional equationCriteria as any
) as logical
```


## Remarks

Тізімде басқа тізімдегі барлық мәндер бар-жоғын көрсетеді. Егер барлық мәндер тізімде табылса, `true`, әйтпесе `false` мәнін қайтарады.

-   `list`: Іздеуге арналған тізім.
-   `values`: Бірінші тізімде іздеуге арналған мәндер тізімі.
-   `equationCriteria`: (Міндетті емес) Екі мәннің тең екенін анықтау үшін пайдаланылатын салыстыру құралы.


## Examples

### Example #1
\{1, 2, 3, 4, 5\} тізімінде 3 және 4 сандары бар-жоғын анықтаңыз.
```powerquery
List.ContainsAll({1, 2, 3, 4, 5}, {3, 4})
```

Result: 
```powerquery
true
```


### Example #2
\{1, 2, 3, 4, 5\} тізімінде 5 және 6 сандары бар-жоғын анықтаңыз.
```powerquery
List.ContainsAll({1, 2, 3, 4, 5}, {5, 6})
```

Result: 
```powerquery
false
```


### Example #3
Регистрді ескермей, тізімде ит пен жылқы бар-жоғын анықтаңыз.
```powerquery
List.ContainsAll({"dog", "cat", "racoon", "horse", "rabbit"}, {"DOG", "Horse"}, Comparer.OrdinalIgnoreCase)
```

Result: 
```powerquery
true
```


### Example #4
Тізімде 2022 жылғы 8 сәуір және 2021 жылғы 6 шілде күндері бар-жоғын анықтаңыз.
```powerquery
let
    Source = {#date(2024, 2, 23), #date(2023, 12, 2), #date(2022, 4, 8), #date(2021, 7, 6)},
    ContainsDates = List.ContainsAll(Source, {#date(2022, 4, 8), #date(2021, 7, 6)})
in
    ContainsDates
```

Result: 
```powerquery
true
```




## Category
List.Membership functions
