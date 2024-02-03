---
title: DateTimeZone.FixedLocalNow
---

# DateTimeZone.FixedLocalNow


## Description

Atgriež pašreizējo datumu un laiku vietējā laika joslā. Šī vērtība ir fiksēta, un turpmākajās izsaukšanas reizēs tā netiks mainīta.


## Syntax

```powerquery
DateTimeZone.FixedLocalNow(

) as datetimezone
```


## Details

Atgriež <code>datetime</code> vērtību kopu uz sistēmas pašreizējo datumu un laiku. Atgrieztā vērtība ietver informāciju par laika joslu, atainojot vietējo laika joslu. Šī vērtība ir fiksēta, un turpmākajās izsaukšanas reizēs tā netiks mainīta atšķirībā no vērtības DateTimeZone.LocalNow, kas izteiksmes izpildīšanas gaitā var atgriezt dažādas vērtības.



## Category
DateTimeZone
