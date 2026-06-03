---
title: DateTime.LocalNow
---

# DateTime.LocalNow


Возвращает текущую дату и время в местном часовом поясе.


## Syntax

```powerquery
DateTime.LocalNow(

) as datetime
```


## Remarks

Возвращает значение `datetime` текущей дате и времени в системе.  
  
Значение, возвращаемое этой функцией, зависит от того, выполняется ли запрос на локальном компьютере или в сети. Например, если вы выполняете запрос в системе, расположенной в тихоокеанском часовом поясе США, Power Query Desktop возвращает дату и время, задаемые на локальном компьютере. Однако при выполнении запроса в облаке Power Query Online возвращает время в формате UTC, так как оно считывание времени, задано на облачных виртуальных машинах, для которых задано значение UTC.


## Examples

### Example #1
Вызов этой функции на локальном компьютере с Power Query Desktop.
```powerquery
DateTime.LocalNow()
```

Result: 
```powerquery
The current local date and time.
```


### Example #2
Вызов этой функции в облаке, работающем Power Query Online.
```powerquery
DateTime.LocalNow()
```

Result: 
```powerquery
The current online (UTC) date and time.
```




## Category
DateTime
