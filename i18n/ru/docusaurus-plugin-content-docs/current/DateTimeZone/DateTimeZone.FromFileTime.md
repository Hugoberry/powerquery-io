---
title: DateTimeZone.FromFileTime
---

# DateTimeZone.FromFileTime


## Description

Создает значение datetimezone из 64-разрядного числа.


## Syntax

```powerquery
DateTimeZone.FromFileTime(
    fileTime as number
) as datetimezone
```


## Details

Создает значение <code>datetimezone</code> на основе значения <code>fileTime</code> и преобразует его в соответствии с местным часовым поясом. Значение filetime — время файла Windows, представляющее количество 100-наносекундных интервалов, прошедших с 12:00 1 января 1601 г. нашей эры (C.E.) по Гринвичу (UTC).    


## Examples

### Example #1 
Преобразование &lt;code&gt;129876402529842245&lt;/code&gt; в значение datetimezone.
```powerquery
DateTimeZone.FromFileTime(129876402529842245)
```

Result: 
```powerquery
#datetimezone(2012, 7, 24, 14, 50, 52.9842245, -7, 0)
```




## Category
DateTimeZone
