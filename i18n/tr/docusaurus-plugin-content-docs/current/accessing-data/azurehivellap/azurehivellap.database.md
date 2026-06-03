---
title: AzureHiveLLAP.Database
---

# AzureHiveLLAP.Database


HDInsight Interactive Query'den verileri içeri aktarın


## Syntax

```powerquery
AzureHiveLLAP.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

HDInsight Interactive Query `sunucusundaki` `veritabanı` tarafından belirtilen HDInsight Interactive Query'deki tabloların bir listesini döndürür. Bağlantı noktası numarası, iki nokta üst üste karakteri ile ayrılıp isteğe bağlı olarak sunucu ile birlikte belirtilebilir. İsteğe bağlı bir `seçenekler` parametresi şu özellikleri denetlemek için belirtilebilir:

-   `ConnectionTimeout`: Sunucuyla bağlantı kurmaya çalışmayı bırakmadan önce ne kadar beklenmesi gerektiğini denetleyen süre. Varsayılan değer sürücüye bağlıdır.
-   `CommandTimeout`: Sunucu tarafı sorgusunun iptal edilmeden önce ne kadar süreyle çalışabileceğini denetleyen süre. Varsayılan değer sürücüye bağlıdır.

`Seçenekler` parametresi \[seçenek1 = değer1, seçenek2 = değer2...\] olarak belirtilir.


