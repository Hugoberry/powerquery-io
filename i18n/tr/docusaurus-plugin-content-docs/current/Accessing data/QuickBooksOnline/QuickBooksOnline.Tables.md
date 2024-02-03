---
title: QuickBooksOnline.Tables
---

# QuickBooksOnline.Tables


## Description

QuickBooks Online&#39;dan içeri veri aktarın.


## Syntax

```powerquery
QuickBooksOnline.Tables(
    optional options as record
) as table
```


## Details

        QuickBooks Online'da kullanılabilen tabloların bir tablo listesini döndürür. Şu seçenekleri denetlemek için isteğe bağlı bir kayıt parametresi olan <code>options</code> belirtilebilir:          <ul>            <li><code>ConnectionTimeout</code>: Sunucuyla bağlantı kurma girişimini bırakmadan önce ne kadar bekleneceğini denetleyen süre.</li>            <li><code>CommandTimeout</code>: Sunucu tarafı sorgusunun iptal edilmeden önce ne kadar çalışacağını denetleyen süre.</li>          </ul>        Kayıt parametresi [seçenek1 = değer1, seçenek2 = değer2...] şeklinde belirtilir.    


