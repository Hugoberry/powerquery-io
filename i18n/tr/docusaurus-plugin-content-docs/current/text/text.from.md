---
title: Text.From
---

# Text.From


Verilen değerden bir metin değeri oluşturur.


## Syntax

```powerquery
Text.From(
    value as any,
    optional culture as text
) as text
```


## Remarks

Belirtilen değerin metin biçimini döndürür.

-   `value`: Metne dönüştürülecek değer. Değer, `number`, `date`, `time`, `datetime`, `datetimezone`, `logical`, `duration`, or `binary` olabilir. Verilen değer `null` ise bu işlev `null` değerini döndürür.
-   `culture`: (İsteğe bağlı) Değeri metne dönüştürürken kullanılacak dil (örneğin, “en-US”).


## Examples

### Example #1
3 sayısından metin değeri oluşturur.
```powerquery
Text.From(3)
```

Result: 
```powerquery
"3"
```


### Example #2
Belirtilen tarih ve saat için metin eşdeğeri alın.
```powerquery
Text.From(#datetime(2024, 6, 24, 14, 32, 22))
```

Result: 
```powerquery
"6/24/2024 2:32:22 PM"
```


### Example #3
Belirtilen tarih ve saat için Almanca metin eşdeğeri alın.
```powerquery
Text.From(#datetime(2024, 6, 24, 14, 32, 22), "de-DE")
```

Result: 
```powerquery
"24.06.2024 14:32:22"
```


### Example #4
Onaltılık olarak kodlanmış metinden ikili bir değer alın ve değeri metne geri dönüştür.
```powerquery
Text.From(Binary.FromText("10FF", BinaryEncoding.Hex))
```

Result: 
```powerquery
"EP8="
```


### Example #5
Tablodaki Fransa verilerini içeren satırları alın ve Fransız kültürünü kullanarak tarihleri metne dönüştürin.
```powerquery
let
    Source = #table(type table [Company ID = text, Country = text, Date = date],
    {
        {"JS-464", "USA", #date(2024, 3, 24)},
        {"LT-331", "France", #date(2024, 10, 5)},
        {"XE-100", "USA", #date(2024, 5, 21)},
        {"RT-430", "Germany", #date(2024, 1,18)},
        {"LS-005", "France", #date(2023, 12, 31)},
        {"UW-220", "Germany", #date(2024, 2, 25)}
    }),
    #"Convert Dates" = Table.TransformColumns(
        Table.SelectRows(Source, each [Country] = "France"),
        {"Date", each Text.From(_, "fr-FR")}
    )
in
    #"Convert Dates"
```

Result: 
```powerquery
#table(type table [Company ID = text, Country = text, Date = text],
{
    {"LT-331", "France", "05/10/2024"},
    {"LS-005", "France", "31/12/2023"}
})
```




## Category
Text.Conversions from and to text
