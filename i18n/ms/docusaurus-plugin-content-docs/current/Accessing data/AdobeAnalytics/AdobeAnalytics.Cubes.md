---
title: AdobeAnalytics.Cubes
---

# AdobeAnalytics.Cubes


## Description

Mengembalikan suite laporan dalam Adobe Analytics.


## Syntax

```powerquery
AdobeAnalytics.Cubes(
    optional options as record
) as table
```


## Details

Mengembalikan jadual pakej berbilang dimensi daripada Adobe Analytics. Parameter rekod pilihan, <code>options</code>, boleh ditentukan untuk mengawal opsyen berikut:    <ul><li><code>HierarchicalNavigation</code> : Logik (true/false) yang menetapkan sama ada untuk melihat jadual yang dikumpulkan mengikut nama skema (lalai adalah false).</li><li><code>MaxRetryCount</code> : Bilangan cubaan semula untuk dilakukan apabila meninjau hasil pertanyaan. Nilai lalai ialah 120.</li><li><code>RetryInterval</code> : Tempoh antara percubaan semula. Nilai lalai ialah 1 saat.</li><li><code>Implementation</code> : Menentukan versi API Adobe Analytics. Nilai yang sah ialah: &quot;2.0&quot;. Lalai menggunakan API versi 1.4.</li></ul>    



## Category
Accessing data
