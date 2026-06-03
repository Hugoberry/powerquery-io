---
title: AnalysisServices.Database
---

# AnalysisServices.Database


Analysis Services veritabanından çok boyutlu küp tablosu veya tablolu modeller döndürür.


## Syntax

```powerquery
AnalysisServices.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

`server` sunucusu üzerindeki `database` Analysis Services veritabanından çok boyutlu küpler veya sekmeli modellerin tablosunu döndürür. Şu seçenekleri denetlemek için isteğe bağlı bir kayıt parametresi (`options`) belirtilebilir:

-   `Query` : Verileri almak için kullanılan yerel bir MDX sorgusu.
-   `TypedMeasureColumns` : Çok boyutlu veya sekmeli modelde belirtilen türlerin, eklenen ölçüm sütunlarının türleri için kullanılıp kullanılmayacağını belirten bir mantıksal değer. False olarak ayarlandığında, tüm ölçüm sütunları için "number" türü kullanılacaktır. Bu seçenek için varsayılan değer false şeklindedir.
-   `Culture` : Veriler için kültürü belirten bir kültür adı. Bu, 'Yerel Ayar Tanımlayıcısı' bağlantı dizesi özelliğine karşılık gelir.
-   `CommandTimeout` : Sunucu tarafı sorgusunun iptal edilmeden önce ne kadar çalıştırılmasına izin verildiğini denetleyen süre. Varsayılan değer sürücüye bağlıdır.
-   `ConnectionTimeout` : Sunucuyla bağlantı kurma denemesinden vazgeçilmeden önce ne kadar bekleneceğini denetleyen süre. Varsayılan değer sürücüye bağlıdır.
-   `SubQueries` : Bağlantı dizesinde "SubQueries" özelliğinin değerini ayarlayan bir sayı (0, 1 veya 2). Bu, alt seçimlerde veya alt küplerde hesaplanan üyelerin davranışını denetler. (Varsayılan değer 2'dir).
-   `Implementation`



## Category
Accessing data
