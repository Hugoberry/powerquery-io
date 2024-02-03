---
title: Marketo.Activities
---

# Marketo.Activities


## Description

Повертає таблицю з діями потенційних клієнтів.


## Syntax

```powerquery
Marketo.Activities(
    url as text,
    startTime as date,
    activityIds as list
) as table
```


## Details

Викликає кінцеву точку Marketo REST API за адресою <code>url</code>/rest/v1/activities.json. Повертаються всі дії в списку <code>activityIds</code>, які відбулися за період від дати, указаної в параметрі <code>startTime</code>.


## Examples

### Example #1 
Отримує таблицю дій &#34;Відвідання веб-сторінки&#34; за період від 1 листопада 2015 р.
```powerquery
Marketo.Activities("https://100-AAA-999.mktorest.com/rest", #date(2015,11,1), {1})
```

Result: 
```powerquery
Таблиця з докладними відомостями про всі дії "Відвідання веб-сторінки" за період від 1 листопада
```



