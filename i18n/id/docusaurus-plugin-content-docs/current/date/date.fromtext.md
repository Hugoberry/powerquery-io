---
title: Date.FromText
---

# Date.FromText


Membuat Tanggal dari format Tanggal lokal, universal, dan kustom.


## Syntax

```powerquery
Date.FromText(
    text as text,
    optional options as any
) as date
```


## Remarks

Membuat nilai tanggal dari representasi tekstual.

-   `text`: Nilai teks yang akan dikonversi ke tanggal.
-   `options`: `record` opsional yang dapat diberikan untuk menentukan properti tambahan. `record` dapat berisi bidang berikut:
    -   `Format`: Nilai `text` yang menunjukkan format yang akan digunakan. Untuk detail selengkapnya, buka https://go.microsoft.com/fwlink/?linkid=2180104 dan https://go.microsoft.com/fwlink/?linkid=2180105. Jika bidang ini tidak ditentukan atau jika Anda memberikan `null`, tanggal akan diuraikan menggunakan upaya terbaik.
    -   `Culture`: Jika `Format` bukan null, `Culture` mengontrol beberapa penentu format. Misalnya, `"MMM"` dalam `"en-US"` adalah `"Jan", "Feb", "Mar", ...`. Sedangkan dalam `"ru-RU"`, `"MMM"` adalah `"янв", "фев", "мар", ...`. Jika `Format` bernilai `null`, `Culture` mengontrol format default yang akan digunakan. Jika `Culture` bernilai `null` atau tidak ditentukan, `Culture.Current` akan digunakan.

Untuk mendukung alur kerja lama, `options` juga dapat berupa nilai teks. Ini memiliki perilaku yang sama halnya jika `options = [Format = null, Culture = options]`.


## Examples

### Example #1
Mengkonversi `"2010-12-31"` ke nilai `date`.
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


### Example #4
Konversikan tanggal teks Italia dengan singkatan bulan di kolom Tanggal Diposting ke nilai tanggal.
```powerquery
let
    Source = #table(type table [Account Code = text, Posted Date = text, Sales = number],
    {
        {"US-2004", "20 gen. 2023", 580},
        {"CA-8843", "18 lug. 2024", 280},
        {"PA-1274", "12 gen. 2023", 90},
        {"PA-4323", "14 apr. 2023", 187},
        {"US-1200", "14 dic. 2023", 350},
        {"PTY-507", "4 giu. 2024", 110}
    }),
    #"Converted Date" = Table.TransformColumns(
        Source,
        {"Posted Date", each Date.FromText(_, [Culture = "it-IT"]), type date}
    )
in
    #"Converted Date"
```

Result: 
```powerquery
#table(type table [Account Code = text, Posted Date = date, Sales = number],
{
    {"US-2004", #date(2023, 1, 20), 580},
    {"CA-8843", #date(2024, 7, 18), 280},
    {"PA-1274", #date(2023, 1, 12), 90},
    {"PA-4323", #date(2023, 4, 14), 187},
    {"US-1200", #date(2023, 12, 14), 350},
    {"PTY-507", #date(2024, 6, 4), 110}
})
```




## Category
Date
