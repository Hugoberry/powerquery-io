---
title: DateTimeZone.ToLocal
---

# DateTimeZone.ToLocal


Saat dilimi bileşenini yerel saat dilimine dönüştürür.


## Syntax

```powerquery
DateTimeZone.ToLocal(
    dateTimeZone as datetimezone
) as datetimezone
```


## Remarks

<code>dateTimeZone</code> datetimezone değerinin saat dilimi bilgilerini yerel saat dilimi bilgileri ile değiştirir.    <code>dateTimeZone</code> bir saat dilimi bileşenine sahip değilse, yerel saat dilimi bilgileri eklenir.


## Examples

### Example #1 
#datetimezone(2010, 12, 31, 11, 56, 02, 7, 30) için saat dilimi bilgilerini yerel saat dilimi olarak değiştirin (PST varsayılarak).
```powerquery
DateTimeZone.ToLocal(#datetimezone(2010, 12, 31, 11, 56, 02, 7, 30))
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 12, 26, 2, -8, 0)
```




## Category
DateTimeZone
