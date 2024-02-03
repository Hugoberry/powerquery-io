---
title: Type.TableRow
---

# Type.TableRow


## Description

Retorna o tipo de linha do tipo de tabela.


## Syntax

```powerquery
Type.TableRow(
    table as type
) as type
```


## Details

Retorna o tipo de linha do tipo de tabela especificada. O resultado será sempre um tipo de registro.


## Examples

### Example #1 
Devolver a informação do tipo de linha para uma tabela simples.
```powerquery
let
    tableRowType = Type.TableRow(Value.Type(#table({"Column1"}, {})))
in
    Type.RecordFields(tableRowType)
```

Result: 
```powerquery
[Column1 = [Type = type any, Optional = false]]
```




## Category
Type
