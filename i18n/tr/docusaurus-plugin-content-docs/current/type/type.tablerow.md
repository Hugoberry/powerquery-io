---
title: Type.TableRow
---

# Type.TableRow


Tablo türündeki satır türünü döndürür.


## Syntax

```powerquery
Type.TableRow(
    table as type
) as type
```


## Remarks

Belirtilen tablo türündeki satır türünü döndürür. Sonuç her zaman bir kayıt türü olur.


## Examples

### Example #1 
Basit bir tablo için satır türü bilgilerini döndürün.
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
