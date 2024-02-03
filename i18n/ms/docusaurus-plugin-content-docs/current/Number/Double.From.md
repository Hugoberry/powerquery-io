---
title: Double.From
---

# Double.From


## Description

Mencipta Berganda daripada nilai yang ditentukan.


## Syntax

```powerquery
Double.From(
    value as any,
    optional culture as text
) as number
```


## Details

Mengembalikan nilai <code>bilangan</code> Berganda daripada <code>value</code> yang ditentukan. Jika <code>value</code> yang ditentukan adalah <code>nol</code>, <code>Double.From</code> mengembalikan <code>nol</code>. Jika <code>value</code> yang ditentukan ialah <code>bilangan</code> dalam julat Berganda, <code>value</code> dikembalikan, jika tidak, ralat dikembalikan. Jika <code>value</code> adalah daripada apa-apa jenis lain, ia terlebih dahulu akan ditukarkan kepada <code>nombor</code> menggunakan <code>Number.FromText</code>. <code>culture</code> pilihan juga mungkin diberikan (sebagai contoh, "en-US").


## Examples

### Example #1 
Dapatkan nilai &lt;code&gt;nombor&lt;/code&gt; Berganda daripada &lt;code&gt;&#34;4&#34;&lt;/code&gt;.
```powerquery
Double.From("4.5")
```

Result: 
```powerquery
4.5
```




## Category
Number.Conversion and formatting
