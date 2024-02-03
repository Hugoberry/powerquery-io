---
title: DateTime.FromText
---

# DateTime.FromText


## Description

Mencipta datetimezone daripada format datetime tempatan dan universal.


## Syntax

```powerquery
DateTime.FromText(
    text as text,
    optional options as any
) as datetime
```


## Details

Mencipta nilai <code>datetime</code> daripada perwakilan teks, <code>text</code>. Parameter <code>record</code> pilihan, <code>options</code>, boleh diberikan untuk menentukan sifat tambahan. <code>record</code> boleh mengandungi medan berikut:<ul>   <li><code>Format</code>: Nilai <code>text</code> yang menunjukkan format untuk digunakan. Untuk butiran lanjut, pergi ke https://go.microsoft.com/fwlink/?linkid=2180104 dan https://go.microsoft.com/fwlink/?linkid=2180105. Mengabaikan medan ini atau memberikan <code>null</code> akan menyebabkan penghuraian tarikh menggunakan usaha terbaik.</li>   <li><code>Culture</code>: Apabila <code>Format</code> bukan nol, <code>Culture</code> mengawal sesetengah penentu format. Contohnya, dalam <code>"en-US"</code> <code>"MMM"</code> ialah <code>"Jan", "Feb", "Mar", ...</code>, sementara dalam <code>"ru-RU"</code> <code>"MMM"</code> ialah <code>"янв", "фев", "мар", ...</code>. Apabila <code>Format</code> adalah <code>null</code>, <code>Culture</code> mengawal format lalai untuk digunakan. Apabila <code>Culture</code> adalah <code>null</code> atau diabaikan, <code>Culture.Current</code> digunakan.</li></ul>Untuk menyokong aliran kerja legasi, <code>options</code> boleh juga merupakan nilai teks. Ini mempunyai tingkah laku yang sama seperti jika <code>options</code><code> = [Format = null, Culture = <code>options</code>]</code>.


## Examples

### Example #1 
Tukar &lt;code&gt;&#34;2010-12-31T01:30:00&#34;&lt;/code&gt; menjadi nilai tarikhmasa.
```powerquery
DateTime.FromText("2010-12-31T01:30:25")
```

Result: 
```powerquery
#datetime(2010, 12, 31, 1, 30, 25)
```


### Example #2 
Tukar &lt;code&gt;&#34;2010-12-31T01:30:00.121212&#34;&lt;/code&gt; menjadi nilai tarikhmasa.
```powerquery
DateTime.FromText("30 Dez 2010 02:04:50.369730", [Format="dd MMM yyyy HH:mm:ss.ffffff", Culture="de-DE"])
```

Result: 
```powerquery
#datetime(2010, 12, 30, 2, 4, 50.36973)
```


### Example #3 
Tukar &lt;code&gt;&#34;2010-12-31T01:30:00&#34;&lt;/code&gt; menjadi nilai tarikhmasa.
```powerquery
DateTime.FromText("2000-02-08T03:45:12Z", [Format="yyyy-MM-dd'T'HH:mm:ss'Z'", Culture="en-US"])
```

Result: 
```powerquery
#datetime(2000, 2, 8, 3, 45, 12)
```


### Example #4 
Tukar &lt;code&gt;&#34;20101231T013000&#34;&lt;/code&gt; menjadi nilai tarikhmasa.
```powerquery
DateTime.FromText("20101231T013000", [Format="yyyyMMdd'T'HHmmss", Culture="en-US"])
```

Result: 
```powerquery
#datetime(2010, 12, 31, 1, 30, 0)
```




## Category
DateTime
