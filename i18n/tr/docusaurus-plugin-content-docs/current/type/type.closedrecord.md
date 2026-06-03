---
title: Type.ClosedRecord
---

# Type.ClosedRecord


Verilen kayıt türünün kapalı bir sürümünü (veya zaten kapalıysa aynı türü) döndürür.


## Syntax

```powerquery
Type.ClosedRecord(
    type as type
) as type
```


## Remarks

Verilen `record` `type` türünün kapalı bir sürümünü (veya zaten kapalıysa aynı) türü döndürür).


## Examples

### Example #1
`type [ A = number,...]` için kapalı bir sürüm oluşturun.
```powerquery
Type.ClosedRecord(type [A = number, ...])
```

Result: 
```powerquery
type [A = number]
```




## Category
Type
