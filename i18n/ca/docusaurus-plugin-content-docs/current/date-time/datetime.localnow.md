---
title: DateTime.LocalNow
---

# DateTime.LocalNow


Retorna la data i l'hora actuals al fus horari local.


## Syntax

```powerquery
DateTime.LocalNow(

) as datetime
```


## Remarks

Retorna un conjunt de valors `datetime` a la data i hora actuals al system.  
  
El valor retornat per aquesta funció depèn de si esteu executant la consulta en un ordinador local o en línia. Per exemple, si executeu la consulta en un sistema ubicat al fus horari del Pacífic dels Estats Units, l'Power Query Desktop retorna la data i l'hora establertes a l'ordinador local. Tanmateix, si executeu la consulta al núvol, el Power Query Online retorna l'hora UTC perquè llegeix l'hora definida a les màquines virtuals del núvol, que estan totes definides com a UTC.


## Examples

### Example #1
Invoqueu aquesta funció en un ordinador local que executi Power Query Desktop.
```powerquery
DateTime.LocalNow()
```

Result: 
```powerquery
The current local date and time.
```


### Example #2
Invoqueu aquesta funció al núvol que executa Power Query Online.
```powerquery
DateTime.LocalNow()
```

Result: 
```powerquery
The current online (UTC) date and time.
```




## Category
DateTime
