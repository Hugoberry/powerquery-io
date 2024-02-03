---
title: Snowflake.Databases
---

# Snowflake.Databases


## Description

Import data daripada gudang Snowflake Computing.


## Syntax

```powerquery
Snowflake.Databases(
    server as text,
    warehouse as text,
    optional options as record
) as table
```


## Details

Mengembalikan jadual yang menyenaraikan jadual dalam <code>gudang</code> Pengiraan Snowflake yang terletak di <code>pelayan</code>. Parameter rekod pilihan, <code>opsyen</code>, boleh ditentukan untuk mengawal opsyen yang berikut:<ul><li><code> Peranan</code>: Nilai teks untuk digunakan sebagai nama Peranan untuk sambungan.</li><li><code>CreateNavigationProperties</code>: Nilai logik (benar/palsu) yang menetapkan sama ada mahu menjana sifat navigasi pada nilai yang dikembalikan (lalai ialah benar)</li><li><code>ConnectionTimeout</code>: Bilangan saat untuk menunggu respons rangkaian daripada Snowflake.</li><li><code>CommandTimeout</code>: Bilangan saat untuk menunggu pertanyaan dilaksanakan.</li></ul>    


## Examples

### Example #1 
Menyenaraikan jadual dalam gudang Snowflake.
```powerquery
Snowflake.Databases("contoso.snowflakecomputing.com", "CONTOSO_WH")
```



