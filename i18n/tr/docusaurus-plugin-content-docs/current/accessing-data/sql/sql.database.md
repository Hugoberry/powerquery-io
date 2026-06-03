---
title: Sql.Database
---

# Sql.Database


SQL Server veritabanından SQL tablolarının, görünümlerin ve saklı işlevlerin bir tablosunu döndürür.


## Syntax

```powerquery
Sql.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Sunucu `server` üzerindeki SQL Server veritabanı `database`'den SQL tabloları, görünümleri ve depolanmış işlevleri içeren bir tablo döndürür. Bağlantı noktası isteğe bağlı olarak sunucuyla birlikte, iki nokta üst üste ya da virgül işaretiyle ayrılarak belirtilebilir. Aşağıdaki seçenekleri kontrol etmek için isteğe bağlı bir kayıt parametresi `options` belirtilebilir:

-   `Query` : Verileri almak için kullanılan yerel bir SQL sorgusu. Sorgu birden çok sonuç kümesi üretirse, yalnızca ilki döndürülür.
-   `CreateNavigationProperties` : Döndürülen değerlerde gezinti özellikleri oluşturulup oluşturulmayacağını ayarlayan mantıksal (true/false) bir değer (varsayılan değer: true).
-   `NavigationPropertyNameGenerator` : Gezinti özelliği adlarını oluşturmak üzere kullanılan bir işlev.
-   `MaxDegreeOfParallelism` : Oluşturulan SQL sorgusundaki "maxdop" sorgu yan tümcesinin değerini ayarlayan bir sayı.
-   `CommandTimeout` : Sunucu tarafı sorgusunun iptal edilmeden önce ne kadar çalıştırılmasına izin verildiğini denetleyen süre. Varsayılan değer on dakikadır.
-   `ConnectionTimeout` : Sunucuyla bağlantı kurma denemesinden vazgeçilmeden önce ne kadar bekleneceğini denetleyen süre. Varsayılan değer sürücüye bağlıdır.
-   `HierarchicalNavigation` : Tabloların şema adlarına göre gruplandırılarak görüntülenip görüntülenmeyeceklerini ayarlayan mantıksal (true/false) bir değer (varsayılan değer: false).
-   `MultiSubnetFailover` : Bağlantı dizesindeki "MultiSubnetFailover" özelliğinin değerini ayarlayan mantıksal (true/false) bir değer (varsayılan değer: false).
-   `UnsafeTypeConversions` : True ise başarısız olabilecek ve tüm sorgunun başarısız olmasına neden olabilecek tür dönüştürmelerinin kaynağa döndürülmeye çalışılacağı mantıksal değer (true/false). Genel kullanım için önerilmez.
-   `ContextInfo` : Her komutu çalıştırmadan önce CONTEXT\_INFO ayarlamak için kullanılan ikili değer.
-   `OmitSRID` : True ise geometri ve coğrafya türlerinden İyi Bilinen Metin oluşturulurken SRID'nin atlanacağı bir mantıksal değer (true/false).
-   `EnableCrossDatabaseFolding` : True olduğunda sorgu döndürmenin aynı sunucuda veritabanlarına erişmesini sağlayan mantıksal (true/false) bir değer. Varsayılan değer false'tur.

Örneğin, kayıt parametresi \[seçenek1 = değer1, seçenek2 = değer2...\] veya \[Query = "select ..."\] olarak belirtilir.



## Category
Accessing data
