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

Bu işlev, SparkPost API v1 "Lists" uç noktalarından herhangi birini çağırmak için kullanılabilir. Bu işlevi kullanarak SparkPost API'sine çağrı yaparken SparkPost API'sinin kesin bir API hız sınırı olduğunu unutmayın. SparkPost sunucusundan 429 durum kodunun döndürüldüğünü görürseniz hız sınırına ulaştınız demektir ve başka çağrı yapmadan önce birkaç saniye beklemeniz gerekir.


## Examples

### Example #1 
SparkPost API v1 &#34;Lists&#34; uç noktalarından birinin verileriyle doldurulmuş tek bir sütunu olan bir tablo döndürür. (Ayrıntılar için SparkPost belgelerine bakın.)
```powerquery
Source = SparkPost.GetList("metrics/campaigns")
```

Result: 
```powerquery
Json.Document
```



