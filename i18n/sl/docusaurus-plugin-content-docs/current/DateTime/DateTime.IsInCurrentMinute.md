---
title: DateTime.IsInCurrentMinute
---

# DateTime.IsInCurrentMinute


## Description

Označuje, ali se ta vrednost &#34;datetime&#34; pojavi v trenutni minuti, kot določata trenutni sistemski datum in čas.


## Syntax

```powerquery
DateTime.IsInCurrentMinute(
    dateTime as any
) as logical
```


## Details

Označuje, ali se navedena vrednost "datetime" <code>dateTime</code> pojavi v trenutni minuti, kot določata trenutni sistemski datum in čas.      <ul>      <li><code>dateTime</code>: vrednost <code>datetime</code> ali <code>datetimezone</code>, ki bo ovrednotena.</li>      </ul>


## Examples

### Example #1 
Določite, ali je trenutni sistemski čas v trenutni minuti.
```powerquery
DateTime.IsInCurrentMinute(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
DateTime
