---
title: Number.FromText
---

# Number.FromText


Genel metin biçimlerinden sayılar oluşturur ("15", "3,423.10", "5.0E-10").


## Syntax

```powerquery
Number.FromText(
    text as text,
    optional culture as text
) as number
```


## Remarks

Verilen `text` metin değerinden bir `number` değeri döndürür.

-   `text`: Sayı değerinin metinsel gösterimi. Gösterim bir genel sayı biçiminde olmalıdır: Örneğin "15", "3.423,10" veya "5,0E-10".
-   `culture`: `text` değerinin nasıl yorumlanacağını denetleyen isteğe bağlı kültür (ör. "tr-TR").


## Examples

### Example #1
`"4"` sayısının number değerini alır.
```powerquery
Number.FromText("4")
```

Result: 
```powerquery
4
```


### Example #2
`"5.0e-10"` değerinin sayı değerini alır.
```powerquery
Number.FromText("5.0e-10")
```

Result: 
```powerquery
5E-10
```




## Category
Number.Conversion and formatting
