---
title: Text.Trim
---

# Text.Trim


Belirtilen tüm baştaki ve sondaki karakterleri kaldırır.


## Syntax

```powerquery
Text.Trim(
    text as text,
    optional trim as any
) as text
```


## Remarks

Belirtilen `text` öğesinden tüm baştaki ve sondaki karakterleri kaldırma sonucunu döndürür. Varsayılan olarak, baştaki ve sondaki tüm boşluk karakterleri kaldırılır.

-   `text`: Baştaki ve sondaki karakterlerin kaldırılacağı metin.
-   `trim`: Varsayılan olarak kırpılan boşluk karakterlerini geçersiz kılar. Bu parametre tek bir karakter veya tek karakter listesi olabilir. Kırpılmış olmayan bir karakterle karşılaşıldığında baştaki ve sondaki her kırpma işlemi durur.


## Examples

### Example #1
" a b c d " ifadesinden öndeki ve sondaki boşlukları kaldırır.
```powerquery
Text.Trim("     a b c d    ")
```

Result: 
```powerquery
"a b c d"
```


### Example #2
Bir sayının metin gösteriminden baştaki ve sondaki sıfırları kaldırın.
```powerquery
Text.Trim("0000056.4200", "0")
```

Result: 
```powerquery
"56.42"
```


### Example #3
HTML etiketinden baştaki ve sondaki köşeli ayraçları kaldırın.
```powerquery
Text.Trim("<div/>", {"<", ">", "/"})
```

Result: 
```powerquery
"div"
```


### Example #4
Bekleyen satış durumu etrafında kullanılan özel karakterleri kaldırın.
```powerquery
let
    Source = #table(type table [Home Sale = text, Sales Date = date, Sales Status = text],
    {
        {"1620 Ferris Way", #date(2024, 8, 22), "##@@Pending@@##"},
        {"757 1st Ave. S.", #date(2024, 3, 15), "Sold"},
        {"22303 Fillmore", #date(2024, 10, 2), "##@@Pending@@##"}
    }),
    #"Trimmed Status" = Table.TransformColumns(Source, {"Sales Status", each Text.Trim(_, {"#", "@"})})
in
    #"Trimmed Status"
```

Result: 
```powerquery
#table(type table [Home Sale = text, Sales Date = date, Sales Status = text],
{
    {"1620 Ferris Way", #date(2024, 8, 22), "Pending"},
    {"757 1st Ave. S.", #date(2024, 3, 15), "Sold"},
    {"22303 Fillmore", #date(2024, 10, 2), "Pending"}
})
```




## Category
Text.Transformations
