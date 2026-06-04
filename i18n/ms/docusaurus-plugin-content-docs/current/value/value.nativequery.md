---
title: Value.NativeQuery
---

# Value.NativeQuery


Menilai pertanyaan terhadap sasaran.


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

Menilai `query` terhadap `target` menggunakan parameter yang ditentukan dalam `parameters` dan opsyen yang ditentukan dalam `options`.

Output pertanyaan ditakrifkan oleh `target`.

`target` memberikan konteks untuk operasi yang dijelaskan oleh `query`.

`query` menjelaskan pertanyaan yang akan dilaksanakan terhadap `target`. `query` diungkapkan dengan cara yang khusus untuk `target` (contohnya, kenyataan T-SQL).

Nilai `parameters` pilihan mungkin mengandungi sama ada senarai atau rekod yang sesuai untuk membekalkan nilai parameter yang dijangka oleh `query`.

Rekod `options` pilihan mungkin mengandungi opsyen yang mempengaruhi kelakuan penilaian `query` terhadap `target`. Opsyen ini adalah khusus untuk `target`.



## Category
Values
