---
title: Type.OpenRecord
---

# Type.OpenRecord


Verilen kayıt türünün açık bir sürümünü (veya zaten açıksa aynı türü) döndürür.


## Syntax

```powerquery
Type.OpenRecord(
    type as type
) as type
```


## Remarks

Verilen <code>record</code> <code>type</code> türünün açık bir sürümünü (veya zaten açıksa aynı türü) döndürür.


## Examples

### Example #1 
&lt;code&gt;type [ A = number]&lt;/code&gt; için açık bir sürüm oluşturun.
```powerquery
Type.OpenRecord(type [A = number])
```

Result: 
```powerquery
type [A = number, ...]
```




## Category
Type
