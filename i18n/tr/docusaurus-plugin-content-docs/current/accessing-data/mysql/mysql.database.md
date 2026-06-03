---
title: MySQL.Database
---

# MySQL.Database


Bir MySQL veritabanında bulunan SQL tablolarının, görünümlerin ve saklı skaler işlevlerinin bir tablosunu döndürür.


## Syntax

```powerquery
MySQL.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

`server` adlı veritabanı örneğindeki `database` sunucusunda bulunan bir MySQL veritabanındaki SQL tablolarını, görünümlerini ve saklı skaler işlevlerini içeren bir tablo döndürür. Bağlantı noktası isteğe bağlı olarak sunucuyla birlikte, iki nokta üst üste işaretiyle ayrılarak belirtilebilir. Aşağıdaki seçenekleri kontrol etmek için isteğe bağlı bir kayıt parametresi `options` belirtilebilir:

-   `Encoding` : Sunucuya gönderilen tüm sorguları kodlamak için kullanılan karakter kümesini belirten bir TextEncoding değeri (null varsayılan değerdir).
-   `CreateNavigationProperties` : Döndürülen değerlerde gezinti özellikleri oluşturulup oluşturulmayacağını ayarlayan mantıksal (true/false) bir değer (varsayılan değer: true).
-   `NavigationPropertyNameGenerator` : Gezinti özelliği adlarını oluşturmak üzere kullanılan bir işlev.
-   `Query` : Verileri almak için kullanılan yerel bir SQL sorgusu. Sorgu birden çok sonuç kümesi üretirse, yalnızca ilki döndürülür.
-   `CommandTimeout` : Sunucu tarafı sorgusunun iptal edilmeden önce ne kadar çalıştırılmasına izin verildiğini denetleyen süre. Varsayılan değer on dakikadır.
-   `ConnectionTimeout` : Sunucuyla bağlantı kurma denemesinden vazgeçilmeden önce ne kadar bekleneceğini denetleyen süre. Varsayılan değer sürücüye bağlıdır.
-   `TreatTinyAsBoolean` : Sunucudaki mini tam sayı sütunlarının mantıksal değer olarak zorlanıp zorlanmayacağını belirten mantıksal (true/false) bir değer. Varsayılan değer: true.
-   `OldGuids` : Char(36) sütunlarının (false ise) veya binary(16) sütunlarının (true ise) GUID olarak işleneceğini ayarlayan mantıksal (true/false) bir değer. Varsayılan değer: false.
-   `ReturnSingleDatabase` : Tüm veritabanlarındaki tüm tabloları döndürmek (false ise) veya belirtilen veritabanının tablolarını ve görünümlerini döndürmek (true ise) üzere ayarlanabilen mantıksal (true/false) bir değer. Varsayılan değer: false.
-   `HierarchicalNavigation` : Tabloların şema adlarına göre gruplandırılarak görüntülenip görüntülenmeyeceklerini ayarlayan mantıksal (true/false) bir değer (varsayılan değer: false).

Örneğin, kayıt parametresi \[seçenek1 = değer1, seçenek2 = değer2...\] veya \[Query = "select ..."\] olarak belirtilir.



## Category
Accessing data
