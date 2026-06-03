---
title: Text.Contains
---

# Text.Contains


Metnin alt dizeyi içerip içermediğini döndürür.


## Syntax

```powerquery
Text.Contains(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Remarks

`text` içinde `substring` değeri olup olmadığını algılar. Değer bulunursa true döndürür. Bu işlev joker karakterleri veya normal ifadeleri desteklemez.  
  
İsteğe bağlı bağımsız değişken `comparer`, büyük/küçük harfe duyarlı olmayan veya kültür ve yerel ayarlara duyarlı karşılaştırmaları belirtmek için kullanılabilir. Formül dilinde şu yerleşik karşılaştırıcılar bulunur:

-   `Comparer.Ordinal`: Büyük/küçük harfe duyarlı sıralı karşılaştırma yapmak için kullanılır
-   `Comparer.OrdinalIgnoreCase`: Büyük/küçük harfe duyarlı olmayan sıralı karşılaştırma gerçekleştirmek için kullanılır
-   `Comparer.FromCulture`: Kültüre duyarlı bir karşılaştırma gerçekleştirmek için kullanılır

İlk bağımsız değişken null ise, bu işlev null döndürür.  
  
Tüm karakterler tam anlamıyla değerlendirilir. Örneğin "DR", "DR", "DR " ve "DR " birbirine eşit kabul edilmez.


## Examples

### Example #1
"Hello World" metninin "Hello" ifadesini içerip içermediğini bulur.
```powerquery
Text.Contains("Hello World", "Hello")
```

Result: 
```powerquery
true
```


### Example #2
"Hello World" metninin "hello" ifadesini içerip içermediğini bulur.
```powerquery
Text.Contains("Hello World", "hello")
```

Result: 
```powerquery
false
```


### Example #3
Büyük/küçük harfe duyarsız karşılaştırma kullanarak "Merhaba Dünya" metninin "merhaba" sözcüğünü içerip içermediğini bulun.
```powerquery
Text.Contains("Hello World", "hello", Comparer.OrdinalIgnoreCase)
```

Result: 
```powerquery
true
```


### Example #4
Hesap kodunda "A-" veya "7" içeren tablodaki satırları bul.
```powerquery
let
    Source = #table(type table [Account Code = text, Posted Date = date, Sales = number],
    {
        {"US-2004", #date(2023,1,20), 580},
        {"CA-8843", #date(2023,7,18), 280},
        {"PA-1274", #date(2022,1,12), 90},
        {"PA-4323", #date(2023,4,14), 187},
        {"US-1200", #date(2022,12,14), 350},
        {"PTY-507", #date(2023,6,4), 110}
    }),
    #"Filtered rows" = Table.SelectRows(
        Source,
        each Text.Contains([Account Code], "A-") or
            Text.Contains([Account Code], "7"))
in
    #"Filtered rows"
    
```

Result: 
```powerquery
#table(type table [Account Code = text, Posted Date = date, Sales = number],
{
    {"CA-8843", #date(2023,7,18), 280},
    {"PA-1274", #date(2022,1,12), 90},
    {"PA-4323", #date(2023,4,14), 187},
    {"PTY-507", #date(2023,6,4), 110}
})
    
```




## Category
Text.Membership
