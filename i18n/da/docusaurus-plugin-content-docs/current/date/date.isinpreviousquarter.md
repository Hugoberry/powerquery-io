---
title: Date.IsInPreviousQuarter
---

# Date.IsInPreviousQuarter


Angiver, om denne dato er indtruffet i det forrige kvartal, fastlagt i forhold til aktuel dato og aktuelt klokkeslæt i systemet. Bemærk, at denne funktion returnerer False, når den modtager en værdi, der indtræffer inden for det aktuelle kvartal.


## Syntax

```powerquery
Date.IsInPreviousQuarter(
    dateTime as any
) as logical
```


## Remarks

Angiver, om den anførte datetime-værdi `dateTime` optræder i løbet af det forrige kvartal, fastlagt i forhold til aktuel dato og aktuelt klokkeslæt i systemet. Bemærk, at denne funktion returnerer False, når den modtager en værdi, der indtræffer i løbet af det aktuelle kvartal.

-   `dateTime`: En `dato-`, `datetime-` eller `datetimezone`\-værdi, der skal evalueres.


## Examples

### Example #1
Afgør, om kvartalet før det aktuelle systemklokkeslæt ligger i det forrige kvartal.
```powerquery
Date.IsInPreviousQuarter(Date.AddQuarters(DateTime.FixedLocalNow(), -1))
```

Result: 
```powerquery
true
```




## Category
Date
