---
title: OleDb.Query
---

# OleDb.Query


Bir OLE DB veri kaynağında yerel sorgu çalıştırmanın sonuçlarını döndürür.


## Syntax

```powerquery
OleDb.Query(
    connectionString as any,
    query as text,
    optional options as record
) as table
```


## Remarks

OLE DB kullanarak `connectionString` bağlantı dizesi ile `query` çalıştırmanın sonucunu döndürür. `connectionString` metin veya özellik değeri çiftlerinin kaydı olabilir. Özellik değerleri, metin veya sayı olabilir. Ek özellikler belirtmek için isteğe bağlı `options` kayıt parametresi sağlanabilir. Kayıt şu alanları içerebilir:

-   `ConnectionTimeout` : Sunucuyla bağlantı kurma denemesinden vazgeçilmeden önce ne kadar bekleneceğini denetleyen süre. Varsayılan değer sürücüye bağlıdır.
-   `CommandTimeout` : Sunucu tarafı sorgusunun iptal edilmeden önce ne kadar çalıştırılmasına izin verildiğini denetleyen süre. Varsayılan değer on dakikadır.
-   `SqlCompatibleWindowsAuth` : Windows kimlik doğrulaması için SQL Server uyumlu bağlantı dizesi seçeneklerinin oluşturulup oluşturulmayacağını belirleyen mantıksal değer (true/false). Varsayılan değer true'dur.



## Category
Accessing data
