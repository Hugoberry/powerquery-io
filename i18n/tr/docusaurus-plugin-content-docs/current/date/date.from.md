---
title: Date.From
---

# Date.From


Verilen değerden tarih oluşturur.


## Syntax

```powerquery
Date.From(
    value as any,
    optional culture as text
) as date
```


## Remarks

Verilen değerden bir tarih değeri döndürür.

-   `value`: Tarihe çevrilecek değer. Verilen değer `null` ise bu işlev `null` değerini döndürür. Verilen değer `date` ise döndürülen değer `value` olur. Şu türdeki değerler bir `date` değerine çevrilebilir:
    -   `text`: Metinsel gösterimden bir `date` değeri. Ayrıntılar için bakın: `Date.FromText`.
    -   `datetime`: `value` için tarih bileşeni.
    -   `datetimezone`: `value` için yerel tarih saat eşdeğerinin tarih bileşeni.
    -   `number`: Tam sayı bileşeni 30 Aralık 1899 gece yarısından önceki veya sonraki günlerin sayısı olan ve kesirli bileşeni o günkü saatin 24'e bölünmesiyle elde edilen kayan noktalı bir sayının tarih saat eşdeğerinin tarih bileşeni. Örneğin, 31 Aralık 1899 gece yarısı 1.0; 1 Ocak 1900 sabah 6 2.25; 29 Aralık 1899 gece yarısı -1.0 ve 29 Aralık 1899 sabah 6 -1.25 ile gösterilir. Temel değer 30 Aralık 1899 gece yarısıdır. Minimum değer gece yarısı, 1 Ocak 0100'dür. Maksimum değer 31 Aralık 9999'un son anıdır.
    -   `value` başka bir türdeyse, bir hata döndürülür.
-   `culture`: Verilen değerin (örneğin "en-US") kültürü.


## Examples

### Example #1
Belirtilen tarih ve saati bir tarih değerine çevir.
```powerquery
Date.From(#datetime(1899, 12, 30, 06, 45, 12))
```

Result: 
```powerquery
#date(1899, 12, 30)
```


### Example #2
Belirtilen sayıyı bir tarih değerine çevir.
```powerquery
Date.From(43910)
```

Result: 
```powerquery
#date(2020, 3, 20)
```


### Example #3
Gönderme Tarihi sütununda Almanca metin olarak yazılan tarihlerini tarih değerlerine çevir.
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
