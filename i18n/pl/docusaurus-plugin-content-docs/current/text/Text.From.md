---
title: Text.From
---

# Text.From


Tworzy wartość tekstową na podstawie danej wartości.


## Syntax

```powerquery
Text.From(
    value as any,
    optional culture as text
) as text
```


## Remarks

Zwraca tekstową reprezentację wartości określonej w parametrze <code>value</code>. Parametr <code>value</code> może zawierać wartość typu <code>number</code>, <code>date</code>, <code>time</code>, <code>datetime</code>, <code>datetimezone</code>, <code>logical</code>, <code>duration</code> lub <code>binary</code>.    Jeśli dana wartość jest równa null, funkcja <code>Text.From</code> zwraca wartość null. Można także określić opcjonalny parametr <code>culture</code> (na przykład „en-US”).


## Examples

### Example #1 
Utwórz wartość tekstową na podstawie wartości liczbowej równej 3.
```powerquery
Text.From(3)
```

Result: 
```powerquery
"3"
```




## Category
Text.Conversions from and to text
