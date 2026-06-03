---
title: Marketo.Activities
---

# Marketo.Activities


Возвращает таблицу с ведущими действиями.


## Syntax

```powerquery
Marketo.Activities(
    url as text,
    startTime as date,
    activityIds as list
) as table
```


## Remarks

Вызывает конечную точку Marketo REST API по ссылке `url`/rest/v1/activities.json. Возвращаются все действия в списке `activityIds`, которые происходили с `startTime`.


## Examples

### Example #1
Извлекает таблицу действий "Посетить веб-страницу" с 1 ноября 2015 г.
```powerquery
Marketo.Activities("https://100-AAA-999.mktorest.com/rest", #date(2015,11,1), {1})
```

Result: 
```powerquery
Таблица со сведениями о всех действиях "Посетить веб-страницу" с 1 ноября
```



