---
title: SparkPost.GetTable
---

# SparkPost.GetTable


## Description

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


## Details

Бұл функцияны SparkPost API v1 нақты "Көрсеткіштер" соңғы нүктесінен деректерді шығарып алу үшін пайдалануға болады. Бұл кестелерді жаңартқанда немесе бұл қосқыш көмегімен SparkPost API шақырғанда SparkPost API қатаң API көрсеткішінің шегіне ие болатынын ескеріңіз. SparkPost серверінен қайтарылған 429 күй кодын көрсеңіз, бұл көрсеткіш шегіне жеткеніңізді білдіреді және қосымша шақырулар үшін күте тұруыңыз қажет болады. Күндер саны параметрі үшін мәнді таңдағанда API тек 6 айлық деректерді сақтайтынын ескеріңіз.


## Examples

### Example #1 
Өткен үш күнде біріктірілген барлық campaign_ids үшін count_sent және count_rejected жіберілу көрсеткіштерін шығарып алады. 
```powerquery
Source = SparkPost.GetTable(3, "count_sent,count_rejected", "campaign_id", "metrics/deliverability/campaign")
```

Result: 
```powerquery
кесте
```



