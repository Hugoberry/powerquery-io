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

Lägger till en kolumn med namnet <code>column</code> i <code>cube</code> som innehåller resultatet av måttet (<code>measureSelector</code>) som tillämpats i radkontexten för varje rad. Måttillämpning påverkas av ändringar i dimensionsgranularitet och uppdelning. Måttvärden justeras efter att vissa kubåtgärder utförs.



## Category
Cube
