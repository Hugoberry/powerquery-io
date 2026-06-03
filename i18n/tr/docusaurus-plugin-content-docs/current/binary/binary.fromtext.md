---
title: Binary.FromText
---

# Binary.FromText


Bir metin biçimindeki verilerin kodunu ikili olarak çözer.


## Syntax

```powerquery
Binary.FromText(
    text as text,
    optional encoding as BinaryEncoding.Type
) as binary
```


## Remarks

`text` metin değerini dönüştürmenin sonucunu bir ikiliye döndürür (`number` listesi). `encoding`, metin değerinde kullanılan kodlamayı göstermek için belirtilebilir. Aşağıdaki `BinaryEncoding` değerleri, `encoding` için kullanılabilir.

-   `BinaryEncoding.Base64`: 64 tabanlı kodlama
-   `BinaryEncoding.Hex`: Onaltılık kodlama


## Examples

### Example #1
"1011" değerinin kodunu ikili olarak çözer.
```powerquery
Binary.FromText("1011")
```

Result: 
```powerquery
Binary.FromText("1011", BinaryEncoding.Base64)
```


### Example #2
"1011" değerinin kodunu Onaltılık kodlama ile ikili olarak çözer.
```powerquery
Binary.FromText("1011", BinaryEncoding.Hex)
```

Result: 
```powerquery
Binary.FromText("EBE=", BinaryEncoding.Base64)
```




## Category
Binary
