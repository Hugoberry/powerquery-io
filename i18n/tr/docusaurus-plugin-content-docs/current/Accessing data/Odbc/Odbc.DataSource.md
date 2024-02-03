---
title: Odbc.DataSource
---

# Odbc.DataSource


## Description

ODBC veri kaynağından SQL tablolarından ve görünümlerinden oluşan bir tablo döndürür. 


## Syntax

```powerquery
Odbc.DataSource(
    connectionString as any,
    optional options as record
) as table
```


## Details

<code>connectionString</code> bağlantı dizesi tarafından belirtilen ODBC veri kaynağından SQL tablolarının ve görünümlerinin bir tablosunu döndürür. <code>connectionString</code> metin veya özellik değeri çiftlerinin kaydı olabilir. Özellik değerleri, metin veya sayı olabilir. Ek özellikler belirtmek için isteğe bağlı <code>options</code> kayıt parametresi sağlanabilir. Kayıt şu alanları içerebilir:    <ul><li><code>CreateNavigationProperties</code> : D&#246;nd&#252;r&#252;len değerlerde gezinti &#246;zellikleri oluşturulup oluşturulmayacağını ayarlayan mantıksal (true/false) bir değer (varsayılan değer: true).</li><li><code>HierarchicalNavigation</code> : Tabloların şema adlarına g&#246;re gruplandırılarak g&#246;r&#252;nt&#252;lenip g&#246;r&#252;nt&#252;lenmeyeceklerini ayarlayan mantıksal (true/false) bir değer (varsayılan değer: false).</li><li><code>ConnectionTimeout</code> : Sunucuyla bağlantı kurma denemesinden vazge&#231;ilmeden &#246;nce ne kadar bekleneceğini denetleyen s&#252;re. Varsayılan değer 15 saniyedir.</li><li><code>CommandTimeout</code> : Sunucu tarafı sorgusunun iptal edilmeden &#246;nce ne kadar &#231;alıştırılmasına izin verildiğini denetleyen s&#252;re. Varsayılan değer on dakikadır.</li><li><code>SqlCompatibleWindowsAuth</code> : Windows kimlik doğrulaması i&#231;in SQL Server uyumlu bağlantı dizesi se&#231;eneklerinin oluşturulup oluşturulmayacağını belirleyen mantıksal değer (true/false). Varsayılan değer true&#39;dur.</li></ul>


## Examples

### Example #1 
Sağlanan bağlantı dizesinden SQL tablolarını ve görünümleri döndürün.
```powerquery
Odbc.DataSource("dsn=your_dsn")
```

Result: 
```powerquery
table
```




## Category
Accessing data
