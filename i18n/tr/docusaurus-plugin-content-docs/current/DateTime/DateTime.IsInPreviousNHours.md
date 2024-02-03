---
title: DateTime.IsInPreviousNHours
---

# DateTime.IsInPreviousNHours


## Description

Bu tarih saatin, sistemdeki geçerli tarih ve saat ile belirlendiği şekilde, önceki birkaç saat içinde olup olmadığını gösterir. Geçerli saat içinde olan bir değer geçirildiğinde bu işlevin false döndürdüğünü unutmayın.


## Syntax

```powerquery
DateTime.IsInPreviousNHours(
    dateTime as any,
    hours as number
) as logical
```


## Details

Verilen <code>dateTime</code> tarih saat değerinin, sistemdeki geçerli tarih ve saat tarafından belirlendiği şekilde, önceki birkaç saat içinde olup olmadığını gösterir. Geçerli saat içinde olan bir değer geçirildiğinde bu işlevin false döndürdüğünü unutmayın.      <ul>      <li><code>dateTime</code>: Değerlendirilecek <code>datetime</code> veya <code>datetimezone</code> değeri.</li>      <li><code>hours</code>: Saat sayısı.</li>      </ul>


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
