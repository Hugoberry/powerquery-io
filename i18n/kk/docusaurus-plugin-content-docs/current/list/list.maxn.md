---
title: List.MaxN
---

# List.MaxN


Тізімдегі ең үлкен мәнді(дерді) қайтарады. Қайтарылатын мәндердің саны немесе сүзгі шарты көрсетілуі тиіс.


## Syntax

```powerquery
List.MaxN(
    list as list,
    countOrCondition as any,
    optional comparisonCriteria as any,
    optional includeNulls as logical
) as list
```


## Remarks

Белгіленген тізімнен ең үлкен мән(дерді) қайтарады. Жолдар сұрыпталғаннан кейін, нәтижені одан әрі сүзу үшін қосымша параметрлерді көрсетуге болады.

-   `list`: Мәндер тізімі.
-   `countOrCondition`: Қайтарылатын мәндердің санын немесе сүзгі шартын көрсетеді. Егер сан көрсетілсе, өсу ретімен `countOrCondition` элементке дейінгі тізім қайтарылады. Егер шарт көрсетілсе, қайтарылатын тізімге сол шартқа сәйкес келетін барлық элемент кіреді.
-   `comparisonCriteria`: (Міндетті емес) мәндерді салыстырмас бұрын түрлендіру үшін қолданылатын функция. Егер бұл параметр `null` болса, мәндер ешқандай түрлендірусіз салыстырылады.
-   `includeNulls`: (Міндетті емес) тізімдегі `null` мәндерін ең үлкен элементті анықтауға қосу керек пе, жоқ па, соны көрсетеді. Әдепкі мән `true`.


## Examples

### Example #1
Белгіленген тізімнен ең үлкен 5 мәнді табыңыз.
```powerquery
List.MaxN({3, 4, 5, -1, 7, 8, 2}, 5)
```

Result: 
```powerquery
{8, 7, 5, 4, 3}
```


### Example #2
3-тен көп әріптен тұратын сөздерді табады.
```powerquery
List.MaxN(
    {"boy", "dog", "pony", "cat", "rabbit", "bat"},
    each Text.Length(_) > 3
)
```

Result: 
```powerquery
{"rabbit", "pony"}
```


### Example #3
Немісше форматтағы күндерден тұратын тізімнен ең соңғы үш күнді табыңыз.
```powerquery
let
    Source = {"12.02.2024", "15.05.2025", "10.10.2021", "16.01.2025", "30.12.2022"},
    MaxDate = List.MaxN(Source, 3, each Date.FromText(_, [Culture = "de-DE"]))
in
    MaxDate
```

Result: 
```powerquery
{
    "15.05.2025",
    "16.01.2025",
    "12.02.2024"
}
```




## Category
List.Ordering
