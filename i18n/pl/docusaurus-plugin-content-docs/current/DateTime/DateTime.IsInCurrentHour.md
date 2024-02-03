---
title: DateTime.IsInCurrentHour
---

# DateTime.IsInCurrentHour


## Description

Wskazuje, czy ta wartość daty i godziny występuje w ciągu bieżącej godziny zgodnie z bieżącą datą i godziną systemu.


## Syntax

```powerquery
DateTime.IsInCurrentHour(
    dateTime as any
) as logical
```


## Details

Wskazuje, czy dana wartość daty i godziny <code>dateTime</code> występuje w ciągu bieżącej godziny zgodnie z bieżącą datą i godziną systemu.      <ul>      <li><code>dateTime</code>: wartość <code>datetime</code> lub <code>datetimezone</code> do sprawdzenia.</li>      </ul>


## Examples

### Example #1 
Określ, czy bieżący czas systemowy występuje w ciągu bieżącej godziny.
```powerquery
DateTime.IsInCurrentHour(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
DateTime
