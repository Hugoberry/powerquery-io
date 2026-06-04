---
title: DateTime.Date
---

# DateTime.Date


Vraća komponentu datuma za date, datetime ili datetimezone vrednosti.


## Syntax

```powerquery
DateTime.Date(
    dateTime as any
) as date
```


## Remarks

Vraća komponentu datuma parametra `dateTime` ako je parametar `datum`, `datum/vreme` ili `датум и временска зона` вредност, или `без вредности` ако је параметар `без вредности`.


## Examples

### Example #1
Pronalaženje vrednosti datuma za #datetime(2010, 12, 31, 11, 56, 02).
```powerquery
DateTime.Date(#datetime(2010, 12, 31, 11, 56, 02))
```

Result: 
```powerquery
#date(2010, 12, 31)
```




## Category
DateTime
