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

<code>connectionString</code> bağlantı dizesi tarafından belirtilen OLE DB veri kaynağından SQL tablolarının ve görünümlerinin olduğu bir tablo döndürür. <code>connectionString</code>, özellik değeri çiftlerinin bir kaydı veya metin olabilir. Özellik değerleri metin veya sayı olabilir. Ek parametreleri belirtmek için isteğe bağlı bir <code>options</code> parametresi sağlanabilir. Kayıt şu alanları içerebilir    <ul><li><code>CreateNavigationProperties</code> : D&#246;nd&#252;r&#252;len değerlerde gezinti &#246;zellikleri oluşturulup oluşturulmayacağını ayarlayan mantıksal (true/false) bir değer (varsayılan değer: true).</li><li><code>NavigationPropertyNameGenerator</code> : Gezinti &#246;zelliği adlarını oluşturmak &#252;zere kullanılan bir işlev.</li><li><code>Query</code> : Verileri almak i&#231;in kullanılan yerel bir SQL sorgusu. Sorgu birden &#231;ok sonu&#231; k&#252;mesi &#252;retirse, yalnızca ilki d&#246;nd&#252;r&#252;l&#252;r.</li><li><code>HierarchicalNavigation</code> : Tabloların şema adlarına g&#246;re gruplandırılarak g&#246;r&#252;nt&#252;lenip g&#246;r&#252;nt&#252;lenmeyeceklerini ayarlayan mantıksal (true/false) bir değer (varsayılan değer: true).</li><li><code>ConnectionTimeout</code> : Sunucuyla bağlantı kurma denemesinden vazge&#231;ilmeden &#246;nce ne kadar bekleneceğini denetleyen s&#252;re. Varsayılan değer s&#252;r&#252;c&#252;ye bağlıdır.</li><li><code>CommandTimeout</code> : Sunucu tarafı sorgusunun iptal edilmeden &#246;nce ne kadar &#231;alıştırılmasına izin verildiğini denetleyen s&#252;re. Varsayılan değer on dakikadır.</li><li><code>SqlCompatibleWindowsAuth</code> : Windows kimlik doğrulaması i&#231;in SQL Server uyumlu bağlantı dizesi se&#231;eneklerinin oluşturulup oluşturulmayacağını belirleyen mantıksal değer (true/false). Varsayılan değer true&#39;dur.</li></ul>    Örneğin, kayıt parametresi [seçenek1 = değer1, seçenek2 = değer2...] veya [Query = "select ..."] olarak belirtilir.



## Category
Accessing data
