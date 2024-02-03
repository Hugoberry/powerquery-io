---
title: DateTime.FromText
---

# DateTime.FromText


## Description

Membuat datetimezone dari format datetime lokal dan universal.


## Syntax

```powerquery
DateTime.FromText(
    text as text,
    optional options as any
) as datetime
```


## Details

Membuat nilai <code>datetime</code> dari representasi tekstual, <code>text</code>. Parameter <code>catatan</code> opsional, <code>options</code> dapat diberikan untuk menentukan properti tambahan. <code>Catatan</code> dapat berisi bidang berikut:<ul>   <li><code>Format</code>: Nilai <code>text</code> menunjukkan format yang akan digunakan. Untuk detail selengkapnya, buka https://go.microsoft.com/fwlink/?linkid=2180104 dan https://go.microsoft.com/fwlink/?linkid=2180105. Menghilangkan bidang ini atau mengisi <code>null</code> akan menghasilkan penguraian tanggal menggunakan upaya terbaik.</li>   <li><code>Kultur</code>: Ketika <code>Format</code> bukan null, <code>Kultur</code> mengontrol beberapa penentu format. Misalnya, dalam <code>"en-US"</code> <code>"MMM"</code> adalah <code>"Jan", "Feb", "Mar", ...</code>, sementara di <code>"ru-RU"</code> <code>"MMM"</code> adalah <code>"янв", "фев", "мар", ...</code>. Ketika <code>Format</code> adalah <code>null</code>, <code>Kultur</code> mengontrol format default yang akan digunakan. Ketika <code>Kultur</code> adalah <code>null</code> atau dihilangkan, <code>Culture.Current</code> digunakan.</li></ul>Untuk mendukung alur kerja warisan, <code>options</code> juga dapat berupa nilai teks. Ini memiliki perilaku yang sama seperti jika <code>options</code><code> = [Format = null, Kultur = <code>options</code>]</code>.


## Examples

### Example #1 
Mengonversi &lt;code&gt;&#34;2010-12-31T01:30:00&#34;&lt;/code&gt; ke nilai tanggalwaktu.
```powerquery
DateTime.FromText("2010-12-31T01:30:25")
```

Result: 
```powerquery
#datetime(2010, 12, 31, 1, 30, 25)
```


### Example #2 
Mengonversi&lt;code&gt;&#34;2010-12-31T01:30:00.121212&#34;&lt;/code&gt; ke nilai tanggalwaktu.
```powerquery
DateTime.FromText("30 Dez 2010 02:04:50.369730", [Format="dd MMM yyyy HH:mm:ss.ffffff", Culture="de-DE"])
```

Result: 
```powerquery
#datetime(2010, 12, 30, 2, 4, 50.36973)
```


### Example #3 
Mengonversi &lt;code&gt;&#34;2010-12-31T01:30:00&#34;&lt;/code&gt; ke nilai tanggalwaktu.
```powerquery
DateTime.FromText("2000-02-08T03:45:12Z", [Format="yyyy-MM-dd'T'HH:mm:ss'Z'", Culture="en-US"])
```

Result: 
```powerquery
#datetime(2000, 2, 8, 3, 45, 12)
```


### Example #4 
Mengonversi &lt;code&gt;&#34;20101231T013000&#34;&lt;/code&gt; ke nilai tanggalwaktu.
```powerquery
DateTime.FromText("20101231T013000", [Format="yyyyMMdd'T'HHmmss", Culture="en-US"])
```

Result: 
```powerquery
#datetime(2010, 12, 31, 1, 30, 0)
```




## Category
DateTime
