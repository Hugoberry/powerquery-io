---
title: Odbc.Query
---

# Odbc.Query


## Description

Bir ODBC veri kaynağında yerel sorgu çalıştırmanın sonuçlarını döndürür.


## Syntax

```powerquery
Odbc.Query(
    connectionString as any,
    query as text,
    optional options as record
) as table
```


## Details

ODBC kullanarak <code>connectionString</code> bağlantı dizesi ile <code>query</code> çalıştırmanın sonucunu döndürür. <code>connectionString</code> metin veya özellik değeri çiftlerinin kaydı olabilir. Özellik değerleri, metin veya sayı olabilir. Ek özellikler belirtmek için isteğe bağlı <code>options</code> kayıt parametresi sağlanabilir. Kayıt şu alanları içerebilir:    <ul><li><code>ConnectionTimeout</code> : Sunucuyla bağlantı kurma denemesinden vazge&#231;ilmeden &#246;nce ne kadar bekleneceğini denetleyen s&#252;re. Varsayılan değer 15 saniyedir.</li><li><code>CommandTimeout</code> : Sunucu tarafı sorgusunun iptal edilmeden &#246;nce ne kadar &#231;alıştırılmasına izin verildiğini denetleyen s&#252;re. Varsayılan değer on dakikadır.</li><li><code>SqlCompatibleWindowsAuth</code> : Windows kimlik doğrulaması i&#231;in SQL Server uyumlu bağlantı dizesi se&#231;eneklerinin oluşturulup oluşturulmayacağını belirleyen mantıksal değer (true/false). Varsayılan değer true&#39;dur.</li></ul>


## Examples

### Example #1 
Sağlanan bağlantı dizesinde basit bir sorgu çalıştırmanın sonucunu döndürün.
```powerquery
Odbc.Query("dsn=your_dsn", "select * from Customers")
```

Result: 
```powerquery
table
```




## Category
Accessing data
