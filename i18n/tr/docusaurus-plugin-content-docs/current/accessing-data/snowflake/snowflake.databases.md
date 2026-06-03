---
title: Snowflake.Databases
---

# Snowflake.Databases


Snowflake Bilgi İşlem ambarından veri içeri aktarın.


## Syntax

```powerquery
Snowflake.Databases(
    server as text,
    warehouse as text,
    optional options as record
) as table
```


## Remarks

`server` üzerinde bulunan Snowflake Computing `warehouse` konumundaki tabloların listelendiği bir tablo döndürür. Şu seçenekleri denetlemek için isteğe bağlı bir `options` kayıt parametresi belirtilebilir:

-   `Role`: Bağlantının Rol adı olarak kullanılacak metin değeri.
-   `CreateNavigationProperties`: Döndürülen değerler üzerinde gezinti özellikleri oluşturulup oluşturulmayacağını ayarlayan bir mantıksal (true/false) değer (varsayılan true).
-   `ConnectionTimeout` Snowflake'ten ağ yanıtlarının alınması için beklenmesi gereken süre (saniye).
-   `CommandTimeout`: Bir sorgunun yürütülmesi için beklenmesi gereken süre (saniye).


## Examples

### Example #1
Snowflake ambarındaki tabloları listeleyin.
```powerquery
Snowflake.Databases("contoso.snowflakecomputing.com", "CONTOSO_WH")
```



