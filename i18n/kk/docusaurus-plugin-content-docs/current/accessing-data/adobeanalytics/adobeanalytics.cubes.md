---
title: AdobeAnalytics.Cubes
---

# AdobeAnalytics.Cubes


Adobe Analytics қызметінде есептер жиынтықтарын қайтарады.


## Syntax

```powerquery
AdobeAnalytics.Cubes(
    optional options as record
) as table
```


## Remarks

Adobe Analytics қызметінен көп өлшемді жиынтықтар кестесін қайтарады. Келесі параметрлерді басқару үшін `options` қосымша жазба параметрін көрсетуге болады:

-   `HierarchicalNavigation` : Логикалық мән (true/false), ол кестелерді олардың схема атаулары бойынша топтап көру немесе көрмеу керектігін анықтайды (әдепкі мән - false).
-   `MaxRetryCount` : Сұрау нәтижесі үшін сауалнама кезіндегі орындалатын қайталаулар саны. Әдепкі мәні 120 болады.
-   `RetryInterval` : Қайталау әрекеттері арасындағы уақыт мерзімі. Әдепкі мәні 1 секунд болады.
-   `Implementation` : Adobe Analytics API нұсқасын көрсетеді. Жарамды мәндер: "2.0". Әдепкі бойынша API 1.4 нұсқасын пайдаланады.



## Category
Accessing data
