---
title: Variable.ValueOrDefault
---

# Variable.ValueOrDefault


Atgriež norādītā mainīgā vērtību vai noklusējuma vērtību, ja mainīgais nav definēts.


## Syntax

```powerquery
Variable.ValueOrDefault(
    identifier as text,
    optional defaultValue as any
) as any
```


## Remarks

Atgriež norādītā mainīgā `identifier` vērtību, ko definē pašreizējā novērtēšanas vide. Ja mainīgais nav definēts, tiek atgriezta `defaultValue` neobligātā vērtība.



## Category
Values.Implementation
