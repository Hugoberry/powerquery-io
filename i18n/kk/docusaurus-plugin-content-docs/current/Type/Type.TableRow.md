---
title: Type.TableRow
---

# Type.TableRow


## Description

Кесте түрі үшін жол түрін қайтарады.


## Syntax

```powerquery
Type.TableRow(
    table as type
) as type
```


## Details

Көрсетілген кесте түрінің жол түрін қайтарады. Нәтиже әрқашан жазба түрі болады.


## Examples

### Example #1 
Қарапайым кесте үшін жол түрінің ақпаратын қайтару.
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
