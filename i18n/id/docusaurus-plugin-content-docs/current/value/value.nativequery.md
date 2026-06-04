---
title: Value.NativeQuery
---

# Value.NativeQuery


Mengevaluasi kueri terhadap target.


## Syntax

```powerquery
Value.NativeQuery(
    target as any,
    query as text,
    optional parameters as any,
    optional options as record
) as any
```


## Remarks

Mengevaluasi `query` terhadap`target` menggunakan parameter yang ditentukan di `parameters` dan opsi yang ditentukan di `options`.

Output kueri ditentukan oleh `target`.

`target` memberikan konteks untuk operasi yang dideskripsikan oleh `query`.

`query` mendeskripsikan kueri untuk dijalankan terhadap `target`. `query` diekspresikan dengan cara yang khusus untuk `target` (misalnya, pernyataan T-SQL ).

Nilai `parameters` opsional bisa berisi baik daftar ataupun catatan sebagaimana diperlukan untuk menyediakan nilai parameter yang diharapkan oleh `query`.

Catatan `options` opsional dapat berisi opsi yang memengaruhi perilaku evaluasi dari `query` terhadap `target`. Opsi ini khusus untuk `target`.



## Category
Values
