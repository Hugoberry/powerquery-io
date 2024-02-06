---
title: AzureHiveLLAP.Database
---

# AzureHiveLLAP.Database


HDInsight Interactive Query&#39;den verileri içeri aktarın


## Syntax

```powerquery
AzureHiveLLAP.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

HDInsight Interactive Query <code>sunucusundaki</code> <code>veritabanı</code> tarafından belirtilen HDInsight Interactive Query'deki tabloların bir listesini döndürür. Bağlantı noktası numarası, iki nokta üst üste karakteri ile ayrılıp isteğe bağlı olarak sunucu ile birlikte belirtilebilir. İsteğe bağlı bir <code>seçenekler</code> parametresi şu özellikleri denetlemek için belirtilebilir:<ul>        <li><code>ConnectionTimeout</code>: Sunucuyla bağlantı kurmaya çalışmayı bırakmadan önce ne kadar beklenmesi gerektiğini denetleyen süre. Varsayılan değer sürücüye bağlıdır.</li>        <li><code>CommandTimeout</code>: Sunucu tarafı sorgusunun iptal edilmeden önce ne kadar süreyle çalışabileceğini denetleyen süre. Varsayılan değer sürücüye bağlıdır.</li></ul><code>Seçenekler</code> parametresi [seçenek1 = değer1, seçenek2 = değer2...] olarak belirtilir.


