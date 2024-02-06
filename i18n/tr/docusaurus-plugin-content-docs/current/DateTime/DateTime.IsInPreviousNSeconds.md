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

Verilen <code>dateTime</code> tarih saat değerinin, sistemdeki geçerli tarih ve saat tarafından belirlendiği şekilde, önceki birkaç saniye içinde olup olmadığını gösterir. Geçerli saniye içinde olan bir değer geçirildiğinde bu işlevin false döndürdüğünü unutmayın.      <ul>      <li><code>dateTime</code>: Değerlendirilecek <code>datetime</code> veya <code>datetimezone</code> değeri.</li>      <li><code>seconds</code>: Saniye sayısı.</li>      </ul>


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
