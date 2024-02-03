---
title: Value.NativeQuery
---

# Value.NativeQuery


## Description

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


## Details

Mengevaluasi <code>query</code> terhadap<code>target</code> menggunakan parameter yang ditentukan di <code>parameters</code> dan opsi yang ditentukan di <code>options</code>.<br />Output kueri ditentukan oleh <code>target</code>.<br /><code>target</code> memberikan konteks untuk operasi yang dideskripsikan oleh <code>query</code>.<br /><code>query</code> mendeskripsikan kueri untuk dijalankan terhadap <code>target</code>. <code>query</code> diekspresikan dengan cara yang khusus untuk <code>target</code> (misalnya, pernyataan T-SQL ).<br />Nilai <code>parameters</code> opsional bisa berisi baik daftar ataupun catatan sebagaimana diperlukan untuk menyediakan nilai parameter yang diharapkan oleh <code>query</code>.<br />Catatan <code>options</code> opsional dapat berisi opsi yang memengaruhi perilaku evaluasi dari <code>query</code> terhadap <code>target</code>. Opsi ini khusus untuk <code>target</code>.<br />



## Category
Values
