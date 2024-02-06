---
title: AmazonRedshift.Database
---

# AmazonRedshift.Database


Amazon Redshift veritabanından veri içeri aktarın.


## Syntax

```powerquery
AmazonRedshift.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

<code>Veritabanı</code> veritabanındaki Amazon Redshift kümesi <code>sunucu</code> üzerindeki tabloları listeleyen bir tablo döndürür. Şu seçenekleri kontrol etmek için isteğe bağlı bir kayıt parametresi, <code>seçenekler</code>, belirtilebilir:<ul><li><code>Sağlayıcı Adı</code>: Bağlantı için Sağlayıcı Adı olarak kullanılacak bir metin değeri. Bu, Microsoft Kimlik Doğrulaması kullanılırken kullanılır.</li><li><code>Toplu İş Boyutu</code>: Sunucuya yapılan tek bir çağrıda getirilen satır sayısı.</li></ul>  


## Examples

### Example #1 

```powerquery
AmazonRedshift.Database("contoso.redshift.amazonaws.com:5439", "dev")
```



