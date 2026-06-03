---
title: Informix.Database
---

# Informix.Database


Informix veritabanında kullanılabilen SQL tablolarının ve görünümlerinin bir tablosunu döndürür.


## Syntax

```powerquery
Informix.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

`server` adlı veritabanı örneğindeki `database` sunucusunda bulunan bir Informix veritabanındaki kullanılabilen SQL tablolarını ve görünümlerini içeren bir tablo döndürür. Bağlantı noktası isteğe bağlı olarak sunucuyla birlikte, iki nokta üst üste işaretiyle ayrılarak belirtilebilir. Aşağıdaki seçenekleri kontrol etmek için isteğe bağlı bir kayıt parametresi `options` belirtilebilir:

-   `CreateNavigationProperties` : Döndürülen değerlerde gezinti özellikleri oluşturulup oluşturulmayacağını ayarlayan mantıksal (true/false) bir değer (varsayılan değer: true).
-   `NavigationPropertyNameGenerator` : Gezinti özelliği adlarını oluşturmak üzere kullanılan bir işlev.
-   `Query` : Verileri almak için kullanılan yerel bir SQL sorgusu. Sorgu birden çok sonuç kümesi üretirse, yalnızca ilki döndürülür.
-   `CommandTimeout` : Sunucu tarafı sorgusunun iptal edilmeden önce ne kadar çalıştırılmasına izin verildiğini denetleyen süre. Varsayılan değer on dakikadır.
-   `ConnectionTimeout` : Sunucuyla bağlantı kurma denemesinden vazgeçilmeden önce ne kadar bekleneceğini denetleyen süre. Varsayılan değer sürücüye bağlıdır.
-   `HierarchicalNavigation` : Tabloların şema adlarına göre gruplandırılarak görüntülenip görüntülenmeyeceklerini ayarlayan mantıksal (true/false) bir değer (varsayılan değer: false).

Örneğin, kayıt parametresi \[seçenek1 = değer1, seçenek2 = değer2...\] veya \[Query = "select ..."\] olarak belirtilir.



## Category
Accessing data
