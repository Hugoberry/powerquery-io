---
title: Sql.Databases
---

# Sql.Databases


Bir SQL Sunucusu üzerindeki veritabanlarının tablosunu döndürür.


## Syntax

```powerquery
Sql.Databases(
    server as text,
    optional options as record
) as table
```


## Remarks

Belirtilen `server` SQL sunucusundaki veritabanlarını içeren bir tablo döndürür. Aşağıdaki seçenekleri kontrol etmek için isteğe bağlı bir kayıt parametresi olan `options` belirtilebilir:

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

Örneğin, kayıt parametresi \[seçenek1 = değer1, seçenek2 = değer2...\], olarak belirtilir.  
  
Sunucuda çalıştırılacak bir SQL sorgusu ayarlamayı desteklemez. `Sql.Database` sql sorgusu çalıştırmak için kullanılmalıdır.



## Category
Accessing data
