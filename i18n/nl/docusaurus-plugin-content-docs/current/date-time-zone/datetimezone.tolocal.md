---
title: DateTimeZone.ToLocal
---

# DateTimeZone.ToLocal


Zet het tijdzonegedeelte om naar de lokale tijdzone.


## Syntax

```powerquery
DateTimeZone.ToLocal(
    dateTimeZone as datetimezone
) as datetimezone
```


## Remarks

Wijzigt informatie over de tijdzone van de datum-/tijdzonewaarde <code>dateTimeZone</code> in informatie over de lokale tijdzone.    Als <code>dateTimeZone</code> geen tijdzonegedeelte heeft, wordt de informatie over de lokale tijdzone toegevoegd.


## Examples

### Example #1 
Informatie over de tijdzone wijzigen voor #datetimezone(2010, 12, 31, 11, 56, 02, 7, 30) in lokale tijdzone (uitgaande van PST).
```powerquery
DateTimeZone.ToLocal(#datetimezone(2010, 12, 31, 11, 56, 02, 7, 30))
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 12, 26, 2, -8, 0)
```




## Category
DateTimeZone
