---
title: Date.WeekOfYear
---

# Date.WeekOfYear


## Description

Возвращает число от 1 до 54, указывающее неделю в году, на которую приходится эта дата.


## Syntax

```powerquery
Date.WeekOfYear(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as number
```


## Details

Возвращает число от 1 до 54, обозначающее неделю в году для даты <code>dateTime</code>. <ul>        <li><code>dateTime</code>: значение <code>datetime</code>, для которого определяется неделя года.</li>        <li><code>firstDayOfWeek</code>: необязательное значение <code>Day.Type</code>, указывающее первый день недели (например, <code>Day.Sunday</code>). Если оно не указано, используется значение по умолчанию, установленное для языка и региональных параметров.</li>      </ul>


## Examples

### Example #1 
Определить, какая неделя года содержит 27 марта 2011 г.
```powerquery
Date.WeekOfYear(#date(2011, 03, 27))
```

Result: 
```powerquery
14
```


### Example #2 
Определить, какая неделя года содержит 27 марта 2011 г., если понедельник считается началом недели.
```powerquery
Date.WeekOfYear(#date(2011, 03, 27), Day.Monday)
```

Result: 
```powerquery
13
```




## Category
Date
