---
title: Date.WeekOfMonth
---

# Date.WeekOfMonth


## Description

Devolve un número do 1 ao 6 que indica a semana do mes na que cae esta data.


## Syntax

```powerquery
Date.WeekOfMonth(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as number
```


## Details

Devolve un número do 1 ao 6 que indica a semana do mes na que cae a data <code>dateTime</code>. <ul>        <li><code>dateTime</code>: un valor <code>datetime</code> a partir do que se determina a semana do mes.</li>      </ul>


## Examples

### Example #1 
Determina a semana do 15 de marzo de 2011.
```powerquery
Date.WeekOfMonth(#date(2011, 03, 15))
```

Result: 
```powerquery
3
```




## Category
Date
