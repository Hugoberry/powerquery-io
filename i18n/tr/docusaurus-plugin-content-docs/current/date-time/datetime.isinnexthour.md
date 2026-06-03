---
title: DateTime.IsInNextHour
---

# DateTime.IsInNextHour


Bu tarih saatin, sistemdeki geçerli tarih ve saat ile belirlendiği şekilde bir sonraki saat içinde olup olmadığını gösterir. Geçerli saat içinde olan bir değer geçirildiğinde bu işlevin false döndürdüğünü unutmayın.


## Syntax

```powerquery
DateTime.IsInNextHour(
    dateTime as any
) as logical
```


## Remarks

Verilen `dateTime` tarih saat değerinin, sistemdeki geçerli tarih ve saat tarafından belirlendiği şekilde bir sonraki saat içinde olup olmadığını gösterir. Geçerli saat içinde olan bir değer geçirildiğinde bu işlevin false döndürdüğünü unutmayın.

-   `dateTime`: Değerlendirilecek `datetime` veya `datetimezone` değeri.


## Examples

### Example #1
Geçerli sistem saatinden sonraki saatin, bir sonraki saat içinde olup olmadığını belirler.
```powerquery
DateTime.IsInNextHour(DateTime.FixedLocalNow() + #duration(0, 1, 0, 0))
```

Result: 
```powerquery
true
```




## Category
DateTime
