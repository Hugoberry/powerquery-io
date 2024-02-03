---
title: AdobeAnalytics.Cubes
---

# AdobeAnalytics.Cubes


## Description

Adobe Analytics içinde rapor paketlerini döndürür.


## Syntax

```powerquery
AdobeAnalytics.Cubes(
    optional options as record
) as table
```


## Details

Adobe Analyics'ten çok boyutlu paketlere ilişkin bir tablo döndürür. İsteğe bağlı bir kayıt parametresi olan <code>options</code>, aşağıdaki seçenekleri denetlemek üzere belirtilebilir:    <ul><li><code>HierarchicalNavigation</code> : Tabloların şema adlarına g&#246;re gruplandırılarak g&#246;r&#252;nt&#252;lenip g&#246;r&#252;nt&#252;lenmeyeceklerini ayarlayan mantıksal (true/false) bir değer (varsayılan değer: false).</li><li><code>MaxRetryCount</code> : Sorgu sonucu i&#231;in yoklama sırasında ger&#231;ekleştirilecek yeniden deneme sayısı. Varsayılan değer 120&#39;dir.</li><li><code>RetryInterval</code> : Yeniden deneme girişimleri arasındaki s&#252;re s&#252;resi. Varsayılan değer 1 saniyedir.</li><li><code>Implementation</code> : Adobe Analytics API s&#252;r&#252;m&#252;n&#252; belirtir. Ge&#231;erli değer: &quot;2.0&quot;. Varsayılan se&#231;enek API 1.4 s&#252;r&#252;m&#252;n&#252; kullanıyor.</li></ul>    



## Category
Accessing data
