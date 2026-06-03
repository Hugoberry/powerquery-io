---
title: DateTime.IsInPreviousNSeconds
---

# DateTime.IsInPreviousNSeconds


Bu tarih saatin, sistemdeki geçerli tarih ve saat ile belirlendiği şekilde, önceki birkaç saniye içinde olup olmadığını gösterir. Geçerli saniye içinde olan bir değer geçirildiğinde bu işlevin false döndürdüğünü unutmayın.


## Syntax

```powerquery
DateTime.IsInPreviousNSeconds(
    dateTime as any,
    seconds as number
) as logical
```


## Remarks

Verilen `dateTime` tarih saat değerinin, sistemdeki geçerli tarih ve saat tarafından belirlendiği şekilde, önceki birkaç saniye içinde olup olmadığını gösterir. Geçerli saniye içinde olan bir değer geçirildiğinde bu işlevin false döndürdüğünü unutmayın.

-   `dateTime`: Değerlendirilecek `datetime` veya `datetimezone` değeri.
-   `seconds`: Saniye sayısı.


## Examples

### Example #1
Geçerli sistem saatinden önceki saniyenin, önceki iki saniye içinde olup olmadığını belirler.
```powerquery
DateTime.IsInPreviousNSeconds(DateTime.FixedLocalNow() - #duration(0, 0, 0, 2), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
