---
title: AdobeAnalytics.Cubes
---

# AdobeAnalytics.Cubes


Adobe Analytics içinde rapor paketlerini döndürür.


## Syntax

```powerquery
AdobeAnalytics.Cubes(
    optional options as record
) as table
```


## Remarks

Adobe Analyics'ten çok boyutlu paketlere ilişkin bir tablo döndürür. İsteğe bağlı bir kayıt parametresi olan `options`, aşağıdaki seçenekleri denetlemek üzere belirtilebilir:

-   `HierarchicalNavigation` : Tabloların şema adlarına göre gruplandırılarak görüntülenip görüntülenmeyeceklerini ayarlayan mantıksal (true/false) bir değer (varsayılan değer: false).
-   `MaxRetryCount` : Sorgu sonucu için yoklama sırasında gerçekleştirilecek yeniden deneme sayısı. Varsayılan değer 120'dir.
-   `RetryInterval` : Yeniden deneme girişimleri arasındaki süre süresi. Varsayılan değer 1 saniyedir.
-   `Implementation` : Adobe Analytics API sürümünü belirtir. Geçerli değer: "2.0". Varsayılan seçenek API 1.4 sürümünü kullanıyor.



## Category
Accessing data
