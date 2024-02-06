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

<code>database</code> adlı veritabanı örneğindeki <code>server</code> sunucusunda bulunan bir MySQL veritabanındaki SQL tablolarını, görünümlerini ve saklı skaler işlevlerini içeren bir tablo döndürür. Bağlantı noktası isteğe bağlı olarak sunucuyla birlikte, iki nokta üst üste işaretiyle ayrılarak belirtilebilir. Şu seçenekleri denetlemek için isteğe bağlı bir <code>options</code> kayıt parametresi belirtilebilir:    <ul><li><code>Encoding</code> : Sunucuya g&#246;nderilen t&#252;m sorguları kodlamak i&#231;in kullanılan karakter k&#252;mesini belirten bir TextEncoding değeri (null varsayılan değerdir).</li><li><code>CreateNavigationProperties</code> : D&#246;nd&#252;r&#252;len değerlerde gezinti &#246;zellikleri oluşturulup oluşturulmayacağını ayarlayan mantıksal (true/false) bir değer (varsayılan değer: true).</li><li><code>NavigationPropertyNameGenerator</code> : Gezinti &#246;zelliği adlarını oluşturmak &#252;zere kullanılan bir işlev.</li><li><code>Query</code> : Verileri almak i&#231;in kullanılan yerel bir SQL sorgusu. Sorgu birden &#231;ok sonu&#231; k&#252;mesi &#252;retirse, yalnızca ilki d&#246;nd&#252;r&#252;l&#252;r.</li><li><code>CommandTimeout</code> : Sunucu tarafı sorgusunun iptal edilmeden &#246;nce ne kadar &#231;alıştırılmasına izin verildiğini denetleyen s&#252;re. Varsayılan değer on dakikadır.</li><li><code>ConnectionTimeout</code> : Sunucuyla bağlantı kurma denemesinden vazge&#231;ilmeden &#246;nce ne kadar bekleneceğini denetleyen s&#252;re. Varsayılan değer s&#252;r&#252;c&#252;ye bağlıdır.</li><li><code>TreatTinyAsBoolean</code> : Sunucudaki mini tam sayı s&#252;tunlarının mantıksal değer olarak zorlanıp zorlanmayacağını belirten mantıksal (true/false) bir değer. Varsayılan değer: true.</li><li><code>OldGuids</code> : Char(36) s&#252;tunlarının (false ise) veya binary(16) s&#252;tunlarının (true ise) GUID olarak işleneceğini ayarlayan mantıksal (true/false) bir değer. Varsayılan değer: false.</li><li><code>ReturnSingleDatabase</code> : T&#252;m veritabanlarındaki t&#252;m tabloları d&#246;nd&#252;rmek (false ise) veya belirtilen veritabanının tablolarını ve g&#246;r&#252;n&#252;mlerini d&#246;nd&#252;rmek (true ise) &#252;zere ayarlanabilen mantıksal (true/false) bir değer. Varsayılan değer: false.</li><li><code>HierarchicalNavigation</code> : Tabloların şema adlarına g&#246;re gruplandırılarak g&#246;r&#252;nt&#252;lenip g&#246;r&#252;nt&#252;lenmeyeceklerini ayarlayan mantıksal (true/false) bir değer (varsayılan değer: false).</li></ul>    Örneğin, kayıt parametresi [seçenek1 = değer1, seçenek2 = değer2...] veya [Query = "select ..."] olarak belirtilir.    



## Category
Accessing data
