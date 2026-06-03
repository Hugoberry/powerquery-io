---
title: Binary.From
---

# Binary.From


Verilen değerden ikili oluşturur


## Syntax

```powerquery
Binary.From(
    value as any,
    optional encoding as BinaryEncoding.Type
) as binary
```


## Remarks

Verilen `value` değerinden bir `binary` değeri döndürür. Verilen `value` `null` olduğunda `Binary.From` `null` döndürür. Verilen `value` `binary` olduğunda `value` döndürülür. Aşağıdaki türde olan değerler bir `binary` değerine dönüştürülebilir:

-   `text`: Metin gösteriminden bir `binary` değeri. Ayrıntılar için bkz. `Binary.FromText`.

`value` başka bir türde olduğunda hata döndürülür.


## Examples

### Example #1
`"1011"` öğesinin `binary` değerini alır.
```powerquery
Binary.From("1011")
```

Result: 
```powerquery
Binary.FromText("1011", BinaryEncoding.Base64)
```




## Category
Binary
