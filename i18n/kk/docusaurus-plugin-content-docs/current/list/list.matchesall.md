---
title: List.MatchesAll
---

# List.MatchesAll


Тізімдегі барлық мәндер шарт функциясын орындаса, шын мәнін қайтарады.


## Syntax

```powerquery
List.MatchesAll(
    list as list,
    condition as function
) as logical
```


## Remarks

Тізімдегі барлық мән шартты функцияға сәйкес келсе `true` мәнін, ал сәйкес келмесе `false` мәнін қайтарады.

-   `list`: Тексеру қажет мәндер бар тізім.
-   `condition`: Тізімдегі мәндерді тексеруге арналған шарт.


## Examples

### Example #1
\{11, 12, 13\} тізіміндегі барлық мәндердің 10-нан үлкен болуын анықтау.
```powerquery
List.MatchesAll({11, 12, 13}, each _  > 10)
```

Result: 
```powerquery
true
```


### Example #2
\{1, 2, 3\} тізіміндегі барлық мәндердің 10-нан үлкен болуын анықтау.
```powerquery
List.MatchesAll({1, 2, 3}, each _  > 10)
```

Result: 
```powerquery
false
```


### Example #3
Регистрді елемей, тізімдегі барлық мәтіндік мәнде "anna" сөзі бар-жоғын анықтаңыз.
```powerquery
let
    Source = {"Savannah", "Annabelle", "Annals", "wannabe", "MANNA"},
    Result = List.MatchesAll(Source, each Text.Contains(_, "anna", Comparer.OrdinalIgnoreCase))
in
    Result
```

Result: 
```powerquery
true
```


### Example #4
Барлық күнде 2021 жыл бар-жоғын анықтаңыз.
```powerquery
let
    Source = {#date(2021, 11, 28), #date(2021, 1, 14), #date(2021, 12, 31), #date(2021, 7, 6)},
    Result = List.MatchesAll(Source, each Date.Year(_) = 2021)
in
    Result
```

Result: 
```powerquery
true
```




## Category
List.Selection
