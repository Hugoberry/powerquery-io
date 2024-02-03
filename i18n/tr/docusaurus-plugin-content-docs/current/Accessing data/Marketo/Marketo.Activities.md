---
title: Marketo.Activities
---

# Marketo.Activities


## Description

Müşteri adaylarına ilişkin etkinliklerin yer aldığı bir tablo döndürür.


## Syntax

```powerquery
Marketo.Activities(
    url as text,
    startTime as date,
    activityIds as list
) as table
```


## Details

<code>url</code>/rest/v1/activities.json üzerinde yer alan Marketo REST API uç noktasına çağrıda bulunur. <code>activityIds</code> listesinde <code>startTime</code> itibarıyla gerçekleştirilen tüm etkinlikler döndürülür.


## Examples

### Example #1 
1 Kasım 2015 tarihinden itibaren gerçekleşen &#34;Web Sayfası Ziyareti&#34; etkinliklerine ilişkin bir tablo çeker
```powerquery
Marketo.Activities("https://100-AAA-999.mktorest.com/rest", #date(2015,11,1), {1})
```

Result: 
```powerquery
1 Kasım'dan itibaren gerçekleşen "Web Sayfası Ziyareti" etkinliklerine ilişkin ayrıntılı bilgilerin bulunduğu bir tablo
```



