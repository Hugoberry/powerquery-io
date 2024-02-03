---
title: Sql.Databases
---

# Sql.Databases


## Description

Bir SQL Sunucusu üzerindeki veritabanlarının tablosunu döndürür.


## Syntax

```powerquery
Sql.Databases(
    server as text,
    optional options as record
) as table
```


## Details

Belirtilen <code>server</code> SQL sunucusundaki veritabanlarını içeren bir tablo döndürür. Şu seçenekleri denetlemek için isteğe bağlı bir <code>options</code> kayıt parametresi belirtilebilir:    <ul><li><code>CreateNavigationProperties</code> : D&#246;nd&#252;r&#252;len değerlerde gezinti &#246;zellikleri oluşturulup oluşturulmayacağını ayarlayan mantıksal (true/false) bir değer (varsayılan değer: true).</li><li><code>NavigationPropertyNameGenerator</code> : Gezinti &#246;zelliği adlarını oluşturmak &#252;zere kullanılan bir işlev.</li><li><code>MaxDegreeOfParallelism</code> : Oluşturulan SQL sorgusundaki &quot;maxdop&quot; sorgu yan t&#252;mcesinin değerini ayarlayan bir sayı.</li><li><code>CommandTimeout</code> : Sunucu tarafı sorgusunun iptal edilmeden &#246;nce ne kadar &#231;alıştırılmasına izin verildiğini denetleyen s&#252;re. Varsayılan değer on dakikadır.</li><li><code>ConnectionTimeout</code> : Sunucuyla bağlantı kurma denemesinden vazge&#231;ilmeden &#246;nce ne kadar bekleneceğini denetleyen s&#252;re. Varsayılan değer s&#252;r&#252;c&#252;ye bağlıdır.</li><li><code>HierarchicalNavigation</code> : Tabloların şema adlarına g&#246;re gruplandırılarak g&#246;r&#252;nt&#252;lenip g&#246;r&#252;nt&#252;lenmeyeceklerini ayarlayan mantıksal (true/false) bir değer (varsayılan değer: false).</li><li><code>MultiSubnetFailover</code> : Bağlantı dizesindeki &quot;MultiSubnetFailover&quot; &#246;zelliğinin değerini ayarlayan mantıksal (true/false) bir değer (varsayılan değer: false).</li><li><code>UnsafeTypeConversions</code> : True ise başarısız olabilecek ve t&#252;m sorgunun başarısız olmasına neden olabilecek t&#252;r d&#246;n&#252;şt&#252;rmelerinin kaynağa d&#246;nd&#252;r&#252;lmeye &#231;alışılacağı mantıksal değer (true/false). Genel kullanım i&#231;in &#246;nerilmez.</li><li><code>ContextInfo</code> : Her komutu &#231;alıştırmadan &#246;nce CONTEXT_INFO ayarlamak i&#231;in kullanılan ikili değer.</li><li><code>OmitSRID</code> : True ise geometri ve coğrafya t&#252;rlerinden İyi Bilinen Metin oluşturulurken SRID&#39;nin atlanacağı bir mantıksal değer (true/false).</li><li><code>EnableCrossDatabaseFolding</code> : True olduğunda sorgu d&#246;nd&#252;rmenin aynı sunucuda veritabanlarına erişmesini sağlayan mantıksal (true/false) bir değer. Varsayılan değer false&#39;tur.</li></ul>    Örneğin, kayıt parametresi [seçenek1 = değer1, seçenek2 = değer2...] olarak belirtilir.    <br />    Bir SQL sorgusunun sunucuda çalıştırılacak şekilde ayarlanması desteklenmez. SQL sorgusunun çalıştırılması için bunun yerine <code>Sql.Database</code> kullanılmalıdır.    



## Category
Accessing data
