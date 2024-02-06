---
title: DateTimeZone.ToUtc
---

# DateTimeZone.ToUtc


Zet het tijdzonegedeelte om naar de UTC-tijdzone.


## Syntax

```powerquery
DateTimeZone.ToUtc(
    dateTimeZone as datetimezone
) as datetimezone
```


## Remarks

Wijzigt informatie over de tijdzone van de datum-/tijdwaarde <code>dateTimeZone</code> in informatie over de UTC- of Universal Time-tijdzone.    Als <code>dateTimeZone</code> geen tijdzonegedeelte heeft, wordt de informatie over de UTC-tijdzone toegevoegd.


## Examples

### Example #1 
Informatie over de tijdzone wijzigen voor #datetimezone(2010, 12, 31, 11, 56, 02, 7, 30) in UTC-tijdzone.
```powerquery
DateTimeZone.ToUtc(#datetimezone(2010, 12, 31, 11, 56, 02, 7, 30))
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 4, 26, 2, 0, 0)
```




## Category
DateTimeZone
