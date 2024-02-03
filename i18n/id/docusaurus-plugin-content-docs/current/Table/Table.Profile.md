---
title: Table.Profile
---

# Table.Profile


## Description

Menghasilkan profil kolom tabel.


## Syntax

```powerquery
Table.Profile(
    table as table,
    optional additionalAggregates as list
) as table
```


## Details

Menghasilkan profil untuk kolom di <code>table</code>.<br />Informasi berikut dihasilkan untuk setiap kolom (jika berlaku):<ul>  <li>minimum</li>  <li>maksimum</li>  <li>rata-rata</li>  <li>deviasi standar</li>  <li>jumlah</li>  <li>jumlah null</li>  <li>jumlah terpisah</li></ul><br />



## Category
Table.Information
