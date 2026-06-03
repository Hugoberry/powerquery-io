---
title: DateTime.IsInNextMinute
---

# DateTime.IsInNextMinute


Bu tarih saatin, sistemdeki geçerli tarih ve saat ile belirlendiği şekilde bir sonraki dakika içinde olup olmadığını gösterir. Geçerli dakika içinde olan bir değer geçirildiğinde bu işlevin false döndürdüğünü unutmayın.


## Syntax

```powerquery
DateTime.IsInNextMinute(
    dateTime as any
) as logical
```


## Remarks

Verilen `dateTime` tarih saat değerinin, sistemdeki geçerli tarih ve saat tarafından belirlendiği şekilde bir sonraki dakika içinde olup olmadığını gösterir. Geçerli dakika içinde olan bir değer geçirildiğinde bu işlevin false döndürdüğünü unutmayın.

-   `dateTime`: Değerlendirilecek `datetime` veya `datetimezone` değeri.


## Examples

### Example #1
Geçerli sistem saatinden sonraki dakikanın, bir sonraki dakika içinde olup olmadığını belirler.
```powerquery
DateTime.IsInNextMinute(DateTime.FixedLocalNow() + #duration(0, 0, 1, 0))
```

Result: 
```powerquery
true
```




## Category
DateTime
