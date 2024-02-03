---
title: DateTimeZone.ToText
---

# DateTimeZone.ToText


## Description

Menghasilkan representasi tekstual dari nilai datetimezone.


## Syntax

```powerquery
DateTimeZone.ToText(
    dateTimeZone as datetimezone,
    optional options as any,
    optional culture as text
) as text
```


## Details

Menghasilkan representasi tekstual <code>dateTimeZone</code>. Parameter <code>catatan</code> opsional, <code>options</code>, dapat diberikan untuk menentukan properti tambahan. <code>culture</code> hanya digunakan untuk alur kerja warisan (lihat di bawah). <code>Catatan</code> dapat berisi bidang berikut:<ul>   <li><code>Format</code>: Nilai <code>text</code> menunjukkan format yang akan digunakan. Untuk detail selengkapnya, buka https://go.microsoft.com/fwlink/?linkid=2180104 dan https://go.microsoft.com/fwlink/?linkid=2180105. Menghilangkan bidang ini atau mengisi <code>null</code> akan mengakibatkan pemformatan tanggal menggunakan default yang telah ditentukan oleh <code>Kultur</code>.</li>   <li><code>Kultur</code>: Ketika <code>Format</code> tidak null, <code>Kultur</code> mengontrol beberapa penentu format. Misalnya, dalam <code>"en-US"</code> <code>"MMM"</code> adalah <code>"Jan", "Feb", "Mar", ...</code>, sementara dalam <code>"ru-RU"</code> <code>"MMM"</code> adalah <code>"янв", "фев", "мар", ...</code>. Ketika <code>Format</code> adalah <code>null</code>, <code>Kultur</code> mengontrol format default yang akan digunakan. Ketika <code>Kultur</code> adalah <code>null</code> atau dihilangkan, <code>Culture.Current</code> digunakan.</li></ul>Untuk mendukung alur kerja warisan, <code>options</code> dan <code>culture</code> juga dapat berupa nilai teks. Ini memiliki perilaku yang sama seperti <code>options</code><code> = [Format = <code>options</code>, Kultur = <code>culture</code>]</code>.


## Examples

### Example #1 
Mengonversi &lt;code&gt;#datetimezone(2010, 12, 31, 01, 30, 25, 2, 0)&lt;/code&gt; ke nilai &lt;code&gt;text&lt;/code&gt;. &lt;i&gt;Output hasil dapat bervariasi tergantung pada kultur saat ini.&lt;/i&gt;
```powerquery
DateTimeZone.ToText(#datetimezone(2010, 12, 31, 01, 30, 25, 2, 0))
```

Result: 
```powerquery
"12/31/2010 1:30:25 AM +02:00"
```


### Example #2 
Konversi menggunakan format kustom dan budaya Jerman.
```powerquery
DateTimeZone.ToText(#datetimezone(2010, 12, 30, 2, 4, 50.36973, -8,0), [Format="dd MMM yyyy HH:mm:ss.ffffff zzz", Culture="de-DE"])
```

Result: 
```powerquery
"30 Dez 2010 02:04:50.369730 -08:00"
```


### Example #3 
Konversi menggunakan pola ISO 8601.
```powerquery
DateTimeZone.ToText(#datetimezone(2000, 2, 8, 3, 45, 12, 2, 0),[Format="O", Culture="en-US"])
```

Result: 
```powerquery
"2000-02-08T03:45:12.0000000+02:00"
```




## Category
DateTimeZone
