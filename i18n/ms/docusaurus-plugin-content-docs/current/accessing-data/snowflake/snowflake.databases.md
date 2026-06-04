---
title: Snowflake.Databases
---

# Snowflake.Databases


Import data daripada gudang Snowflake Computing.


## Syntax

```powerquery
Snowflake.Databases(
    server as text,
    warehouse as text,
    optional options as record
) as table
```


## Remarks

Mengembalikan jadual yang menyenaraikan jadual dalam `gudang` Pengiraan Snowflake yang terletak di `pelayan`. Parameter rekod pilihan, `opsyen`, boleh ditentukan untuk mengawal opsyen yang berikut:

-   `Peranan`: Nilai teks untuk digunakan sebagai nama Peranan untuk sambungan.
-   `CreateNavigationProperties`: Nilai logik (benar/palsu) yang menetapkan sama ada mahu menjana sifat navigasi pada nilai yang dikembalikan (lalai ialah benar)
-   `ConnectionTimeout`: Bilangan saat untuk menunggu respons rangkaian daripada Snowflake.
-   `CommandTimeout`: Bilangan saat untuk menunggu pertanyaan dilaksanakan.


## Examples

### Example #1
Menyenaraikan jadual dalam gudang Snowflake.
```powerquery
Snowflake.Databases("contoso.snowflakecomputing.com", "CONTOSO_WH")
```



