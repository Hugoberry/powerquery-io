---
title: Time.FromText
---

# Time.FromText


## Description

Membuat Waktu dari format Waktu lokal dan universal, serta kustom.


## Syntax

```powerquery
Time.FromText(
    text as text,
    optional options as any
) as time
```


## Details

Membuat nilai <code>time</code> dari representasi tekstual, <code>text</code>. Parameter <code>catatan</code> opsional, <code>options</code> dapat diberikan untuk menentukan properti tambahan. <code>Catatan</code> dapat berisi bidang berikut:<ul>   <li><code>Format</code>: Nilai <code>text</code> menunjukkan format yang akan digunakan. Untuk detail selengkapnya, buka https://go.microsoft.com/fwlink/?linkid=2180104 dan https://go.microsoft.com/fwlink/?linkid=2180105. Menghilangkan bidang ini atau mengisi <code>null</code> akan menghasilkan penguraian waktu menggunakan upaya terbaik.</li>   <li><code>Kultur</code>: Ketika <code>Format</code> bukan null, <code>Kultur</code> mengontrol beberapa penentu format. Misalnya, dalam <code>"en-US"</code> <code>"tt"</code> adalah <code>"AM" atau "PM"</code>, sementara di <code>"ar-EG"</code> <code>"tt"</code> adalah <code>"ص" or "م"</code>. Ketika <code>Format</code> adalah <code>null</code>, <code>Kultur</code> format default yang akan digunakan. Ketika <code>Kultur</code> adalah <code>null</code> atau dihilangkan, <code>Culture.Current</code> digunakan.</li></ul>Untuk mendukung alur kerja warisan, <code>options</code> juga dapat berupa nilai teks. Ini memiliki perilaku yang sama seperti jika <code>options</code><code> = [Format = null, Kultur = <code>options</code>]</code>.


## Examples

### Example #1 
Mengkonversi &lt;code&gt;&#34;10:12:31am&#34;&lt;/code&gt; ke nilai Waktu.
```powerquery
Time.FromText("10:12:31am")
```

Result: 
```powerquery
#time(10, 12, 31)
```


### Example #2 
Mengonversi &lt;code&gt;&#34;1012&#34;&lt;/code&gt; ke dalam nilai Time.
```powerquery
Time.FromText("1012")
```

Result: 
```powerquery
#time(10, 12, 00)
```


### Example #3 
Mengonversi &lt;code&gt;&#34;10&#34;&lt;/code&gt; ke dalam nilai Time.
```powerquery
Time.FromText("10")
```

Result: 
```powerquery
#time(10, 00, 00)
```




## Category
Time
