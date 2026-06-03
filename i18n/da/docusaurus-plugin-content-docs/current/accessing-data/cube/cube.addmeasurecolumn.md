---
title: Cube.AddMeasureColumn
---

# Cube.AddMeasureColumn


Føjer en kolonne til den kube, der indeholder resultaterne af den måling, som anvendes i de enkelte rækkers rækkekontekst.


## Syntax

```powerquery
Cube.AddMeasureColumn(
    cube as table,
    column as text,
    measureSelector as any
) as table
```


## Remarks

Føjer en kolonne med navnet `column` til den `cube`, der indeholder resultaterne af den måling `measureSelector`, som anvendes i de enkelte rækkers rækkekontekst. Anvendelse af måling påvirkes af ændringer af dimensionens granularitet og udsnit. Målingsværdier justeres, når der er udført visse kubehandlinger.



## Category
Cube
