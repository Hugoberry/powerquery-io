---
title: Cdm.MapToEntity
---

# Cdm.MapToEntity


Retorna uma tabela com colunas mapeadas para os atributos de uma entidade no Common Data Model, incluindo os tipos de dados.


## Syntax

```powerquery
Cdm.MapToEntity(
    table as table,
    columnDefinitions as any,
    optional defaultType as type,
    optional defaultCdmClass as text
) as table
```


## Remarks

Retorna uma tabela com colunas mapeadas para os atributos de uma entidade no Common Data Model, incluindo os tipos de dados. As colunas da definição de entidade serão adicionadas se não estiverem mapeadas e as colunas não mapeadas serão removidas.


