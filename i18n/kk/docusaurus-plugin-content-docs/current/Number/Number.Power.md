---
title: Number.Power
---

# Number.Power


## Description

Санды көрсетілген дәрежеге шығарады.


## Syntax

```powerquery
Number.Power(
    number as number,
    power as number
) as number
```


## Details

<code>number</code> санын <code>power</code> дәрежесіне шығару нәтижесін қайтарады.    Егер <code>number</code> немесе <code>power</code> null мәніне ие болса, <code>Number.Power</code> null мәнін қайтарады.      <ul>        <li><code>number</code>: негізі.</li>        <li><code>power</code>: дәреже көрсеткіші.</li>      </ul>


## Examples

### Example #1 
3 дәрежесіне шығарылған 5 мәнін (кубқа шығарылған 5) анықтау.
```powerquery
Number.Power(5, 3)
```

Result: 
```powerquery
125
```




## Category
Number.Operations
