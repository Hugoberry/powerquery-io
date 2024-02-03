---
title: AdobeAnalytics.Cubes
---

# AdobeAnalytics.Cubes


## Description

Adobe Analytics қызметінде есептер жиынтықтарын қайтарады.


## Syntax

```powerquery
AdobeAnalytics.Cubes(
    optional options as record
) as table
```


## Details

Adobe Analytics қызметінен көп өлшемді жиынтықтар кестесін қайтарады. Келесі параметрлерді басқару үшін <code>options</code> қосымша жазба параметрін көрсетуге болады:    <ul><li><code>HierarchicalNavigation</code> : Логикалық мән (true/false), ол кестелерді олардың схема атаулары бойынша топтап көру немесе көрмеу керектігін анықтайды (әдепкі мән - false).</li><li><code>MaxRetryCount</code> : Сұрау нәтижесі үшін сауалнама кезіндегі орындалатын қайталаулар саны. Әдепкі мәні 120 болады.</li><li><code>RetryInterval</code> : Қайталау әрекеттері арасындағы уақыт мерзімі. Әдепкі мәні 1 секунд болады.</li><li><code>Implementation</code> : Adobe Analytics API нұсқасын көрсетеді. Жарамды мәндер: &quot;2.0&quot;. Әдепкі бойынша API 1.4 нұсқасын пайдаланады.</li></ul>    



## Category
Accessing data
