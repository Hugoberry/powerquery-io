---
title: Text.Split
---

# Text.Split


Metni belirtilen sınırlayıcıya dayalı olarak bir metin değerleri listesine ayırır.


## Syntax

```powerquery
Text.Split(
    text as text,
    separator as text
) as list
```


## Remarks

Metin değerini belirtilen sınırlayıcısına dayalı olarak ayırmanın sonucu olan metin değerleri listesini döndürür.

-   `text`: Bölünecek metin değeri.
-   `separator`: Metin bölmek için kullanılacak sınırlayıcı. Sınırlayıcı, tek bir karakter veya bir dizi karakter olabilir. Bir dizi karakter kullanıldığında, metin yalnızca tam dizinin bulunduğu yerlerde bölünür.


## Examples

### Example #1
"|" ile sınırlandırılmış metin değeri olan "Name|Address|PhoneNumber" öğesinden liste oluşturur.
```powerquery
Text.Split("Name|Address|PhoneNumber", "|")
```

Result: 
```powerquery
{
    "Name",
    "Address",
    "PhoneNumber"
}
```


### Example #2
Karakter dizisini kullanarak metin değerinden bir liste oluşturun.
```powerquery
Text.Split("Name, the Customer, the Purchase Date", ", the ")
```

Result: 
```powerquery
{
    "Name",
    "Customer",
    "Purchase Date"
}
```




## Category
Text.Transformations
