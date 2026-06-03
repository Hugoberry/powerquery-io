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

`Veritabanı` veritabanındaki Amazon Redshift kümesi `sunucu` üzerindeki tabloları listeleyen bir tablo döndürür. Aşağıdaki seçenekleri kontrol etmek için isteğe bağlı bir kayıt parametresi (`options`) belirtilebilir:

-   `Sağlayıcı Adı`: Bağlantı için Sağlayıcı Adı olarak kullanılacak bir metin değeri. Bu, Microsoft Kimlik Doğrulaması kullanıldığında kullanılır.
-   `Toplu Boyut`: Sunucuya yapılan tek bir çağrıda getirilen satır sayısı.


## Examples

### Example #1

```powerquery
AmazonRedshift.Database("contoso.redshift.amazonaws.com:5439", "dev")
```



