---
title: Date.WeekOfYear
---

# Date.WeekOfYear


## Description

Vrátí číslo v rozsahu 1 až 54 značící, do kterého týdne roku spadá toto datum.


## Syntax

```powerquery
Date.WeekOfYear(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as number
```


## Details

Vrátí číslo od 1 do 54, které znamená, do jakého týdne roku datum <code>dateTime</code> spadá do. <ul>        <li><code>dateTime</code>: Hodnota <code>datetime</code>, pro kterou se týden roku určuje.</li>        <li><code>firstDayOfWeek</code>: Volitelná hodnota <code>Day.Type</code>, která určuje, který den se považuje za začátek nového týdne (například <code>Day.Sunday</code>). Pokud tento parametr není zadán, se použije se výchozí začátek týdne definovaný v jazykové verzi.</li>      </ul>


## Examples

### Example #1 
Určete, který týden v roce obsahuje 27. března 2011.
```powerquery
Date.WeekOfYear(#date(2011, 03, 27))
```

Result: 
```powerquery
14
```


### Example #2 
Určete, který týden v roce obsahuje 27. března 2011, a jako začátek týdne použijte pondělí.
```powerquery
Date.WeekOfYear(#date(2011, 03, 27), Day.Monday)
```

Result: 
```powerquery
13
```




## Category
Date
