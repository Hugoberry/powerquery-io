---
title: List.MatchesAny
---

# List.MatchesAny


Кез келген мән шарт функциясын орындаса, шын мәнін қайтарады.


## Syntax

```powerquery
List.MatchesAny(
    list as list,
    condition as function
) as logical
```


## Remarks

Тізімдегі кез келген мән шартты функцияға сәйкес келсе `true` мәнін, ал сәйкес келмесе `false` мәнін қайтарады.

-   `list`: Тексеру қажет мәндер бар тізім.
-   `condition`: Тізімдегі мәндерді тексеруге арналған шарт.


## Examples

### Example #1
\{9, 10, 11\} тізімінде 10-нан асатын сан бар-жоғын анықтаңыз.
```powerquery
List.MatchesAny({9, 10, 11}, each _  > 10)
```

Result: 
```powerquery
true
```


### Example #2
\{1, 2, 3\} тізімінде 10-нан асатын сан бар-жоғын анықтаңыз.
```powerquery
List.MatchesAny({1, 2, 3}, each _  > 10)
```

Result: 
```powerquery
false
```


### Example #3
Регистрді елемей, тізімдегі кез келген мәтіндік мәнде "cat" сөзі бар-жоғын анықтаңыз.
```powerquery
let
    Source = {"A Brown Fox", "A Loyal Dog", "A Curious Cat", "A Wild Horse", "A Rascally Rabbit"},
    Result = List.MatchesAny(Source, each Text.Contains(_, "cat", Comparer.OrdinalIgnoreCase))
in
    Result
```

Result: 
```powerquery
true
```


### Example #4
Қандай да бір күнде 2021 жыл бар-жоғын анықтаңыз.
```powerquery
let
    Source = {#date(2024, 11, 28), #date(2023, 1, 14), #date(2021, 12, 31), #date(2025, 7, 6)},
    Result = List.MatchesAny(Source, each Date.Year(_) = 2021)
in
    Result
```

Result: 
```powerquery
true
```




## Category
List.Selection
