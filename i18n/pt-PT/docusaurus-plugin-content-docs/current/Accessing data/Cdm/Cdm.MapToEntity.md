---
title: Cdm.MapToEntity
---

# Cdm.MapToEntity


## Description

Devolve uma tabela com colunas mapeadas aos atributos de uma entidade no Common Data Model, incluindo tipos de dados.


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

Devolve uma tabela com colunas mapeadas aos atributos de uma entidade no Common Data Model, incluindo tipos de dados. As colunas da definição de entidade serão adicionadas se não forem mapeadas e quaisquer colunas não mapeadas serão removidas.


