---
title: DateTime.LocalNow
---

# DateTime.LocalNow


Повертає поточну дату та час у місцевому часовому поясі.


## Syntax

```powerquery
DateTime.LocalNow(

) as datetime
```


## Remarks

Повертає значення `datetime`, установлене для поточних дати й часу в системі.  
  
Значення, яке повертає ця функція, залежить від того, чи виконується запит на локальному комп'ютері або в мережі. Наприклад, якщо виконати запит у системі, розташованій за тихоокеанським часовим поясом США, функція Power Query Desktop повертає дату й час, установлені на локальному комп'ютері. Однак, якщо виконати запит у хмарі, функція Power Query Online повертає час UTC, тому що він читає час, установлений на хмарних віртуальних машинах, для всіх яких встановлено значення UTC.


## Examples

### Example #1
Активуйте цю функцію на локальному комп'ютері, на якому запущено Power Query Desktop.
```powerquery
DateTime.LocalNow()
```

Result: 
```powerquery
The current local date and time.
```


### Example #2
Активуйте цю функцію в хмарі, що працює Power Query Online.
```powerquery
DateTime.LocalNow()
```

Result: 
```powerquery
The current online (UTC) date and time.
```




## Category
DateTime
