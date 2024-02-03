---
title: DateTime.IsInPreviousSecond
---

# DateTime.IsInPreviousSecond


## Description

Bu tarih saatin, sistemdeki geçerli tarih ve saat ile belirlendiği şekilde, bir önceki saniye içinde olup olmadığını gösterir. Geçerli saniye içinde olan bir değer geçirildiğinde bu işlevin false döndürdüğünü unutmayın.


## Syntax

```powerquery
DateTime.IsInPreviousSecond(
    dateTime as any
) as logical
```


## Details

Verilen <code>dateTime</code> tarih saat değerinin, sistemdeki geçerli tarih ve saat tarafından belirlendiği şekilde bir önceki saniye içinde olup olmadığını gösterir. Geçerli saniye içinde olan bir değer geçirildiğinde bu işlevin false döndürdüğünü unutmayın.      <ul>      <li><code>dateTime</code>: Değerlendirilecek <code>datetime</code> veya <code>datetimezone</code> değeri.</li>      </ul>


## Examples

### Example #1 
Geçerli sistem saatinden önceki saniyenin, önceki bir önceki saniye içinde olup olmadığını belirler.
```powerquery
DateTime.IsInPreviousSecond(DateTime.FixedLocalNow() - #duration(0, 0, 0, 1))
```

Result: 
```powerquery
true
```




## Category
DateTime
