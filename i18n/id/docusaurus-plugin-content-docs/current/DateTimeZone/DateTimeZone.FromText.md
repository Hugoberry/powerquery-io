---
title: DateTimeZone.FromText
---

# DateTimeZone.FromText


## Description

Membuat datetimezone dari format datetimezone lokal, universal, dan kustom.


## Syntax

```powerquery
DateTimeZone.FromText(
    text as text,
    optional options as any
) as datetimezone
```


## Details

Membuat nilai <code>datetimezone</code> dari representasi tekstual, <code>text</code>. Parameter <code>catatan</code> opsional, <code>options</code> dapat diberikan untuk menentukan properti tambahan. <code>Catatan</code> dapat berisi bidang berikut:<ul>   <li><code>Format</code>: Nilai <code>text</code> menunjukkan format yang akan digunakan. Untuk detail selengkapnya, buka https://go.microsoft.com/fwlink/?linkid=2180104 dan https://go.microsoft.com/fwlink/?linkid=2180105. Menghilangkan bidang ini atau mengisi <code>null</code> akan menghasilkan penguraian tanggal menggunakan upaya terbaik.</li>   <li><code>Kultur</code>: Ketika <code>Format</code> bukan null, <code>Kultur</code> mengontrol beberapa penentu format. Misalnya, dalam <code>"en-US"</code> <code>"MMM"</code> adalah <code>"Jan", "Feb", "Mar", ...</code>, sementara di <code>"ru-RU"</code> <code>"MMM"</code> adalah <code>"янв", "фев", "мар", ...</code>. Ketika <code>Format</code> adalah <code>null</code>, <code>Kultur</code> mengontrol format default yang akan digunakan. Ketika <code>Kultur</code> adalah <code>null</code> atau dihilangkan, <code>Culture.Current</code> digunakan.</li></ul>Untuk mendukung alur kerja warisan, <code>options</code> juga dapat berupa nilai teks. Ini memiliki perilaku yang sama seperti jika <code>options</code><code> = [Format = null, Kultur = <code>options</code>]</code>.


## Examples

### Example #1 
Mengonversi &lt;code&gt;&#34;2010-12-31T01:30:00-08:00&#34;&lt;/code&gt; ke nilai &lt;code&gt;datetimezone&lt;/code&gt;.
```powerquery
DateTimeZone.FromText("2010-12-31T01:30:00-08:00")
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 1, 30, 0, -8, 0)
```


### Example #2 
Konversi menggunakan format kustom dan budaya Jerman.
```powerquery
DateTimeZone.FromText("30 Dez 2010 02:04:50.369730 +02:00", [Format="dd MMM yyyy HH:mm:ss.ffffff zzz", Culture="de-DE"])
```

Result: 
```powerquery
#datetimezone(2010, 12, 30, 2, 4, 50.36973, 2, 0)
```


### Example #3 
Konversi menggunakan ISO 8601.
```powerquery
DateTimeZone.FromText("2009-06-15T13:45:30.0000000-07:00", [Format="O", Culture="en-US"])
```

Result: 
```powerquery
#datetimezone(2009, 6, 15, 13, 45, 30, -7, 0)
```




## Category
DateTimeZone
