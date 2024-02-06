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

<code>server</code> üzerinde bulunan Snowflake Computing <code>warehouse</code> konumundaki tabloların listelendiği bir tablo döndürür. Şu seçenekleri denetlemek için isteğe bağlı bir <code>options</code> kayıt parametresi belirtilebilir:<ul><li><code>Role</code>: Bağlantının Rol adı olarak kullanılacak metin değeri.</li><li><code>CreateNavigationProperties</code>: Döndürülen değerler üzerinde gezinti özellikleri oluşturulup oluşturulmayacağını ayarlayan bir mantıksal (true/false) değer (varsayılan true).</li><li><code>ConnectionTimeout</code> Snowflake'ten ağ yanıtlarının alınması için beklenmesi gereken süre (saniye).</li><li><code>CommandTimeout</code>: Bir sorgunun yürütülmesi için beklenmesi gereken süre (saniye).</li></ul>    


## Examples

### Example #1 
Snowflake ambarındaki tabloları listeleyin.
```powerquery
Snowflake.Databases("contoso.snowflakecomputing.com", "CONTOSO_WH")
```



