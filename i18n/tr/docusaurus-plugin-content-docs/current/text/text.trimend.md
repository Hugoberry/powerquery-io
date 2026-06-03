---
title: Text.TrimEnd
---

# Text.TrimEnd


Belirtilen tüm sondaki karakterleri kaldırır.


## Syntax

```powerquery
Text.TrimEnd(
    text as text,
    optional trim as any
) as text
```


## Remarks

Belirtilen `text` öğesinden tüm sondaki karakterleri kaldırma sonucunu döndürür. Varsayılan olarak, sondaki tüm boşluk karakterleri kaldırılır.

-   `text`: Sondaki karakterlerin kaldırılacağı metin.
-   `trim`: Varsayılan olarak kırpılan boşluk karakterlerini geçersiz kılar. Bu parametre tek bir karakter veya tek karakter listesi olabilir. Kırpılmış olmayan bir karakterle karşılaşıldığında sondaki her kırpma işlemi durur.


## Examples

### Example #1
" a b c d " ifadesinden sondaki boşlukları kaldırır.
```powerquery
Text.TrimEnd("     a b c d    ")
```

Result: 
```powerquery
"     a b c d"
```


### Example #2
Dolgulu kayan nokta numarasının metin gösteriminden sondaki sıfırları kaldırın.
```powerquery
Text.TrimEnd("03.487700000", "0")
```

Result: 
```powerquery
"03.4877"
```


### Example #3
Sabit genişlikli hesap adından sondaki doldurma karakterlerini kaldırın.
```powerquery
let
    Source = #table(type table [Name = text, Account Name= text, Interest = number],
    {
        {"Bob", "US-847263****@", 2.8410},
        {"Leslie", "FR-4648****@**", 3.8392},
        {"Ringo", "DE-2046790@***", 12.6600}
    }),
    #"Trimmed Account" = Table.TransformColumns(Source, {{"Account Name", each Text.TrimEnd(_, {"*", "@"})}})
in
    #"Trimmed Account"
```

Result: 
```powerquery
#table(type table [Name = text, Account Name = text, Interest = number],
{
    {"Bob", "US-847263", 2.841},
    {"Leslie", "FR-4648", 3.8392},
    {"Ringo", "DE-2046790", 12.66}
})
```




## Category
Text.Transformations
