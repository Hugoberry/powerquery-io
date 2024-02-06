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

<code>server</code> sunucusundaki Db2 veritabanında bulunan SQL tablolarını ve görünümlerini içeren bir tabloyu <code>database</code> adlı veritabanı örneğinde döndürür. Bağlantı noktası isteğe bağlı olarak sunucuyla birlikte, iki nokta üst üste işaretiyle ayrılarak belirtilebilir. Şu seçenekleri denetlemek için isteğe bağlı bir <code>options</code> kayıt parametresi belirtilebilir:    <ul><li><code>CreateNavigationProperties</code> : D&#246;nd&#252;r&#252;len değerlerde gezinti &#246;zellikleri oluşturulup oluşturulmayacağını ayarlayan mantıksal (true/false) bir değer (varsayılan değer: true).</li><li><code>NavigationPropertyNameGenerator</code> : Gezinti &#246;zelliği adlarını oluşturmak &#252;zere kullanılan bir işlev.</li><li><code>Query</code> : Verileri almak i&#231;in kullanılan yerel bir SQL sorgusu. Sorgu birden &#231;ok sonu&#231; k&#252;mesi &#252;retirse, yalnızca ilki d&#246;nd&#252;r&#252;l&#252;r.</li><li><code>CommandTimeout</code> : Sunucu tarafı sorgusunun iptal edilmeden &#246;nce ne kadar &#231;alıştırılmasına izin verildiğini denetleyen s&#252;re. Varsayılan değer on dakikadır.</li><li><code>ConnectionTimeout</code> : Sunucuyla bağlantı kurma denemesinden vazge&#231;ilmeden &#246;nce ne kadar bekleneceğini denetleyen s&#252;re. Varsayılan değer s&#252;r&#252;c&#252;ye bağlıdır.</li><li><code>HierarchicalNavigation</code> : Tabloların şema adlarına g&#246;re gruplandırılarak g&#246;r&#252;nt&#252;lenip g&#246;r&#252;nt&#252;lenmeyeceklerini ayarlayan mantıksal (true/false) bir değer (varsayılan değer: false).</li><li><code>Implementation</code> : Kullanılacak dahili veritabanı sağlayıcısı uygulamasını belirtir. Ge&#231;erli değerler: &quot;IBM&quot; ve &quot;Microsoft&quot;.</li><li><code>BinaryCodePage</code> : Db2 FOR BIT ikili verilerinin kodunu karakter dizeleri olarak &#231;&#246;zmek i&#231;in kullanılan bir CCSID (Kodlanmış Karakter K&#252;mesi Tanımlayıcısı) sayısı. Uygulama = &quot;Microsoft&quot; değeri i&#231;in ge&#231;erlidir. D&#246;n&#252;şt&#252;rmeyi devre dışı bırakmak i&#231;in 0 olarak ayarlayın (varsayılan). Veritabanı kodlamasına dayalı olarak d&#246;n&#252;şt&#252;rmek i&#231;in 1 olarak ayarlayın. Uygulama kodlamasına d&#246;n&#252;şt&#252;rmek i&#231;in başka bir CCSID sayısı belirtin.</li><li><code>PackageCollection</code> : SQL deyimlerini işlemek i&#231;in gereken paylaşılan paketlerin kullanımını etkinleştirmek &#252;zere paket koleksiyonuna y&#246;nelik bir dize değeri (varsayılan değer: &quot;NULLID&quot;) belirtir. Uygulama = &quot;Microsoft&quot; değeri i&#231;in ge&#231;erlidir.</li><li><code>UseDb2ConnectGateway</code> : Bağlantının bir DB2 Connect Gateway &#252;zerinden yapılıp yapılmadığını belirtir. Uygulama i&#231;in ge&#231;erlidir = &quot;Microsoft&quot;.</li></ul>    Örneğin, kayıt parametresi [option1 = value1, option2 = value2...] veya [Query = "select ..."] olarak belirtilir.    



## Category
Accessing data
