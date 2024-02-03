---
title: SapHana.Database
---

# SapHana.Database


## Description

Mengembalikan pakej dalam pangkalan data SAP HANA.


## Syntax

```powerquery
SapHana.Database(
    server as text,
    optional options as record
) as table
```


## Details

Mengembalikan jadual pakej berbilang dimensi daripada pangkalan data SAP HANA <code>server</code>. Parameter rekod pilihan, <code>options</code>, boleh ditentukan untuk mengawal opsyen berikut:    <ul><li><code>Query</code> : Pertanyaan SQL asal yang digunakan untuk mengambil data. Jika pertanyaan menghasilkan berbilang set keputusan, hanya yang pertama akan dikembalikan.</li><li><code>Distribution</code> : SapHanaDistribution yang menetapkan nilai sifat &quot;Edaran&quot; dalam rentetan sambungan. Penghalaan pernyataan ialah kaedah menilai nod pelayan yang betul bagi sistem edaran sebelum pelaksanaan pernyataan. Nilai lalai ialah SapHanaDistribution.All.</li><li><code>Implementation</code> : Menentukan pelaksanaan sambungan SAP HANA yang hendak digunakan.</li><li><code>EnableColumnBinding</code> : Mengikat pemboleh ubah pada lajur set hasil SAP HANA apabila mengambil data. Mungkin dapat meningkatkan prestasi dengan menggunakan memori yang lebih tinggi sedikit. Nilai lalai ialah palsu.</li><li><code>ConnectionTimeout</code> : Tempoh yang mengawal berapa lama perlu menunggu sebelum menghentikan percubaan untuk membuat sambungan kepada pelayan. Nilai lalai adalah 15 saat.</li><li><code>CommandTimeout</code> : Tempoh yang mengawal berapa lama pertanyaan bahagian pelayan dibenarkan berjalan sebelum ia dibatalkan. Nilai lalai ialah sepuluh minit.</li></ul>    



## Category
Accessing data
