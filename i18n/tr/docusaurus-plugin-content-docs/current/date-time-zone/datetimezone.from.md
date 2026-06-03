---
title: DateTimeZone.From
---

# DateTimeZone.From


Verilen değerden bir datetimezone oluşturur.


## Syntax

```powerquery
DateTimeZone.From(
    value as any,
    optional culture as text
) as datetimezone
```


## Remarks

Verilen değerden bir `datetimezone` oluşturur.

-   `value`: `datetimezone` oluşturmak için kullanılan değer.
-   `culture`: (İsteğe bağlı) Değeri dönüştürürken kullanılacak kültür (örneğin, “en-US”).

Aşağıdaki türlerdeki değerler `datetimezone` değerine dönüştürülebilir:

-   `text`: Metinsel gösterimden bir `datetimezone` değeri döndürür. Ayrıntılar için bakın: `DateTimeZone.FromText`
-   `date`: `value` tarih bileşeni, `12:00:00 AM` saat bileşeni ve yerel saat dilimine karşılık gelen zaman farkı ile bir `datetimezone` döndürür.
-   `datetime`: `value` değerini tarih ve saat olarak ve yerel saat dilimine karşılık gelen zaman farkını içeren bir `datetimezone` döndürür.
-   `datetimezone`: `value` değerini döndürür.
-   `time`: `0` OLE Otomasyon Tarihi'nin tarih bileşeni, `value` zaman bileşeni ve yerel saat dilimine karşılık gelen zaman farkı ile eşdeğer bir `datetimezone` döndürür. OLE Otomasyon Tarihi, tam sayı bileşeni 30 Aralık 1899 gece yarısından önceki veya sonraki gün sayısını, kesirli bileşeni ise o günün saatini 24'e bölünmüş halini temsil eden bir kayan nokta sayısından oluşur. Örneğin, 31 Aralık 1899 gece yarısı 1,0 ile temsil edilir; 1 Ocak 1900 sabah 6, 2,25 ile temsil edilir; 29 Aralık 1899 gece yarısı -1,0 ile temsil edilir ve 29 Aralık 1899 sabah 6, -1,25 ile temsil edilir. Temel değer, 30 Aralık 1899 gece yarısıdır. Minimum değer, 1 Ocak 0100 gece yarısıdır. Maksimum değer, 31 Aralık 9999'un son anıdır.
-   `number`: `value` ile ifade edilen OLE Otomasyon Tarihi'nin tarih ve saat eşdeğeri ile yerel saat dilimine karşılık gelen ofseti içeren bir `datetimezone` döndürür.
-   `null`: `null` değerini döndürür.

`value` başka bir türdeyse, bir hata döndürülür.  
  
Bu işlevi yerel olarak çalıştırdığınızda, yerel saat dilimine karşılık gelen ofset değeri, çevrimiçi çalıştırdığınızda farklıdır. Yerel olarak çalıştırıldığında, yerel saat dilimi döndürülür. Çevrimiçi olarak çalıştırıldığında, UTC saat dilimi (+00:00) döndürülür.


## Examples

### Example #1
Tarih, saat ve saat diliminin metin temsilini `datetimezone` değerine dönüştürür.
```powerquery
DateTimeZone.From("2020-10-30T01:30:00-08:00")
```

Result: 
```powerquery
#datetimezone(2020, 10, 30, 01, 30, 00, -8, 00)
```


### Example #2
Brezilya Portekizcesi tarih, saat ve saat diliminin metin temsilini `datetimezone` değerine dönüştürün.
```powerquery
DateTimeZone.From("13 de agosto de 2025 15:43:00 -03:00", "pt-BR")
```

Result: 
```powerquery
#datetimezone(2025, 08, 13, 15, 43, 00, -3, 00)
```


### Example #3
1 Ocak 2025 saat 12:00'yi temsil eden bir sayıyı `datetimezone` değerine dönüştürün. Sonuçtaki saat dilimi, örneğin yerel olarak mı yoksa çevrimiçi olarak mı çalıştırıldığına bağlıdır.
```powerquery
DateTimeZone.From(45658.5)
```

Result: 
```powerquery
#datetimezone(2025, 01, 01, 12, 00, 00, 0, 00)
```




## Category
DateTimeZone
