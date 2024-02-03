---
title: Value.NativeQuery
---

# Value.NativeQuery


## Description

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


## Details

Menilai <code>query</code> terhadap <code>target</code> menggunakan parameter yang ditentukan dalam <code>parameters</code> dan opsyen yang ditentukan dalam <code>options</code>.<br />Output pertanyaan ditakrifkan oleh <code>target</code>.<br /><code>target</code> memberikan konteks untuk operasi yang dijelaskan oleh <code>query</code>.<br /><code>query</code> menjelaskan pertanyaan yang akan dilaksanakan terhadap <code>target</code>. <code>query</code> diungkapkan dengan cara yang khusus untuk <code>target</code> (contohnya, kenyataan T-SQL).<br />Nilai <code>parameters</code> pilihan mungkin mengandungi sama ada senarai atau rekod yang sesuai untuk membekalkan nilai parameter yang dijangka oleh <code>query</code>.<br />Rekod <code>options</code> pilihan mungkin mengandungi opsyen yang mempengaruhi kelakuan penilaian <code>query</code> terhadap <code>target</code>. Opsyen ini adalah khusus untuk <code>target</code>.<br />



## Category
Values
