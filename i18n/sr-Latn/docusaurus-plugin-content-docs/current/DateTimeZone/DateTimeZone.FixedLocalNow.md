---
title: DateTimeZone.FixedLocalNow
---

# DateTimeZone.FixedLocalNow


## Description

Vraća trenutni datum i vreme u lokalnoj vremenskoj zoni. Ova vrednost je fiksna i neće se promeniti uzastopnim pozivima.


## Syntax

```powerquery
DateTimeZone.FixedLocalNow(

) as datetimezone
```


## Details

Vraća vrednost <code>datetime</code> podešenu na trenutni datum i vreme na sistemu. Vraćena vrednost sadrži informacije o vremenskoj zoni koje se odnose na lokalnu vremensku zonu. Ova vrednost je fiksna i neće se promeniti uzastopnim pozivima, za razliku od DateTimeZone.LocalNow, koja može vratiti različite vrednosti tokom izvršenja izraza.



## Category
DateTimeZone
