---
title: DateTimeZone.FixedLocalNow
---

# DateTimeZone.FixedLocalNow


## Description

Vrne trenutni datum in uro v lokalnem časovnem pasu. Ta vrednost je nespremenljiva in se ne bo spremenila z zaporednimi klici.


## Syntax

```powerquery
DateTimeZone.FixedLocalNow(

) as datetimezone
```


## Details

Vrne vrednost <code>datetime</code>, nastavljeno na trenutni datum in uro v sistemu. Vrnjena vrednost vsebuje podatke o časovnem pasu, ki predstavljajo lokalni časovni pas. Ta vrednost je nespremenljiva in se ne bo spremenila z zaporednimi klici, kar ne drži za DateTimeZone.LocalNow, ki lahko vrne različne vrednosti v postopku izvajanja izraza.



## Category
DateTimeZone
