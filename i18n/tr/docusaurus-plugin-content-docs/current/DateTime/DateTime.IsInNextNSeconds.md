---
title: DateTime.IsInNextNSeconds
---

# DateTime.IsInNextNSeconds


## Description

Bu tarih saatin, sistemdeki geçerli tarih ve saat ile belirlendiği şekilde, sonraki birkaç saniye içinde olup olmadığını gösterir. Geçerli saniye içinde olan bir değer geçirildiğinde bu işlevin false döndürdüğünü unutmayın.


## Syntax

```powerquery
DateTime.IsInNextNSeconds(
    dateTime as any,
    seconds as number
) as logical
```


## Details

Verilen <code>dateTime</code> tarih saat değerinin, sistemdeki geçerli tarih ve saat tarafından belirlendiği şekilde, sonraki birkaç saniye içinde olup olmadığını gösterir. Geçerli saniye içinde olan bir değer geçirildiğinde bu işlevin false döndürdüğünü unutmayın.      <ul>      <li><code>dateTime</code>: Değerlendirilecek <code>datetime</code> veya <code>datetimezone</code> değeri.</li>      <li><code>seconds</code>: Saniye sayısı.</li>      </ul>


## Examples

### Example #1 
Geçerli sistem saatinden sonraki saniyenin, sonraki iki saniye içinde olup olmadığını belirler.
```powerquery
DateTime.IsInNextNSeconds(DateTime.FixedLocalNow() + #duration(0, 0, 0, 2), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
