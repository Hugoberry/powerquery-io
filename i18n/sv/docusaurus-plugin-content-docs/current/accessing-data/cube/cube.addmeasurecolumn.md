---
title: Cube.AddMeasureColumn
---

# Cube.AddMeasureColumn


Lägger till en kolumn i kuben som innehåller resultatet av måttet som tillämpats i radkontexten för varje rad.


## Syntax

```powerquery
Cube.AddMeasureColumn(
    cube as table,
    column as text,
    measureSelector as any
) as table
```


## Remarks

Lägger till en kolumn med namnet `column` i `cube` som innehåller resultatet av måttet (`measureSelector`) som tillämpats i radkontexten för varje rad. Måttillämpning påverkas av ändringar i dimensionsgranularitet och uppdelning. Måttvärden justeras efter att vissa kubåtgärder utförs.



## Category
Cube
