---
title: Date.DayOfWeek
---

# Date.DayOfWeek


## Description

Sağlanan değerin karşılık geldiği haftanın gününü gösteren (0 ile 6 arasında) bir sayı döndürür.


## Syntax

```powerquery
Date.DayOfWeek(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as Day.Type
```


## Details

Sağlanan <code>dateTime</code> değerinin karşılık geldiği haftanın gününü gösteren (0 ile 6 arasında) bir sayı döndürür.  <ul>        <li><code>dateTime</code>: Bir <code>date</code>, <code>datetime</code> veya <code>datetimezone</code> değeri.</li>        <li><code>firstDayOfWeek</code>: Haftanın ilk günü olarak kabul edilecek günü gösteren bir <code>Day</code> değeri. Kabul edilebilir değerler: Day.Sunday, Day.Monday, Day.Tuesday, Day.Wednesday, Day.Thursday, Day.Friday ve Day.Saturday. Belirtilmezse, kültüre bağımlı bir varsayılan değer kullanılır.</li>      </ul>


## Examples

### Example #1 
Pazar&#39;ı haftanın ilk günü kabul ederek 21 Şubat 2011 Pazartesi&#39;nin haftanın hangi gününe karşılık geldiğini göster.
```powerquery
Date.DayOfWeek(#date(2011, 02, 21), Day.Sunday)
```

Result: 
```powerquery
1
```


### Example #2 
Pazartesi&#39;yi haftanın ilk günü kabul ederek 21 Şubat 2011 Pazartesi&#39;nin haftanın hangi gününe karşılık geldiğini göster.
```powerquery
Date.DayOfWeek(#date(2011, 02, 21), Day.Monday)
```

Result: 
```powerquery
0
```




## Category
Date
