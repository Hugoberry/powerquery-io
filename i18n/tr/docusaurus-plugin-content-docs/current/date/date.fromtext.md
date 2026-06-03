---
title: Date.FromText
---

# Date.FromText


Yerel, evrensel ve özel Tarih biçimlerinden bir Tarih oluşturur.


## Syntax

```powerquery
Date.FromText(
    text as text,
    optional options as any
) as date
```


## Remarks

Metinsel gösterimden bir tarih değeri oluşturur.

-   `text`:Tarihe çevrilecek bir metin değeri.
-   `options`:Ek özellikler belirtmek için sağlanabilecek, isteğe bağlı bir `record`. `record` şu alanları içerebilir:
    -   `Format`: Kullanılacak biçimi gösteren bir `text` değeri. Daha fazla bilgi için bkz. https://go.microsoft.com/fwlink/?linkid=2180104 ve https://go.microsoft.com/fwlink/?linkid=2180105. Bu alanın atlanması veya `null` olarak doldurulması tahmin yoluyla tarihin ayrıştırılmasına neden olur.
    -   `Culture`: `Format` null olmadığında bazı biçim tanımlayıcılarını `Culture` kontrol eder. Örneğin `"en-US"` içinde `"MMM"` `"Jan", "Feb", "Mar", ...` değerlerini verirken `"ru-RU"` içinde `"MMM"`, `"янв", "фев", "мар", ...` değerlerini verir. `Format` `null` olduğunda kullanılacak varsayılan biçimi `Culture` kontrol eder. `Culture` `null` olduğunda veya atlandığında `Culture.Current` kullanılır.

Eski iş akışlarını desteklemek için `options` bir metin değeri de olabilir. Bunun davranışı `options = [Format = null, Culture = options]` ile aynıdır.


## Examples

### Example #1
`"2010-12-31"` değerini bir `date` değerine dönüştürün.
```powerquery
Date.FromText("2010-12-31")
```

Result: 
```powerquery
#date(2010, 12, 31)
```


### Example #2
Özel bir biçim ve Alman kültürü kullanarak dönüştürün.
```powerquery
Date.FromText("30 Dez 2010", [Format="dd MMM yyyy", Culture="de-DE"])
```

Result: 
```powerquery
#date(2010, 12, 30)
```


### Example #3
Gregoryen takvimde, Hicri takvimde 1400 başlangıcına karşılık gelen tarihi bulun.
```powerquery
Date.FromText("1400", [Format="yyyy", Culture="ar-SA"])
```

Result: 
```powerquery
#date(1979, 11, 20)
```


### Example #4
Gönderme Tarihi sütununda ay adları kısaltılarak İtalyanca metin olarak yazılan tarihlerini tarih değerlerine çevir.
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
