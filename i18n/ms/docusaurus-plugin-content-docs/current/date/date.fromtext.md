---
title: Date.FromText
---

# Date.FromText


Mencipta Tarikh daripada format Tarikh setempat, universal dan tersuai.


## Syntax

```powerquery
Date.FromText(
    text as text,
    optional options as any
) as date
```


## Remarks

Cipta nilai tarikh daripada perwakilan teks.

-   `text`: Nilai teks untuk ditukar kepada tarikh.
-   `options`: `Rekod` pilihan yang boleh diberikan untuk menentukan sifat tambahan. `Rekod` boleh mengandungi medan berikut:
    -   `Format`: Nilai `teks` menunjukkan format untuk digunakan. Untuk butiran lanjut, pergi ke https://go.microsoft.com/fwlink/?linkid=2180104 dan https://go.microsoft.com/fwlink/?linkid=2180105. Mengabaikan medan ini atau menyediakan `nol` menghasilkan penghuraian tarikh menggunakan usaha terbaik.
    -   `Kultur`: Apabila `Format` bukan nol, `Kultur` mengawal beberapa penentu format. Sebagai contoh, dalam `"en-US"` `"MMM"` is `"Jan", "Feb", "Mar", ...`, sementara dalam `"ru-RU"` `"MMM"` ialah `"янв", "фев", "мар", ...`. Apabila `Format` ialah `nol`, `Budaya` mengawal format lalai untuk digunakan. Apabila `Budaya` ialah `nol` atau dikecualikan, `Culture.Current` digunakan.

Untuk menyokong aliran kerja legasi, `options` boleh juga menjadi nilai teks. Perkara ini mempunyai tingkah laku yang sama seolah-olah `options = [Format = null, Culture = options]`.


## Examples

### Example #1
Tukar `"2010-12-31"` menjadi nilai `date`.
```powerquery
Date.FromText("2010-12-31")
```

Result: 
```powerquery
#date(2010, 12, 31)
```


### Example #2
Tukar menggunakan format tersuai dan budaya Jerman.
```powerquery
Date.FromText("30 Dez 2010", [Format="dd MMM yyyy", Culture="de-DE"])
```

Result: 
```powerquery
#date(2010, 12, 30)
```


### Example #3
Cari tarikh dalam kalendar Gregorian yang sepadan dengan permulaan 1400 dalam kalendar Hijrah.
```powerquery
Date.FromText("1400", [Format="yyyy", Culture="ar-SA"])
```

Result: 
```powerquery
#date(1979, 11, 20)
```


### Example #4
Tukar tarikh teks Itali dengan bulan yang singkat dalam lajur Tarikh yang Disiarkan kepada nilai tarikh.
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
