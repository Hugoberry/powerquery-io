---
title: Salesforce.Reports
---

# Salesforce.Reports


## Description

Mengembalikan laporan dari akun Salesforce.


## Syntax

```powerquery
Salesforce.Reports(
    optional loginUrl as text,
    optional options as record
) as table
```


## Details

Menghasilkan laporan di akun Salesforce yang diberikan dalam kredensial. Akun akan disambungkan melalui lingkungan <code>loginUrl</code> yang disediakan. Jika tidak ada lingkungan yang disediakan, akun akan tersambung ke produksi (https://login.salesforce.com). Parameter catatan opsional, <code>options</code>, dapat diberikan untuk menentukan properti tambahan. Catatan dapat berisi bidang berikut:    <ul><li><code>ApiVersion</code> : Versi API Salesforce yang digunakan untuk kueri ini. Versi API 29.0 akan digunakan jika belum ditetapkan.</li><li><code>Timeout</code> : Durasi yang mengontrol lama waktu tunggu sebelum mengabaikan permintaan ke server. Nilai defaultnya bergantung khusus pada sumber.</li></ul>    



## Category
Accessing data
