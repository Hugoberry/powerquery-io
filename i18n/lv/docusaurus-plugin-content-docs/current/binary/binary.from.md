---
title: Binary.From
---

# Binary.From


Izveido bināro vērtību no sniegtās vērtības


## Syntax

```powerquery
Binary.From(
    value as any,
    optional encoding as BinaryEncoding.Type
) as binary
```


## Remarks

Atgriež `binary` vērtību no norādītās vērtības `value`. Ja norādītā vērtība `value` ir `Null`, `Binary.From` atgriež `Null`. Ja norādītā vērtība `value` ir `binary`, tiek atgriezts `value`. Tālāk minēto tipu vērtības var pārvērst par `binary` vērtību.

-   `text`: `binary` vērtība no teksta atveidojuma. Papildinformāciju skatiet sadaļā `Binary.FromText`.

Ja vērtībai `value` ir jebkāds cits tips, tiek atgriezta kļūda.


## Examples

### Example #1
Iegūt `"1011"` vērtību `binary`.
```powerquery
Binary.From("1011")
```

Result: 
```powerquery
Binary.FromText("1011", BinaryEncoding.Base64)
```




## Category
Binary
