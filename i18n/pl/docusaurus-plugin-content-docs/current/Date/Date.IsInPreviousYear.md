---
title: Date.IsInPreviousYear
---

# Date.IsInPreviousYear


## Description

Wskazuje, czy ta data przypada w poprzednim roku określonym zgodnie z bieżącą datą i godziną systemu. Pamiętaj, że funkcja ta zwraca wartość false, gdy przekazana wartość występuje w ciągu bieżącego roku.


## Syntax

```powerquery
Date.IsInPreviousYear(
    dateTime as any
) as logical
```


## Details

Wskazuje, czy dana wartość daty/godziny <code>dateTime</code> przypada w poprzednim roku określonym zgodnie z bieżącą datą i godziną systemu. Pamiętaj, że funkcja ta zwraca wartość false, gdy przekazana wartość występuje w bieżącym roku.      <ul>      <li><code>dateTime</code>: wartość <code>date</code>, <code>datetime</code> lub <code>datetimezone</code> do oszacowania.</li>      </ul>


## Examples

### Example #1 
Ustal, czy rok przed aktualną godziną systemu wypada w poprzednim roku.
```powerquery
Date.IsInPreviousYear(Date.AddYears(DateTime.FixedLocalNow(), -1))
```

Result: 
```powerquery
true
```




## Category
Date
