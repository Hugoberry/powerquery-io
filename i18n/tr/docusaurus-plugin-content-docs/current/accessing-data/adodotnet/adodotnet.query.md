---
title: AdoDotNet.Query
---

# AdoDotNet.Query


Bir ADO.NET veri kaynağında yerel sorgu çalıştırmanın sonucunu döndürür.


## Syntax

```powerquery
AdoDotNet.Query(
    providerName as text,
    connectionString as any,
    query as text,
    optional options as record
) as table
```


## Remarks

`providerName` ADO.NET sağlayıcısını kullanarak `connectionString` bağlantı dizesiyle `query` çalıştırmanın sonucunu döndürür. `connectionString` metin veya özellik değeri çiftlerinin kaydı olabilir. Özellik değerleri, metin veya sayı olabilir. Ek özellikler belirtmek için isteğe bağlı `options` kayıt parametresi sağlanabilir. Kayıt şu alanları içerebilir:

-   `CommandTimeout` : Sunucu tarafı sorgusunun iptal edilmeden önce ne kadar çalıştırılmasına izin verildiğini denetleyen süre. Varsayılan değer on dakikadır.
-   `SqlCompatibleWindowsAuth` : Windows kimlik doğrulaması için SQL Server uyumlu bağlantı dizesi seçeneklerinin oluşturulup oluşturulmayacağını belirleyen mantıksal değer (true/false). Varsayılan değer true'dur.



## Category
Accessing data
