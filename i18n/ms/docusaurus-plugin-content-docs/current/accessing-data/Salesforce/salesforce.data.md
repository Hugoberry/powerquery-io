---
title: Salesforce.Data
---

# Salesforce.Data


Kembalikan objek daripada akaun Salesforce.


## Syntax

```powerquery
Salesforce.Data(
    optional loginUrl as any,
    optional options as record
) as table
```


## Remarks

Mengembalikan objek pada akaun Salesforce yang diberikan dalam kelayakan. Akaun akan disambungkan melalui persekitaran yang diberikan `loginUrl`. Jika tiada persekitaran diberikan, maka akaun akan disambungkan kepada pengeluaran (https://login.salesforce.com). Parameter rekod pilihan, `options`, boleh diberikan untuk menentukan sifat tambahan. Rekod boleh mengandungi medan berikut:

-   `CreateNavigationProperties` : Logik (true/false) yang menetapkan sama ada hendak menjana sifat navigasi pada nilai yang dikembalikan (lalai adalah false).
-   `ApiVersion` : Versi API Salesforce untuk digunakan bagi pertanyaan ini. Apabila tidak ditentukan, versi API 29.0 digunakan.
-   `Timeout` : Tempoh yang mengawal berapa lama perlu menunggu sebelum menghentikan permintaan kepada pelayan. Nilai lalai adalah khusus sumber.



## Category
Accessing data
