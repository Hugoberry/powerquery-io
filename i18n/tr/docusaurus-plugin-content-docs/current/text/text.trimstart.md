---
title: Text.TrimStart
---

# Text.TrimStart


Belirtilen tüm baştaki karakterleri kaldırır.


## Syntax

```powerquery
Text.TrimStart(
    text as text,
    optional trim as any
) as text
```


## Remarks

Belirtilen `text` öğesinden tüm baştaki karakterleri kaldırma sonucunu döndürür. Varsayılan olarak, baştaki tüm boşluk karakterleri kaldırılır.

-   `text`: Baştaki karakterlerin kaldırılacağı metin.
-   `trim`: Varsayılan olarak kırpılan boşluk karakterlerini geçersiz kılar. Bu parametre tek bir karakter veya tek karakter listesi olabilir. Kırpılmış olmayan bir karakterle karşılaşıldığında baştaki her kırpma işlemi durur.


## Examples

### Example #1
" a b c d " ifadesinden öndeki boşlukları kaldırır.
```powerquery
Text.TrimStart("   a b c d    ")
```

Result: 
```powerquery
"a b c d    "
```


### Example #2
Bir sayının metin gösteriminden baştaki sıfırları kaldırın.
```powerquery
Text.TrimStart("0000056.420", "0")
```

Result: 
```powerquery
"56.420"
```


### Example #3
Sabit genişlikli hesap adından baştaki doldurma karakterlerini kaldırın.
```powerquery
let
    Source = #table(type table [Name = text, Account Name= text, Interest = number],
    {
        {"Bob", "@****847263-US", 2.8410},
        {"Leslie", "@******4648-FR", 3.8392},
        {"Ringo", "@***2046790-DE", 12.6600}
    }),
    #"Trimmed Account" = Table.TransformColumns(Source, {{"Account Name", each Text.TrimStart(_, {"*", "@"})}})
in
    #"Trimmed Account"
```

Result: 
```powerquery
#table(type table [Name = text, Account Name = text, Interest = number],
{
    {"Bob", "847263-US", 2.841},
    {"Leslie", "4648-FR", 3.8392},
    {"Ringo", "2046790-DE", 12.66}
})
```




## Category
Text.Transformations
