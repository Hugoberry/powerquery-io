---
title: Date.From
---

# Date.From


Mencipta tarikh daripada nilai yang ditentukan.


## Syntax

```powerquery
Date.From(
    value as any,
    optional culture as text
) as date
```


## Remarks

Mengembalikan nilai tarikh daripada nilai yang diberikan.

-   `value`: Nilai untuk ditukar kepada tarikh. Jika nilai yang diberikan ialah `nol`, fungsi ini mengembalikan `nol`. Jika nilai yang diberikan ialah `tarikh`, `nilai` dikembalikan. Nilai jenis berikut boleh ditukar kepada nilai `tarikh`:
    -   `teks`: Nilai `tarikh` daripada perwakilan teks. Rujuk `Date.FromText` untuk butiran.
    -   `datetime`: Komponen tarikh bagi `value`.
    -   `datetimezone`: Komponen tarikh bagi tarikhmasa setempat yang bersamaan dengan `value`.
    -   `nombor`: Komponen tarikh bagi tarikhmasa bersamaan dengan nombor titik apung yang komponen kamirannya ialah bilangan hari sebelum atau selepas tengah malam, 30 Disember 1899 dan komponen pecahannya mewakili masa pada hari tersebut dibahagi dengan 24. Sebagai contoh, tengah malam, 31 Disember 1899 diwakili oleh 1.0; 6 P.G., 1 Januari 1900 diwakili oleh 2.25; tengah malam, 29 Disember 1899 diwakili oleh -1.0; dan 6 P.G., 29 Disember 1899 diwakili oleh -1.25. Nilai asas ialah tengah malam, 30 Disember 1899. Nilai minimum ialah tengah malam, 1 Januari 0100. Nilai maksimum ialah saat terakhir 31 Disember 9999.
    -   Jika `value` jenis lain, ralat dikembalikan.
-   `culture`: Budaya nilai yang diberikan (sebagai contoh, "en-US").


## Examples

### Example #1
Tukar tarikh dan masa yang ditentukan kepada nilai tarikh.
```powerquery
Date.From(#datetime(1899, 12, 30, 06, 45, 12))
```

Result: 
```powerquery
#date(1899, 12, 30)
```


### Example #2
Tukar nombor yang ditentukan kepada nilai tarikh.
```powerquery
Date.From(43910)
```

Result: 
```powerquery
#date(2020, 3, 20)
```


### Example #3
Tukar tarikh teks Jerman dalam lajur Tarikh yang Disiarkan kepada nilai tarikh.
```powerquery
let
    Source = #table(type table [Account Code = text, Posted Date = text, Sales = number],
    {
        {"US-2004", "20 Januar 2023", 580},
        {"CA-8843", "18 Juli, 2023", 280},
        {"PA-1274", "12 Januar, 2022", 90},
        {"PA-4323", "14 April 2023", 187},
        {"US-1200", "14 Dezember, 2022", 350},
        {"PTY-507", "4 Juni, 2023", 110}
    }),
    #"Filtered rows" = Table.TransformColumns(
        Source,
        {"Posted Date", each Date.From(_, "de-DE"), type date}
    )
in
    #"Filtered rows"
```

Result: 
```powerquery
#table(type table [Account Code = text, Posted Date = date, Sales = number],
{
    {"US-2004", #date(2023, 1, 20), 580},
    {"CA-8843", #date(2023, 7, 18), 280},
    {"PA-1274", #date(2022, 1, 12), 90},
    {"PA-4323", #date(2023, 4, 14), 187},
    {"US-1200", #date(2022, 12, 14), 350},
    {"PTY-507", #date(2023, 6, 4), 110}
})
```




## Category
Date
