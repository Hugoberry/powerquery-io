---
title: DateTime.IsInPreviousNHours
---

# DateTime.IsInPreviousNHours


Bu tarih saatin, sistemdeki geçerli tarih ve saat ile belirlendiği şekilde, önceki birkaç saat içinde olup olmadığını gösterir. Geçerli saat içinde olan bir değer geçirildiğinde bu işlevin false döndürdüğünü unutmayın.


## Syntax

```powerquery
DateTime.IsInPreviousNHours(
    dateTime as any,
    hours as number
) as logical
```


## Remarks

Verilen `dateTime` tarih saat değerinin, sistemdeki geçerli tarih ve saat tarafından belirlendiği şekilde, önceki birkaç saat içinde olup olmadığını gösterir. Geçerli saat içinde olan bir değer geçirildiğinde bu işlevin false döndürdüğünü unutmayın.

-   `dateTime`: Değerlendirilecek `datetime` veya `datetimezone` değeri.
-   `hours`: Saat sayısı.


## Examples

### Example #1
Geçerli sistem saatinden önceki saatin, önceki iki saat içinde olup olmadığını belirler.
```powerquery
DateTime.IsInPreviousNHours(DateTime.FixedLocalNow() - #duration(0, 2, 0, 0), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
