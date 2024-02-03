---
title: ApacheHiveLLAP.Database
---

# ApacheHiveLLAP.Database


## Description

Hive LLAP&#39;tan verileri içeri aktarın


## Syntax

```powerquery
ApacheHiveLLAP.Database(
    server as text,
    database as text,
    thriftTransport as number,
    optional options as record
) as table
```


## Details

Seçili <code>protokol</code> kullanılarak Hive LLAP <code>sunucusundaki</code> <code>veritabanı</code> tarafından belirtilen Hive LLAP'taki tabloların bir listesini döndürür. Bağlantı noktası numarası, isteğe bağlı olarak iki nokta üst üste ile ayrılıp bir sunucu ile belirtilebilir. Thrift Aktarım İlkesi "Standard", "HTTP" değerlerini içeren numaralanmış bir türdür. İsteğe bağlı bir <code>seçenekler</code> parametresi, şu özellikleri denetlemek için belirtilebilir:<ul>        <li><code>ConnectionTimeout</code>: Sunucuyla bağlanma girişimini bırakmadan önce ne kadar beklenmesi gerektiğini belirleyen süre. Varsayılan değer sürücüye bağlıdır.</li>        <li><code>CommandTimeout</code>: Sunucu tarafı sorgusunun iptal edilmeden önce ne kadar süreyle çalışabileceğini denetleyen süre. Varsayılan değer sürücüye bağlıdır.</li></ul><code>Seçenekler</code> parametresi [option1 = value1, option2 = value2...] olarak belirtilir.


