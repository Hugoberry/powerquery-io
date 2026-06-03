---
title: Marketo.Activities
---

# Marketo.Activities


Müşteri adaylarına ilişkin etkinliklerin yer aldığı bir tablo döndürür.


## Syntax

```powerquery
Marketo.Activities(
    url as text,
    startTime as date,
    activityIds as list
) as table
```


## Remarks

`url`/rest/v1/activities.json üzerinde yer alan Marketo REST API uç noktasına çağrıda bulunur. `activityIds` listesinde `startTime` itibarıyla gerçekleştirilen tüm etkinlikler döndürülür.


## Examples

### Example #1
1 Kasım 2015 tarihinden itibaren gerçekleşen "Web Sayfası Ziyareti" etkinliklerine ilişkin bir tablo çeker
```powerquery
Marketo.Activities("https://100-AAA-999.mktorest.com/rest", #date(2015,11,1), {1})
```

Result: 
```powerquery
1 Kasım'dan itibaren gerçekleşen "Web Sayfası Ziyareti" etkinliklerine ilişkin ayrıntılı bilgilerin bulunduğu bir tablo
```



