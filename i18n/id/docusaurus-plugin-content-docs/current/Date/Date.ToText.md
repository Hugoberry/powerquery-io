---
title: Date.ToText
---

# Date.ToText


## Description

Menghasilkan representasi tekstual dari nilai tanggal.


## Syntax

```powerquery
Date.ToText(
    date as date,
    optional options as any,
    optional culture as text
) as text
```


## Details

Menghasilkan representasi tekstual <code>date</code>. Parameter <code>catatan</code> opsional, <code>options</code>, dapat diberikan untuk menentukan properti tambahan. <code>culture</code> hanya digunakan untuk alur kerja warisan (lihat di bawah). <code>Catatan</code> dapat berisi bidang berikut:<ul>   <li><code>Format</code>: Nilai <code>text</code> menunjukkan format yang akan digunakan. Untuk detail selengkapnya, buka https://go.microsoft.com/fwlink/?linkid=2180104 dan https://go.microsoft.com/fwlink/?linkid=2180105. Menghilangkan bidang ini atau mengisi <code>null</code> akan mengakibatkan pemformatan tanggal menggunakan default yang telah ditentukan oleh <code>Kultur</code>.</li>   <li><code>Kultur</code>: Ketika <code>Format</code> tidak null, <code>Kultur</code> mengontrol beberapa penentu format. Misalnya, dalam <code>"en-US"</code> <code>"MMM"</code> adalah <code>"Jan", "Feb", "Mar", ...</code>, sementara dalam <code>"ru-RU"</code> <code>"MMM"</code> adalah <code>"янв", "фев", "мар", ...</code>. Ketika <code>Format</code> adalah <code>null</code>, <code>Kultur</code> mengontrol format default yang akan digunakan. Ketika <code>Kultur</code> adalah <code>null</code> atau dihilangkan, <code>Culture.Current</code> digunakan.</li></ul>Untuk mendukung alur kerja warisan, <code>options</code> dan <code>culture</code> juga dapat berupa nilai teks. Ini memiliki perilaku yang sama seperti <code>options</code><code> = [Format = <code>options</code>, Kultur = <code>culture</code>]</code>.


## Examples

### Example #1 
Mengonversi &lt;code&gt;#date(2010, 12, 31)&lt;/code&gt; ke nilai &lt;code&gt;text&lt;/code&gt;. &lt;i&gt;Output hasil dapat bervariasi tergantung kultur saat ini.&lt;/i&gt;
```powerquery
Date.ToText(#date(2010, 12, 31))
```

Result: 
```powerquery
"12/31/2010"
```


### Example #2 
Konversi menggunakan format kustom dan budaya Jerman.
```powerquery
Date.ToText(#date(2010, 12, 31), [Format="dd MMM yyyy", Culture="de-DE"])
```

Result: 
```powerquery
"31 Dez 2010"
```


### Example #3 
Mencari tahun dalam kalender Hijriah yang sesuai dengan 1 Januari 2000 dalam kalender Gregorian.
```powerquery
Date.ToText(#date(2000, 1, 1), [Format="yyyy", Culture="ar-SA"])
```

Result: 
```powerquery
"1420"
```




## Category
Date
