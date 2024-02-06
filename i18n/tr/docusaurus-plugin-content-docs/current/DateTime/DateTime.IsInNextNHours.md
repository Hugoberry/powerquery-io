---
title: DateTime.IsInNextNHours
---

# DateTime.IsInNextNHours


Bu tarih saatin, sistemdeki geçerli tarih ve saat ile belirlendiği şekilde, sonraki birkaç saat içinde olup olmadığını gösterir. Geçerli saat içinde olan bir değer geçirildiğinde bu işlevin false döndürdüğünü unutmayın.


## Syntax

```powerquery
DateTime.IsInNextNHours(
    dateTime as any,
    hours as number
) as logical
```


## Remarks

Verilen <code>dateTime</code> tarih saat değerinin, sistemdeki geçerli tarih ve saat tarafından belirlendiği şekilde, sonraki birkaç saat içinde olup olmadığını gösterir. Geçerli saat içinde olan bir değer geçirildiğinde bu işlevin false döndürdüğünü unutmayın.      <ul>      <li><code>dateTime</code>: Değerlendirilecek <code>datetime</code> veya <code>datetimezone</code> değeri.</li>      <li><code>hours</code>: Saat sayısı.</li>      </ul>


## Examples

### Example #1 
Geçerli sistem saatinden sonraki saatin, sonraki iki saat içinde olup olmadığını belirler.
```powerquery
DateTime.IsInNextNHours(DateTime.FixedLocalNow() + #duration(0, 2, 0, 0), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
