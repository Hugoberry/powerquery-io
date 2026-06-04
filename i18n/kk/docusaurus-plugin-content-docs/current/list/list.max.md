---
title: List.Max
---

# List.Max


Ең үлкен мәнді немесе бос тізім үшін әдепкі мәнді қайтарады.


## Syntax

```powerquery
List.Max(
    list as list,
    optional default as any,
    optional comparisonCriteria as any,
    optional includeNulls as logical
) as any
```


## Remarks

Тізімдегі ең үлкен элементті қайтарады немесе егер тізім бос болса, таңдалған әдепкі мәнді қайтарады.

-   `list`: Мәндер тізімі.
-   `default`: (Міндетті емес) тізім бос болған жағдайда қайтарылатын мән.
-   `comparisonCriteria`: (Міндетті емес) мәндерді салыстырмас бұрын түрлендіру үшін қолданылатын функция. Егер бұл параметр `null` болса, мәндер ешқандай түрлендірусіз салыстырылады.
-   `includeNulls`: (Міндетті емес) тізімдегі `null` мәндерін ең үлкен элементті анықтауға қосу керек пе, жоқ па, соны көрсетеді. Әдепкі мән `true`.


## Examples

### Example #1
Белгіленген тізімнен ең үлкен мәнді табыңыз.
```powerquery
List.Max({1, 4, 7, 3, -2, 5}, 1)
```

Result: 
```powerquery
7
```


### Example #2
Белгіленген тізімнен ең үлкен мәнді табады немесе егер тізім бос болса, -1 қайтарады.
```powerquery
List.Max({}, -1)
```

Result: 
```powerquery
-1
```


### Example #3
Мәтін мәндерінен құралған тізімде алфавит бойынша соңғы элементті табыңыз. Егер тізім бос болса, "none" қайтарады.
```powerquery
let
    Source = {"boy", "dog", "girl", "zebra", "cat", "mouse", "rabbit"},
    MaxText = List.Max(Source, "none")
in
    MaxText
```

Result: 
```powerquery
"zebra"
```


### Example #4
Немісше форматтағы күндерден тұратын тізімнен ең соңғы күнді табыңыз. Егер тізім бос болса, 2000 жылғы 1 қаңтарды қайтарады.
```powerquery
let
    Source = {"12.02.2024", "15.05.2025", "10.10.2021", "16.01.2025", "30.12.2022"},
    MaxDate = List.Max(Source, #date(2000, 1, 1), each Date.FromText(_, [Culture = "de-DE"]))
in
    MaxDate
```

Result: 
```powerquery
"15.05.2025"
```




## Category
List.Ordering
