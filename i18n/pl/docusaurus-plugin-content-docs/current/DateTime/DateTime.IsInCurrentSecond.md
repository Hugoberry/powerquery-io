---
title: DateTime.IsInCurrentSecond
---

# DateTime.IsInCurrentSecond


## Description

Wskazuje, czy ta wartość daty i godziny występuje w ciągu bieżącej sekundy zgodnie z bieżącą datą i godziną systemu.


## Syntax

```powerquery
DateTime.IsInCurrentSecond(
    dateTime as any
) as logical
```


## Details

Wskazuje, czy dana wartość daty i godziny <code>dateTime</code> występuje w ciągu bieżącej sekundy zgodnie z bieżącą datą i godziną systemu.      <ul>      <li><code>dateTime</code>: wartość <code>datetime</code> lub <code>datetimezone</code> do sprawdzenia.</li>      </ul>


## Examples

### Example #1 
Określ, czy bieżący czas systemowy występuje w ciągu bieżącej sekundy.
```powerquery
DateTime.IsInCurrentSecond(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
DateTime
