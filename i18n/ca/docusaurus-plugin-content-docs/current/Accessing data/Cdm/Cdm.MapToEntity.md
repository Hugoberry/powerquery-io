---
title: Cdm.MapToEntity
---

# Cdm.MapToEntity


## Description

Retorna una taula amb columnes assignades als atributs d&#39;una entitat del Common Data Service, inclosos els tipus de dades.


## Syntax

```powerquery
Cdm.MapToEntity(
    table as table,
    columnDefinitions as any,
    optional defaultType as type,
    optional defaultCdmClass as text
) as table
```


## Details

Retorna una taula amb columnes assignades als atributs d'una entitat del Common Data Service, inclosos els tipus de dades. Les columnes de la definició de l'entitat s'afegiran si no estan assignades, i totes les columnes sense assignar se suprimiran.


