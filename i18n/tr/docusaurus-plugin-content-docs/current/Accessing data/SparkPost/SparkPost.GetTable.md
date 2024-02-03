---
title: SparkPost.GetTable
---

# SparkPost.GetTable


## Description

SparkPost API&#39;sinden (v1) ölçümlerin yer aldığı bir tablo döndürür


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

Bu işlev, SparkPost API v1'in "Metrics" uç noktasından veri almak için kullanılabilir. Bu bağlayıcıyı kullanarak bu tabloları yenilerken veya SparkPost API'sine çağrı yaparken SparkPost API'sinin kesin bir API hız sınırı olduğunu unutmayın. SparkPost sunucusundan 429 durum kodunun döndürüldüğünü görürseniz hız sınırına ulaştınız demektir ve başka çağrı yapmadan önce birkaç saniye beklemeniz gerekir. Gün sayısı parametresi için bir değer seçerken API'nin yalnızca 6 aylık veri depoladığını akılda tutun.


## Examples

### Example #1 
Tüm campaign_id&#39;lerin son üç günde toplanan count_sent ve count_rejected dağıtılabilirlik ölçümlerini alır.
```powerquery
Source = SparkPost.GetTable(3, "count_sent,count_rejected", "campaign_id", "metrics/deliverability/campaign")
```

Result: 
```powerquery
tablo
```



