---
title: MailChimp.Collection
---

# MailChimp.Collection


## Description

MailChimp uç noktasına ait verilerin yer aldığı bir tabloyu döndürür.


## Syntax

```powerquery
MailChimp.Collection(
    path as text,
    optional entityName as text
) as table
```


## Details

MailChimp API'sine çağrıda bulunur ve sonuç veri kümesini tablo olarak döndürür. Tüm sonuçları otomatik olarak sayfalara ayırır. Kök uç noktanın ve JSON yanıtındaki ana entityName öğesinin eşleşmediği API uç noktaları için isteğe bağlı entityName parametresi kullanılabilir.


## Examples

### Example #1 
MailChimp API&#39;sinin listeler uç noktasına ait verilerin yer aldığı bir tabloyu çeker.
```powerquery
MailChimp.Collection("lists")
```

Result: 
```powerquery
Liste verilerinin yer aldığı bir tablo.
```


### Example #2 
MailChimp API&#39;sinin campaign-folders uç noktasına ait verilerin yer aldığı bir tabloyu çeker.
```powerquery
MailChimp.Collection("campaign-folders", "folders")
```

Result: 
```powerquery
Kampanya-klasörleri verilerinin yer aldığı bir tablo.
```



