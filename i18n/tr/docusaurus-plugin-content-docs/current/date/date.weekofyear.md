---
title: Date.WeekOfYear
---

# Date.WeekOfYear


Bu tarihin yılın hangi haftası içinde olduğunu gösteren, 1 ile 54 arasındaki bir sayıyı döndürür.


## Syntax

```powerquery
Date.WeekOfYear(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as number
```


## Remarks

Yılın hangi haftasının `dateTime` tarihinin girildiğini gösteren 1 ile 54 arasında bir sayı döndürür.

-   `dateTime`: Yılın belirlenen haftası için bir `datetime` değeri.
-   `firstDayOfWeek`: İsteğe bağlı `Day.Type` değeri, yeni bir haftanın hangi gününün başlangıç olarak düşünüleceğini belirtir (örneğin, `Day.Sunday`). Belirtilmezse, kültüre bağlı bir varsayılan kullanılır.


## Examples

### Example #1
Yılın hangi haftasının 27 Mart 2011'i içerdiğini belirleyin.
```powerquery
Date.WeekOfYear(#date(2011, 03, 27))
```

Result: 
```powerquery
14
```


### Example #2
Haftanın başlangıcı olarak Pazartesi kullanıldığında, yılın hangi haftasının 27 Mart 2011'i içerdiğini belirleyin.
```powerquery
Date.WeekOfYear(#date(2011, 03, 27), Day.Monday)
```

Result: 
```powerquery
13
```




## Category
Date
