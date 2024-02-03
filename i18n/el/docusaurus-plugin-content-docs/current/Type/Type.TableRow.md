---
title: Type.TableRow
---

# Type.TableRow


## Description

Επιστρέφει το τύπο γραμμής του τύπου πίνακα.


## Syntax

```powerquery
Type.TableRow(
    table as type
) as type
```


## Details

Επιστρέφει τον τύπο γραμμής του καθορισμένου τύπου πίνακα. Το αποτέλεσμα θα είναι πάντα ένας τύπος εγγραφής.


## Examples

### Example #1 
Επιστρέψτε τις πληροφορίες τύπου γραμμής για έναν απλό πίνακα.
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
