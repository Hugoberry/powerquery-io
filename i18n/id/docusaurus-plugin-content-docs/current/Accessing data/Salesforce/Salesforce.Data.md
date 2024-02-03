---
title: Salesforce.Data
---

# Salesforce.Data


## Description

Mengembalikan objek dari akun Salesforce.


## Syntax

```powerquery
Salesforce.Data(
    optional loginUrl as any,
    optional options as record
) as table
```


## Details

Menghasilkan objek di akun Salesforce yang diberikan dalam kredensial. Akun akan disambungkan melalui lingkungan <code>loginUrl</code> yang disediakan. Jika tidak ada lingkungan yang disediakan, akun akan tersambung ke produksi (https://login.salesforce.com). Parameter catatan opsional, <code>options</code>, dapat diberikan untuk menentukan properti tambahan. Catatan dapat berisi bidang berikut:    <ul><li><code>CreateNavigationProperties</code> : Logika (true/false) yang mengatur apakah akan membuat properti navigasi pada nilai yang dihasilkan atau tidak (defaultnya adalah true).</li><li><code>ApiVersion</code> : Versi API Salesforce yang digunakan untuk kueri ini. Versi API 29.0 akan digunakan jika belum ditetapkan.</li><li><code>Timeout</code> : Durasi yang mengontrol lama waktu tunggu sebelum mengabaikan permintaan ke server. Nilai defaultnya bergantung khusus pada sumber.</li></ul>    



## Category
Accessing data
