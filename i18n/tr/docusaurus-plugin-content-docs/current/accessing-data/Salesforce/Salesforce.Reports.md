---
title: Salesforce.Reports
---

# Salesforce.Reports


Salesforce hesabındaki raporları döndürür.


## Syntax

```powerquery
Salesforce.Reports(
    optional loginUrl as text,
    optional options as record
) as table
```


## Remarks

Kimlik bilgilerinde belirtilen Salesforce hesabındaki raporları döndürür. Hesap bağlantısı, belirtilen <code>loginUrl</code> ortamı üzerinden kurulur. Ortam belirtilmemesi durumunda, hesap üretim ortamına (https://login.salesforce.com) bağlanır. Ek özellikler belirtmek için isteğe bağlı <code>options</code> kayıt parametresi sağlanabilir. Kayıt aşağıdaki alanları içerebilir:    <ul><li><code>ApiVersion</code> : Bu sorgu i&#231;in kullanılacak Salesforce API s&#252;r&#252;m&#252;. Belirtilmediğinde, API s&#252;r&#252;m&#252; 29.0 kullanılır.</li><li><code>Timeout</code> : Sunucuya y&#246;nelik istek bırakılmadan &#246;nce ne kadar bekleneceğini denetleyen s&#252;re. Varsayılan değer kaynağa &#246;zg&#252;d&#252;r.</li></ul>    



## Category
Accessing data
