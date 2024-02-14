---
title: DateTime.IsInNextNMinutes
---

# DateTime.IsInNextNMinutes


Bu tarih saatin, sistemdeki geçerli tarih ve saat ile belirlendiği şekilde, sonraki birkaç dakika içinde olup olmadığını gösterir. Geçerli dakika içinde olan bir değer geçirildiğinde bu işlevin false döndürdüğünü unutmayın.


## Syntax

```powerquery
DateTime.IsInNextNMinutes(
    dateTime as any,
    minutes as number
) as logical
```


## Remarks

Verilen <code>dateTime</code> tarih saat değerinin, sistemdeki geçerli tarih ve saat tarafından belirlendiği şekilde, sonraki birkaç dakika içinde olup olmadığını gösterir. Geçerli dakika içinde olan bir değer geçirildiğinde bu işlevin false döndürdüğünü unutmayın.      <ul>      <li><code>dateTime</code>: Değerlendirilecek <code>datetime</code> veya <code>datetimezone</code> değeri.</li>      <li><code>minutes</code>: Dakika sayısı.</li>      </ul>


## Examples

### Example #1 
Geçerli sistem saatinden sonraki dakikanın, sonraki iki dakika içinde olup olmadığını belirler.
```powerquery
DateTime.IsInNextNMinutes(DateTime.FixedLocalNow() + #duration(0, 0, 2, 0), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
