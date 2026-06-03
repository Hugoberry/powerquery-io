---
title: DB2.Database
---

# DB2.Database


Db2 veritabanında bulunan SQL tablolarının ve görünümlerinin tablosunu döndürür.


## Syntax

```powerquery
DB2.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

`server` sunucusundaki Db2 veritabanında bulunan SQL tablolarını ve görünümlerini içeren bir tabloyu `database` adlı veritabanı örneğinde döndürür. Bağlantı noktası isteğe bağlı olarak sunucuyla birlikte, iki nokta üst üste işaretiyle ayrılarak belirtilebilir. Aşağıdaki seçenekleri kontrol etmek için isteğe bağlı bir kayıt parametresi `options` belirtilebilir:

-   `CreateNavigationProperties` : Döndürülen değerlerde gezinti özellikleri oluşturulup oluşturulmayacağını ayarlayan mantıksal (true/false) bir değer (varsayılan değer: true).
-   `NavigationPropertyNameGenerator` : Gezinti özelliği adlarını oluşturmak üzere kullanılan bir işlev.
-   `Query` : Verileri almak için kullanılan yerel bir SQL sorgusu. Sorgu birden çok sonuç kümesi üretirse, yalnızca ilki döndürülür.
-   `CommandTimeout` : Sunucu tarafı sorgusunun iptal edilmeden önce ne kadar çalıştırılmasına izin verildiğini denetleyen süre. Varsayılan değer on dakikadır.
-   `ConnectionTimeout` : Sunucuyla bağlantı kurma denemesinden vazgeçilmeden önce ne kadar bekleneceğini denetleyen süre. Varsayılan değer sürücüye bağlıdır.
-   `HierarchicalNavigation` : Tabloların şema adlarına göre gruplandırılarak görüntülenip görüntülenmeyeceklerini ayarlayan mantıksal (true/false) bir değer (varsayılan değer: false).
-   `Implementation` : Kullanılacak dahili veritabanı sağlayıcısı uygulamasını belirtir. Geçerli değerler: "IBM" ve "Microsoft".
-   `BinaryCodePage` : Db2 FOR BIT ikili verilerinin kodunu karakter dizeleri olarak çözmek için kullanılan bir CCSID (Kodlanmış Karakter Kümesi Tanımlayıcısı) sayısı. Uygulama = "Microsoft" değeri için geçerlidir. Dönüştürmeyi devre dışı bırakmak için 0 olarak ayarlayın (varsayılan). Veritabanı kodlamasına dayalı olarak dönüştürmek için 1 olarak ayarlayın. Uygulama kodlamasına dönüştürmek için başka bir CCSID sayısı belirtin.
-   `PackageCollection` : SQL deyimlerini işlemek için gereken paylaşılan paketlerin kullanımını etkinleştirmek üzere paket koleksiyonuna yönelik bir dize değeri (varsayılan değer: "NULLID") belirtir. Uygulama = "Microsoft" değeri için geçerlidir.
-   `UseDb2ConnectGateway` : Bağlantının bir DB2 Connect Gateway üzerinden yapılıp yapılmadığını belirtir. Uygulama için geçerlidir = "Microsoft".

Örneğin, kayıt parametresi \[seçenek1 = değer1, seçenek2 = değer2...\] veya \[Query = "select ..."\] olarak belirtilir.



## Category
Accessing data
