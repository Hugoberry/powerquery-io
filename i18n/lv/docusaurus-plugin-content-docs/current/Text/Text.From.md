---
title: Text.From
---

# Text.From


## Description

Tiek izveidota teksta vērtība no sniegtās vērtības.


## Syntax

```powerquery
Text.From(
    value as any,
    optional culture as text
) as text
```


## Details

Atgriež parametra <code>value</code> vērtības atveidojumu teksta formātā. Parametra <code>value</code> vērtība var būt tipa <code>number</code>, <code>date</code>, <code>time</code>, <code>datetime</code>, <code>datetimezone</code>, <code>logical</code>, <code>duration</code> vai <code>binary</code> vērtība.    Ja norādītā vērtība ir Null, funkcija <code>Text.From</code> atgriež vērtību Null. Var norādīt arī neobligātu parametru <code>culture</code> (piemēram, "lv-LV").


## Examples

### Example #1 
Izveidojiet teksta vērtību no skaitļa 3.
```powerquery
Text.From(3)
```

Result: 
```powerquery
"3"
```




## Category
Text.Conversions from and to text
