---
title: DateTime.FixedLocalNow
---

# DateTime.FixedLocalNow


## Description

Vrne trenutni datum in uro v lokalnem časovnem pasu. Ta vrednost je nespremenljiva in se ne bo spremenila z zaporednimi klici.


## Syntax

```powerquery
DateTime.FixedLocalNow(

) as datetime
```


## Details

Vrne vrednost <code>datetime</code>, nastavljeno na trenutni datum in uro v sistemu. Ta vrednost je nespremenljiva in se ne bo spremenila z zaporednimi klici, kar ne drži za DateTime.LocalNow, ki lahko vrne različne vrednosti v postopku izvajanja izraza.



## Category
DateTime
