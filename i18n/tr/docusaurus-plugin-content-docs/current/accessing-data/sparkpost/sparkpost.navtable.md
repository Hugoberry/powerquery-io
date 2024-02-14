---
title: SparkPost.NavTable
---

# SparkPost.NavTable



## Syntax

```powerquery
SparkPost.NavTable(
    DaysToAggregate as number
) as table
```


## Remarks

Kullanıcı tarafından belirtilen sayıda gün için toplanan verilerle SparkPost bağlayıcısının kullanıma açtığı yerleşik tabloları al. Bu tabloları yenilerken veya bu bağlayıcıyı kullanarak SparkPost API'sine çağrı yaparken SparkPost API'sinin kesin bir API hız sınırı olduğunu unutmayın. SparkPost sunucusundan 429 durum kodunun döndürüldüğünü görürseniz hız sınırına ulaştınız demektir ve başka çağrı yapmadan birkaç saniye beklemeniz gerekir. Gün sayısı parametresi için bir değer seçerken API'nin yalnızca 6 aylık veri depoladığını akılda tutun.


