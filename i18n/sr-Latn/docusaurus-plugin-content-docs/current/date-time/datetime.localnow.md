---
title: DateTime.LocalNow
---

# DateTime.LocalNow


Vraća trenutni datum i vreme u lokalnoj vremenskoj zoni.


## Syntax

```powerquery
DateTime.LocalNow(

) as datetime
```


## Remarks

Vraća vrednost `datuma i vremena` podešenu na trenutni datum i vreme na sistemu.  
  
Vrednost koju vraća ova funkcija zavisi od toga da li koristite upit na lokalnom računaru ili na mreži. Na primer, ako pokrenete upit na sistemu koji se nalazi u pacifičkoj vremenskoj zoni SAD, Power Query Radna površina vraća datum i vreme postavljene na lokalnom računaru. Međutim, ako pokrenete upit u oblaku, Power Query Online vraća UTC vreme zato što čita vreme postavljeno na virtuelnim mašinama u oblaku koje su sve podešene na UTC.


## Examples

### Example #1
Pozovite ovu funkciju na lokalnom računaru koji radi Power Query radnoj površini.
```powerquery
DateTime.LocalNow()
```

Result: 
```powerquery
The current local date and time.
```


### Example #2
Pozovite ovu funkciju u oblaku koji radi Power Query Online.
```powerquery
DateTime.LocalNow()
```

Result: 
```powerquery
The current online (UTC) date and time.
```




## Category
DateTime
