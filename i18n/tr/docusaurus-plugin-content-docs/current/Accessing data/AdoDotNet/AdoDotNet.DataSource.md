---
title: AdoDotNet.DataSource
---

# AdoDotNet.DataSource


## Description

Bir ADO.NET veri kaynağı için şema koleksiyonunu döndürür.


## Syntax

```powerquery
AdoDotNet.DataSource(
    providerName as text,
    connectionString as any,
    optional options as record
) as table
```


## Details

<code>providerName</code> sağlayıcı adı ve <code>connectionString</code> bağlantı dizesiyle ADO.NET veri kaynağı için şema koleksiyonunu döndürür. <code>connectionString</code>, metin veya özellik değer çiftlerinin bir kaydı olabilir. Özellik değerleri metin veya sayı olabilir. Ek özellikler belirtmek için isteğe bağlı <code>options</code> parametresi sağlanabilir. Kayıt aşağıdaki alanları içerebilir:    <ul><li><code>CommandTimeout</code> : Sunucu tarafı sorgusunun iptal edilmeden &#246;nce ne kadar &#231;alıştırılmasına izin verildiğini denetleyen s&#252;re. Varsayılan değer on dakikadır.</li><li><code>SqlCompatibleWindowsAuth</code> : Windows kimlik doğrulaması i&#231;in SQL Server uyumlu bağlantı dizesi se&#231;eneklerinin oluşturulup oluşturulmayacağını belirleyen mantıksal değer (true/false). Varsayılan değer true&#39;dur.</li><li><code>TypeMap</code></li></ul>



## Category
Accessing data
