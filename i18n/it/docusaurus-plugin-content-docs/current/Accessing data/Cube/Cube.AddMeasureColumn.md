---
title: Cube.AddMeasureColumn
---

# Cube.AddMeasureColumn


## Description

Aggiunge una colonna al cubo contenente i risultati della misura applicata al contesto di ogni riga.


## Syntax

```powerquery
Cube.AddMeasureColumn(
    cube as table,
    column as text,
    measureSelector as any
) as table
```


## Details

Aggiunge una colonna con il nome <code>column</code> all'elemento <code>cube</code> contenente i risultati della misura <code>measureSelector</code> applicata al contesto di ogni riga. L'applicazione della misura è interessata dalle modifiche apportate al sezionamento e alla granularità della dimensione. I valori della misura verranno adattati dopo l'esecuzione di alcune operazioni del cubo.



## Category
Cube
