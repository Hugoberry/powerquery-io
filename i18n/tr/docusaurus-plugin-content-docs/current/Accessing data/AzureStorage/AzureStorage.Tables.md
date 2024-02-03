---
title: AzureStorage.Tables
---

# AzureStorage.Tables


## Description

Bir Azure depolama kasasından, belirtilen hesapta bulunan tabloları içeren bir gezinme tablosu döndürür.


## Syntax

```powerquery
AzureStorage.Tables(
    account as text,
    optional options as record
) as table
```


## Details

Azure depolama kasasındaki hesap URL'sinde (<code>account</code>) bulunan her tablo için bir satır içeren gezinti tablosu döndürür. Her satır, Azure tablosuna bir bağlantı içerir. Ek özellikleri belirtmek için isteğe bağlı bir kayıt parametresi (<code>options</code>) sağlanabilir. Kayıt şu alanları içerebilir:    <ul><li><code>Timeout</code> : Sunucuya y&#246;nelik istek bırakılmadan &#246;nce ne kadar bekleneceğini denetleyen s&#252;re. Varsayılan değer kaynağa &#246;zg&#252;d&#252;r.</li></ul>



## Category
Accessing data
