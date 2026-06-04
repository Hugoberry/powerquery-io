---
title: Type.Is
---

# Type.Is


Određuje da li je vrednost prvog tipa uvek kompatibilna sa vrednošću drugog tipa.


## Syntax

```powerquery
Type.Is(
    type1 as type,
    type2 as type
) as logical
```


## Remarks

Određuje da li je vrednost `type1` uvek kompatibilna sa `type2`. Vrednost `type2` parametra treba da bude osnovna (ili osnovna) vrednost tipa "nullable". U suprotnom, ponašanje ove funkcije nije definisano i ne bi trebalo da se oslanja na to.


## Examples

### Example #1
Odredite da li vrednost tipa broja može uvek tretirati i kao bilo koja vrednost.
```powerquery
Type.Is(type number, type any)
```

Result: 
```powerquery
true
```


### Example #2
Odredite da li se vrednost bilo kog tipa može uvek tretirati i kao tip broja.
```powerquery
Type.Is(type any, type number)
```

Result: 
```powerquery
false
```




## Category
Type
