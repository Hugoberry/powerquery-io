---
title: HdInsight.Files
---

# HdInsight.Files


## Description

Menghasilkan tabel yang berisi properti dan konten blob yang ditemukan di kontainer yang ditetapkan dari kubah penyimpanan Azure.


## Syntax

```powerquery
HdInsight.Files(
    account as text,
    containerName as text
) as table
```


## Details

Menghasilkan tabel yang berisi baris untuk tiap file blob yang ditemukan di URL kontainer, <code>account</code>, dari kubah penyimpanan Azure. Tiap baris berisi properti file dan tautan ke kontennya.



## Category
Accessing data
