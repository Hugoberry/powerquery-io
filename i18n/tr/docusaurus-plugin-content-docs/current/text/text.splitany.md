---
title: Text.SplitAny
---

# Text.SplitAny


Sınırlayıcıdaki karakterlerden herhangi birinde ayrılmış metin değerleri listesi döndürür.


## Syntax

```powerquery
Text.SplitAny(
    text as text,
    separators as text
) as list
```


## Remarks

Metin değerini belirtilen sınırlayıcıdaki herhangi bir karaktere dayalı olarak ayırmanın sonucu olan metin değerleri listesini döndürür.

-   `text`: Bölünecek metin değeri.
-   `separators`: Metni bölmek için kullanılan sınırlayıcı karakterler.


## Examples

### Example #1
Belirtilen sınırlayıcı karakterleri kullanarak verilen metinden bir liste oluşturun.
```powerquery
Text.SplitAny("Name|Customer ID|Purchase|Month-Day-Year", "|-")
```

Result: 
```powerquery
{
    "Name",
    "Customer ID",
    "Purchase",
    "Month",
    "Day",
    "Year"
}
```




## Category
Text.Transformations
