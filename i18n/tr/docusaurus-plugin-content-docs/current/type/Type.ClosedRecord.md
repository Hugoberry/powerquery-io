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

Verilen <code>record</code> <code>type</code> türünün kapalı bir sürümünü (veya zaten kapalıysa aynı) türü döndürür).


## Examples

### Example #1 
&lt;code&gt;type [ A = number]&lt;/code&gt; için kapalı bir sürüm oluşturun.
```powerquery
Type.ClosedRecord(type [A = number, ...])
```

Result: 
```powerquery
type [A = number]
```




## Category
Type
