---
title: Binary.ToText
---

# Binary.ToText


İkili verinin kodunu metin biçimi olarak çözer.


## Syntax

```powerquery
Binary.ToText(
    binary as binary,
    optional encoding as BinaryEncoding.Type
) as text
```


## Remarks

`binary` sayı ikili listesini dönüştürmenin sonucunu bir metin değerine döndürür. İsteğe bağlı olarak `encoding`, oluşturulan metin değerinde kullanılan kodlamayı göstermek için belirtilebilir. Aşağıdaki `BinaryEncoding` değerleri, `encoding` için kullanılabilir.

-   `BinaryEncoding.Base64`: 64 tabanlı kodlama
-   `BinaryEncoding.Hex`: Onaltılık kodlama



## Category
Binary
