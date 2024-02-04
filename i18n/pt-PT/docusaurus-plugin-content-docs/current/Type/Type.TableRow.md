---
title: Type.TableRow
---

# Type.TableRow


## Description

Devolve o tipo de linha do tipo de tabela.


## Syntax

```powerquery
Type.TableRow(
    table as type
) as type
```


## Details

Devolve o tipo de linha do tipo de tabela especificado. O resultado será sempre um tipo de gravação.


## Examples

### Example #1 
Devolve as informações de tipo de linha para uma tabela simples.
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
