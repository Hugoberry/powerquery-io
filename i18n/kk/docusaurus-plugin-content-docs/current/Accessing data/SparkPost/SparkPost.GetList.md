---
title: SparkPost.GetList
---

# SparkPost.GetList



## Syntax

```powerquery
SparkPost.GetList(
    path as text
) as table
```


## Details

Бұл функцияны SparkPost API v1 ұсынған "Тізімдер" соңғы нүктелерінің кез келгенін шақыру үшін пайдалануға болады. Бұл функция көмегімен SparkPost API шақырғанда SparkPost API қатаң API көрсеткішінің шегіне ие болатынын ескеріңіз. SparkPost серверінен қайтарылған 429 күй кодын көрсеңіз, бұл көрсеткіш шегіне жеткеніңізді білдіреді және қосымша шақырулар үшін күте тұруыңыз қажет болады.


## Examples

### Example #1 
SparkPost API v1 &#34;Тізімдер&#34; соңғы нүктелерінің біреуінің деректерімен толтырылған бір бағаны бар кестені қайтарады (мәліметтер алу үшін SparkPost құжаттамасын қараңыз).
```powerquery
Source = SparkPost.GetList("metrics/campaigns")
```

Result: 
```powerquery
Json.Document
```



