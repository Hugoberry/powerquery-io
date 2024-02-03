---
title: Cube.AddMeasureColumn
---

# Cube.AddMeasureColumn


## Description

Føjer en kolonne til den kube, der indeholder resultaterne af den måling, som anvendes i de enkelte rækkers rækkekontekst.


## Syntax

```powerquery
Cube.AddMeasureColumn(
    cube as table,
    column as text,
    measureSelector as any
) as table
```


## Details

Føjer en kolonne med navnet <code>column</code> til den <code>cube</code>, der indeholder resultaterne af den måling <code>measureSelector</code>, som anvendes i de enkelte rækkers rækkekontekst. Anvendelse af måling påvirkes af ændringer af dimensionens granularitet og udsnit. Målingsværdier justeres, når der er udført visse kubehandlinger.



## Category
Cube
