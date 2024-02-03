---
title: Date.WeekOfYear
---

# Date.WeekOfYear


## Description

Bu tarihin yılın hangi haftası içinde olduğunu gösteren, 1 ile 54 arasındaki bir sayıyı döndürür.


## Syntax

```powerquery
Date.WeekOfYear(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as number
```


## Details

Yılın hangi haftasının <code>dateTime</code> tarihinin girildiğini gösteren 1 ile 54 arasında bir sayı döndürür. <ul>        <li><code>dateTime</code>: Yılın belirlenen haftası için bir <code>datetime</code> değeri.</li>        <li><code>firstDayOfWeek</code>: İsteğe bağlı <code>Day.Type</code> değeri, yeni bir haftanın hangi gününün başlangıç olarak düşünüleceğini belirtir (örneğin, <code>Day.Sunday</code>). Belirtilmezse, kültüre bağlı bir varsayılan kullanılır.</li>      </ul>


## Examples

### Example #1 
Yılın hangi haftasının 27 Mart 2011&#39;i içerdiğini belirleyin.
```powerquery
Date.WeekOfYear(#date(2011, 03, 27))
```

Result: 
```powerquery
14
```


### Example #2 
Haftanın başlangıcı olarak Pazartesi kullanıldığında, yılın hangi haftasının 27 Mart 2011&#39;i içerdiğini belirleyin.
```powerquery
Date.WeekOfYear(#date(2011, 03, 27), Day.Monday)
```

Result: 
```powerquery
13
```




## Category
Date
