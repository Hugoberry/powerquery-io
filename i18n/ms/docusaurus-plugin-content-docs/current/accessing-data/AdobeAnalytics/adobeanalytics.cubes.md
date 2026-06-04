---
title: AdobeAnalytics.Cubes
---

# AdobeAnalytics.Cubes


Mengembalikan suite laporan dalam Adobe Analytics.


## Syntax

```powerquery
AdobeAnalytics.Cubes(
    optional options as record
) as table
```


## Remarks

Mengembalikan jadual pakej berbilang dimensi daripada Adobe Analytics. Parameter rekod pilihan, `options`, boleh ditentukan untuk mengawal opsyen berikut:

-   `HierarchicalNavigation` : Logik (true/false) yang menetapkan sama ada untuk melihat jadual yang dikumpulkan mengikut nama skema (lalai adalah false).
-   `MaxRetryCount` : Bilangan cubaan semula untuk dilakukan apabila meninjau hasil pertanyaan. Nilai lalai ialah 120.
-   `RetryInterval` : Tempoh antara percubaan semula. Nilai lalai ialah 1 saat.
-   `Implementation` : Menentukan versi API Adobe Analytics. Nilai yang sah ialah: "2.0". Lalai menggunakan API versi 1.4.



## Category
Accessing data
