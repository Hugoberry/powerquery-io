---
title: Number.From
---

# Number.From


Verilen değerden sayı oluşturur.


## Syntax

```powerquery
Number.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Verilen `value` değerinden bir `number` değeri döndürür. Ayrıca, isteğe bağlı bir `culture` sağlanabilir (ör. "tr-TR"). Verilen `value` `null` olduğunda `Number.From` `null` döndürür. Verilen `value` `number` olduğunda `value` döndürülür. Aşağıdaki türlerde olan değerler bir `number` değerine dönüştürülebilir:

-   `text`: Metin gösteriminden bir `number` değeri. Genel metin biçimleri işlenir ("15", "3.423,10", "5,0E-10"). Ayrıntılar için bkz. `Number.FromText`.
-   `logical`: `true` için 1, `false` için 0.
-   `datetime`: OLE Otomasyonu tarih eşdeğerini içeren çift duyarlıklı kayan noktalı sayı.
-   `datetimezone`: `value` yerel tarih ve saatinin OLE Otomasyonu tarih eşdeğerini içeren çift duyarlıklı kayan noktalı sayı.
-   `date`: OLE Otomasyonu tarih eşdeğerini içeren çift duyarlıklı kayan noktalı sayı.
-   `time`: Kesirli günler ile ifade edilir.
-   `duration`: Tam ve kesirli günler ile ifade edilir.

`value` başka bir türde olduğunda hata döndürülür.


## Examples

### Example #1
`"4"` sayısının `number` değerini alır.
```powerquery
Number.From("4")
```

Result: 
```powerquery
4
```


### Example #2
`#datetime(2020, 3, 20, 6, 0, 0)` öğesinin `number` değerini alır.
```powerquery
Number.From(#datetime(2020, 3, 20, 6, 0, 0))
```

Result: 
```powerquery
43910.25
```


### Example #3
`"12.3%"` `number` değerini al.
```powerquery
Number.From("12.3%")
```

Result: 
```powerquery
0.123
```




## Category
Number.Conversion and formatting
