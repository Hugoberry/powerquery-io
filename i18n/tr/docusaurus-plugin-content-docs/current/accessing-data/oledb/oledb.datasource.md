---
title: OleDb.DataSource
---

# OleDb.DataSource


OLE DB veri kaynağından SQL tablolarının ve görünümlerinin olduğu bir tablo döndürür.


## Syntax

```powerquery
OleDb.DataSource(
    connectionString as any,
    optional options as record
) as table
```


## Remarks

`connectionString` bağlantı dizesi tarafından belirtilen OLE DB veri kaynağından SQL tablolarının ve görünümlerinin olduğu bir tablo döndürür. `connectionString`, metin veya özellik-değer çiftlerinden oluşan bir kayıt olabilir. Özellik değerleri metin veya sayı olabilir. İsteğe bağlı `options` kayıt parametresi, ek özellikleri belirtmek için sağlanabilir. Kayıt, şu alanları barındırabilir:

-   `CreateNavigationProperties` : Döndürülen değerlerde gezinti özellikleri oluşturulup oluşturulmayacağını ayarlayan mantıksal (true/false) bir değer (varsayılan değer: true).
-   `NavigationPropertyNameGenerator` : Gezinti özelliği adlarını oluşturmak üzere kullanılan bir işlev.
-   `Query` : Verileri almak için kullanılan yerel bir SQL sorgusu. Sorgu birden çok sonuç kümesi üretirse, yalnızca ilki döndürülür.
-   `HierarchicalNavigation` : Tabloların şema adlarına göre gruplandırılarak görüntülenip görüntülenmeyeceklerini ayarlayan mantıksal (true/false) bir değer (varsayılan değer: true).
-   `ConnectionTimeout` : Sunucuyla bağlantı kurma denemesinden vazgeçilmeden önce ne kadar bekleneceğini denetleyen süre. Varsayılan değer sürücüye bağlıdır.
-   `CommandTimeout` : Sunucu tarafı sorgusunun iptal edilmeden önce ne kadar çalıştırılmasına izin verildiğini denetleyen süre. Varsayılan değer on dakikadır.
-   `SqlCompatibleWindowsAuth` : Windows kimlik doğrulaması için SQL Server uyumlu bağlantı dizesi seçeneklerinin oluşturulup oluşturulmayacağını belirleyen mantıksal değer (true/false). Varsayılan değer true'dur.

Örneğin, kayıt parametresi \[seçenek1 = değer1, seçenek2 = değer2...\] veya \[Query = "select ..."\] olarak belirtilir.



## Category
Accessing data
