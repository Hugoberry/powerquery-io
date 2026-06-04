---
title: SparkPost.GetTable
---

# SparkPost.GetTable


SparkPost API v1 интерфейсінен қолжетімді көрсеткіштердің кестесін қайтарады


## Syntax

```powerquery
SparkPost.GetTable(
    DaysToAggregate as number,
    MetricColumns as text,
    NonMetricColumns as text,
    Path as text
) as table
```


## Remarks

Бұл функцияны SparkPost API v1 нақты "Көрсеткіштер" соңғы нүктесінен деректерді шығарып алу үшін пайдалануға болады. Бұл кестелерді жаңартқанда немесе бұл қосқыш көмегімен SparkPost API шақырғанда SparkPost API қатаң API көрсеткішінің шегіне ие болатынын ескеріңіз. SparkPost серверінен қайтарылған 429 күй кодын көрсеңіз, бұл көрсеткіш шегіне жеткеніңізді білдіреді және қосымша шақырулар үшін күте тұруыңыз қажет болады. Күндер саны параметрі үшін мәнді таңдағанда API тек 6 айлық деректерді сақтайтынын ескеріңіз.


## Examples

### Example #1
Өткен үш күнде біріктірілген барлық campaign\_ids үшін count\_sent және count\_rejected жіберілу көрсеткіштерін шығарып алады.
```powerquery
Source = SparkPost.GetTable(3, "count_sent,count_rejected", "campaign_id", "metrics/deliverability/campaign")
```

Result: 
```powerquery
кесте
```



