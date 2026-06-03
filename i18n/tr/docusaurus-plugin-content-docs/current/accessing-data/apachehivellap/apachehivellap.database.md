---
title: ApacheHiveLLAP.Database
---

# ApacheHiveLLAP.Database


Hive LLAP'tan verileri içeri aktarın


## Syntax

```powerquery
ApacheHiveLLAP.Database(
    server as text,
    database as text,
    thriftTransport as number,
    optional options as record
) as table
```


## Remarks

Seçili `protokol` kullanılarak Hive LLAP `sunucusundaki` `veritabanı` tarafından belirtilen Hive LLAP'taki tabloların bir listesini döndürür. Bağlantı noktası numarası, isteğe bağlı olarak iki nokta üst üste ile ayrılıp bir sunucu ile belirtilebilir. Thrift Aktarım İlkesi "Standard", "HTTP" değerlerini içeren numaralanmış bir türdür. İsteğe bağlı bir `seçenekler` parametresi, şu özellikleri denetlemek için belirtilebilir:

-   `ConnectionTimeout`: Sunucuyla bağlanma girişimini bırakmadan önce ne kadar beklenmesi gerektiğini belirleyen süre. Varsayılan değer sürücüye bağlıdır.
-   `CommandTimeout`: Sunucu tarafı sorgusunun iptal edilmeden önce ne kadar süreyle çalışabileceğini denetleyen süre. Varsayılan değer sürücüye bağlıdır.

`Seçenekler` parametresi \[option1 = value1, option2 = value2...\] olarak belirtilir.


