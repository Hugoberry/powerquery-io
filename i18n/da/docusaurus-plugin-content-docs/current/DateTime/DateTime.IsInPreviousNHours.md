---
title: DateTime.IsInPreviousNHours
---

# DateTime.IsInPreviousNHours


## Description

Angiver, om denne datetime er indtruffet i løbet af det forrige antal timer, fastlagt i forhold til aktuel dato og aktuelt klokkeslæt i systemet. Bemærk, at denne funktion returnerer False, når der sendes en værdi, der indtræffer i løbet af den aktuelle time.


## Syntax

```powerquery
DateTime.IsInPreviousNHours(
    dateTime as any,
    hours as number
) as logical
```


## Details

Angiver, om den anførte datetime-værdi <code>dateTime</code> er indtruffet i løbet af det forrige antal timer, fastlagt i forhold til aktuel dato og aktuelt klokkeslæt i systemet. Bemærk, at denne funktion returnerer False, når den modtager en værdi, der indtræffer i løbet af den aktuelle time.      <ul>      <li><code>dateTime</code>: En <code>datetime</code>- eller <code>datetimezone</code>-værdi, som skal evalueres.</li>      <li><code>hours</code>: Antallet af timer.</li>      </ul>


## Examples

### Example #1 
Bestem, om timen før den aktuelle systemtid er i de forrige to timer.
```powerquery
DateTime.IsInPreviousNHours(DateTime.FixedLocalNow() - #duration(0, 2, 0, 0), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
