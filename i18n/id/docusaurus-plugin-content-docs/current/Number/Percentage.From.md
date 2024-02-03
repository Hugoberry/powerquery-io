---
title: Percentage.From
---

# Percentage.From


## Description

Menghasilkan nilai persentase dari nilai yang diberikan.


## Syntax

```powerquery
Percentage.From(
    value as any,
    optional culture as text
) as number
```


## Details

Menghasilkan nilai <code>percentage</code> dari yang diberikan <code>value</code>. Jika nilai yang diberikan <code>value</code> is <code>null</code>, <code>Percentage.From</code> menghasilkan <code>null</code>.  Jika nilai yang diberikan <code>value</code> adalah <code>text</code> dengan simbol persen di belakang, makan angka desimal yang dikonversi akan dihasilkan. Sebaliknya, lihat <code>Number.From</code> untuk mengonversinya ke nilai <code>value</code>. <code>culture</code> opsional juga dapat disediakan (misalnya, "en-US").


## Examples

### Example #1 
Dapatkan nilai &lt;code&gt;persentase&lt;/code&gt; dari &lt;code&gt;&#34;12,3%&#34;&lt;/code&gt;.
```powerquery
Percentage.From("12.3%")
```

Result: 
```powerquery
0.123
```




## Category
Number.Conversion and formatting
