---
title: Date.FromText
---

# Date.FromText


## Description

Membuat Tanggal dari format Tanggal lokal, universal, dan kustom.


## Syntax

```powerquery
Date.FromText(
    text as text,
    optional options as any
) as date
```


## Details

Membuat nilai <code>date</code> dari representasi tekstual, <code>text</code>. Parameter <code>catatan</code> opsional, <code>options</code> dapat diberikan untuk menentukan properti tambahan. <code>Catatan</code> dapat berisi bidang berikut:<ul>   <li><code>Format</code>: Nilai <code>text</code> menunjukkan format yang akan digunakan. Untuk detail selengkapnya, buka https://go.microsoft.com/fwlink/?linkid=2180104 dan https://go.microsoft.com/fwlink/?linkid=2180105. Menghilangkan bidang ini atau mengisi <code>null</code> akan menghasilkan penguraian tanggal menggunakan upaya terbaik.</li>   <li><code>Kultur</code>: Ketika <code>Format</code> bukan null, <code>Kultur</code> mengontrol beberapa penentu format. Misalnya, dalam <code>"en-US"</code> <code>"MMM"</code> adalah <code>"Jan", "Feb", "Mar", ...</code>, sementara di <code>"ru-RU"</code> <code>"MMM"</code> adalah <code>"янв", "фев", "мар", ...</code>. Ketika <code>Format</code> adalah <code>null</code>, <code>Kultur</code> mengontrol format default yang akan digunakan. Ketika <code>Kultur</code> adalah <code>null</code> atau dihilangkan, <code>Culture.Current</code> digunakan.</li></ul>Untuk mendukung alur kerja warisan, <code>options</code> juga dapat berupa nilai teks. Ini memiliki perilaku yang sama seperti jika <code>options</code><code> = [Format = null, Kultur = <code>options</code>]</code>.


## Examples

### Example #1 
Mengkonversi &lt;code&gt;&#34;2010-12-31&#34;&lt;/code&gt; ke nilai &lt;code&gt;date&lt;/code&gt;.
```powerquery
Date.FromText("2010-12-31")
```

Result: 
```powerquery
#date(2010, 12, 31)
```


### Example #2 
Konversi menggunakan format kustom dan budaya Jerman.
```powerquery
Date.FromText("30 Dez 2010", [Format="dd MMM yyyy", Culture="de-DE"])
```

Result: 
```powerquery
#date(2010, 12, 30)
```


### Example #3 
Mencari tanggal dalam kalender Gregorian yang sesuai dengan awal 1400 dalam kalender Hijriah.
```powerquery
Date.FromText("1400", [Format="yyyy", Culture="ar-SA"])
```

Result: 
```powerquery
#date(1979, 11, 20)
```




## Category
Date
