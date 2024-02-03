---
title: Date.WeekOfYear
---

# Date.WeekOfYear


## Description

Retourneert een getal van 1 tot 54 dat aangeeft in welke week van het jaar deze datum valt.


## Syntax

```powerquery
Date.WeekOfYear(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as number
```


## Details

Hiermee wordt een getal van 1 tot 54 geretourneerd dat aangeeft in welke week van het jaar de datum <code>dateTime</code> valt. <ul> <li><code>dateTime</code>: Een <code>datetime</code>-waarde waarvoor de week van het jaar wordt vastgesteld.</li> <li><code>firstDayOfWeek</code>: Een optionele <code>Day.Type</code> -waarde die aangeeft welke dag wordt beschouwd als het begin van een nieuwe week (bijvoorbeeld <code>Day.Sunday</code>). Als u niets opgeeft, wordt een cultuurafhankelijke standaard gebruikt.</li> </ul>


## Examples

### Example #1 
Bepalen welke week van het jaar 27 maart 2011 bevat.
```powerquery
Date.WeekOfYear(#date(2011, 03, 27))
```

Result: 
```powerquery
14
```


### Example #2 
Bepalen welke week van het jaar 27 maart 2011 bevat, met maandag als begin van de week.
```powerquery
Date.WeekOfYear(#date(2011, 03, 27), Day.Monday)
```

Result: 
```powerquery
13
```




## Category
Date
