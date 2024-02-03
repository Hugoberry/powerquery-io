---
title: DateTime.IsInCurrentSecond
---

# DateTime.IsInCurrentSecond


## Description

Označuje, ali se ta vrednost &#34;datetime&#34; pojavi v trenutni sekundi, kot določata trenutni sistemski datum in čas.


## Syntax

```powerquery
DateTime.IsInCurrentSecond(
    dateTime as any
) as logical
```


## Details

Označuje, ali se navedena vrednost "datetime" <code>dateTime</code> pojavi v trenutni sekundi, kot določata trenutni sistemski datum in čas.      <ul>      <li><code>dateTime</code>: vrednost <code>datetime</code> ali <code>datetimezone</code>, ki bo ovrednotena.</li>      </ul>


## Examples

### Example #1 
Določite, ali je trenutni sistemski čas v trenutni sekundi.
```powerquery
DateTime.IsInCurrentSecond(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
DateTime
