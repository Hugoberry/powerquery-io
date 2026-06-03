---
title: Date.DayOfWeek
---

# Date.DayOfWeek


Sağlanan değerin karşılık geldiği haftanın gününü gösteren (0 ile 6 arasında) bir sayı döndürür.


## Syntax

```powerquery
Date.DayOfWeek(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as Day.Type
```


## Remarks

Sağlanan `dateTime` değerinin karşılık geldiği haftanın gününü gösteren (0 ile 6 arasında) bir sayı döndürür.

-   `dateTime`: Bir `date`, `datetime` veya `datetimezone` değeri.
-   `firstDayOfWeek`: Haftanın ilk günü olarak kabul edilecek günü gösteren bir `Day` değeri. Kabul edilebilir değerler: Day.Sunday, Day.Monday, Day.Tuesday, Day.Wednesday, Day.Thursday, Day.Friday ve Day.Saturday. Belirtilmezse, kültüre bağımlı bir varsayılan değer kullanılır.


## Examples

### Example #1
Pazar'ı haftanın ilk günü kabul ederek 21 Şubat 2011 Pazartesi'nin haftanın hangi gününe karşılık geldiğini göster.
```powerquery
Date.DayOfWeek(#date(2011, 02, 21), Day.Sunday)
```

Result: 
```powerquery
1
```


### Example #2
Pazartesi'yi haftanın ilk günü kabul ederek 21 Şubat 2011 Pazartesi'nin haftanın hangi gününe karşılık geldiğini göster.
```powerquery
Date.DayOfWeek(#date(2011, 02, 21), Day.Monday)
```

Result: 
```powerquery
0
```




## Category
Date
