---
title: Date.WeekOfYear
---

# Date.WeekOfYear


Gibt eine Zahl zwischen eins und 54 zurück, die angibt, in welcher Woche des Jahres das Datum liegt.


## Syntax

```powerquery
Date.WeekOfYear(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as number
```


## Remarks

Gibt eine Zahl zwischen 1 und 54 zurück, die angibt, in welche Woche des Jahres das Datum <code>dateTime</code> fällt. <ul>        <li><code>dateTime</code>: Ein <code>datetime</code>-Wert, für den die Woche des Jahres ermittelt wird.</li>        <li><code>firstDayOfWeek</code>: Ein optionaler <code>Day.Type</code>-Wert, der angibt, welcher Tag als Beginn einer neuen Woche gilt (z. B. <code>"Day.Sunday"</code>). Falls dieser Wert nicht angegeben wird, wird der kulturspezifische Standardwert verwendet.</li>      </ul>


## Examples

### Example #1 
Bestimmen Sie, welche Woche des Jahres den 27. März 2011 enthält.
```powerquery
Date.WeekOfYear(#date(2011, 03, 27))
```

Result: 
```powerquery
14
```


### Example #2 
Bestimmen Sie, welche Woche des Jahres den 27. März 2011 enthält, wobei Sie Montag als Beginn der Woche verwenden.
```powerquery
Date.WeekOfYear(#date(2011, 03, 27), Day.Monday)
```

Result: 
```powerquery
13
```




## Category
Date
