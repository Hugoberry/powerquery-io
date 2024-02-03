---
title: Time.ToText
---

# Time.ToText


## Description

Menghasilkan representasi tekstual dari nilai waktu.


## Syntax

```powerquery
Time.ToText(
    time as time,
    optional options as any,
    optional culture as text
) as text
```


## Details

Menghasilkan representasi tekstual <code>time</code>. Parameter <code>catatan</code> opsional, <code>options</code>, dapat diberikan untuk menentukan properti tambahan. <code>culture</code> hanya digunakan untuk alur kerja lama (lihat di bawah). <code>Catatan</code> dapat berisi bidang berikut:<ul>   <li><code>Format</code>: Nilai <code>text</code> menunjukkan format yang akan digunakan. Untuk detail selengkapnya, buka https://go.microsoft.com/fwlink/?linkid=2180104 dan https://go.microsoft.com/fwlink/?linkid=2180105. Menghilangkan bidang ini atau mengisi <code>null</code> akan mengakibatkan pemformatan tanggal menggunakan default yang ditentukan oleh <code>Kultur</code></li>.   <li><code>Kultur</code>: Ketika <code>Format</code> tidak null, <code>Kultur</code> mengontrol beberapa penentu format. Misalnya, dalam<code>"en-US"</code> <code>"tt"</code> adalah <code>"AM" atau "PM"</code>, sementara dalam <code>"ar-EG"</code> <code>"tt"</code> adalah <code>"ص" atau "م"</code>. Ketika <code>Format</code> adalah <code>null</code>, <code>Kultur</code> mengontrol format default yang akan digunakan. Ketika <code>Kultur</code> adalah <code>null</code> atau dihilangkan, <code>Culture.Current</code> digunakan.</li></ul>Untuk mendukung alur kerja lama, <code>options</code> dan <code>culture</code> juga dapat berupa nilai teks. Ini memiliki perilaku yang sama seperti <code>options</code><code> = [Format = <code>options</code>, Kultur = <code>culture</code>]</code>.


## Examples

### Example #1 
Mengonversi &lt;code&gt;#time(01, 30, 25)&lt;/code&gt; ke nilai &lt;code&gt;text&lt;/code&gt;. &lt;i&gt;Output hasil dapat bervariasi tergantung nilai saat ini.&lt;/i&gt;
```powerquery
Time.ToText(#time(11, 56, 2))
```

Result: 
```powerquery
"11:56 AM"
```


### Example #2 
Konversi menggunakan format kustom dan budaya Jerman.
```powerquery
Time.ToText(#time(11, 56, 2), [Format="hh:mm", Culture="de-DE"])
```

Result: 
```powerquery
"11:56"
```


### Example #3 
Konversi menggunakan format waktu standar.
```powerquery
Time.ToText(#time(11, 56, 2), [Format="T", Culture="de-DE"])
```

Result: 
```powerquery
"11:56:02"
```




## Category
Time
