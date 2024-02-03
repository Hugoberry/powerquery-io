---
title: Salesforce.Data
---

# Salesforce.Data


## Description

Kembalikan objek daripada akaun Salesforce.


## Syntax

```powerquery
Salesforce.Data(
    optional loginUrl as any,
    optional options as record
) as table
```


## Details

Mengembalikan objek pada akaun Salesforce yang diberikan dalam kelayakan. Akaun akan disambungkan melalui persekitaran yang diberikan <code>loginUrl</code>. Jika tiada persekitaran diberikan, maka akaun akan disambungkan kepada pengeluaran (https://login.salesforce.com). Parameter rekod pilihan, <code>options</code>, boleh diberikan untuk menentukan sifat tambahan. Rekod boleh mengandungi medan berikut:    <ul><li><code>CreateNavigationProperties</code> : Logik (true/false) yang menetapkan sama ada hendak menjana sifat navigasi pada nilai yang dikembalikan (lalai adalah false).</li><li><code>ApiVersion</code> : Versi API Salesforce untuk digunakan bagi pertanyaan ini. Apabila tidak ditentukan, versi API 29.0 digunakan.</li><li><code>Timeout</code> : Tempoh yang mengawal berapa lama perlu menunggu sebelum menghentikan permintaan kepada pelayan. Nilai lalai adalah khusus sumber.</li></ul>    



## Category
Accessing data
