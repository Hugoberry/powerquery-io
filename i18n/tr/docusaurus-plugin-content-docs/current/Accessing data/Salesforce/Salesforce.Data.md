---
title: Salesforce.Data
---

# Salesforce.Data


## Description

Salesforce hesabındaki nesneleri döndürür.


## Syntax

```powerquery
Salesforce.Data(
    optional loginUrl as any,
    optional options as record
) as table
```


## Details

Kimlik bilgilerinde belirtilen Salesforce hesabındaki nesneleri döndürür. Hesap bağlantısı, belirtilen <code>loginUrl</code> ortamı üzerinden kurulur. Ortam belirtilmemesi durumunda, hesap üretim ortamına (https://login.salesforce.com) bağlanır. Ek özellikler belirtmek için isteğe bağlı <code>options</code> kayıt parametresi sağlanabilir. Kayıt aşağıdaki alanları içerebilir:    <ul><li><code>CreateNavigationProperties</code> : D&#246;nd&#252;r&#252;len değerlerde gezinti &#246;zellikleri oluşturulup oluşturulmayacağını ayarlayan mantıksal (true/false) bir değer (varsayılan değer: false).</li><li><code>ApiVersion</code> : Bu sorgu i&#231;in kullanılacak Salesforce API s&#252;r&#252;m&#252;. Belirtilmediğinde, API s&#252;r&#252;m&#252; 29.0 kullanılır.</li><li><code>Timeout</code> : Sunucuya y&#246;nelik istek bırakılmadan &#246;nce ne kadar bekleneceğini denetleyen s&#252;re. Varsayılan değer kaynağa &#246;zg&#252;d&#252;r.</li></ul>    



## Category
Accessing data
