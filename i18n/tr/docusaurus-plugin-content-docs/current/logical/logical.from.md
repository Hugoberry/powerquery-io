---
title: Logical.From
---

# Logical.From


Verilen değerden bir mantıksal değer oluşturur.


## Syntax

```powerquery
Logical.From(
    value as any
) as logical
```


## Remarks

Verilen `value` değerinden bir `logical` değeri döndürür. Verilen `value` `null` olduğunda `Logical.From` `null` döndürür. Verilen `value` `logical` olduğunda `value` döndürülür. Aşağıdaki türlerde olan değerler bir `logical` değerine dönüştürülebilir:

-   `text`: Metin değerindeki `"true"` veya `"false"` olan bir `logical` değeri. Ayrıntılar için bkz. `Logical.FromText`.
-   `number`: `value` `0` ile eşitse `false`, aksi takdirde `true`.

`value` başka bir türde olduğunda hata döndürülür.


## Examples

### Example #1
`2` değerini bir `logical` değerine dönüştürür.
```powerquery
Logical.From(2)
```

Result: 
```powerquery
true
```




## Category
Logical
