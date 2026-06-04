---
title: Number.Power
---

# Number.Power


Санды көрсетілген дәрежеге шығарады.


## Syntax

```powerquery
Number.Power(
    number as number,
    power as number
) as number
```


## Remarks

`number` санын `power` дәрежесіне шығару нәтижесін қайтарады. Егер `number` немесе `power` null мәніне ие болса, `Number.Power` null мәнін қайтарады.

-   `number`: негізі.
-   `power`: дәреже көрсеткіші.


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
