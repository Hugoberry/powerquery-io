---
title: List.ReplaceValue
---

# List.ReplaceValue


Mencari daftar nilai yang ditetapkan dan menggantinya.


## Syntax

```powerquery
List.ReplaceValue(
    list as list,
    oldValue as any,
    newValue as any,
    replacer as function
) as list
```


## Remarks

Mencari daftar nilai, `list`, untuk nilai `oldValue` dan mengganti setiap kemunculan dengan nilai pengganti `newValue`.


## Examples

### Example #1
Mengganti semua nilai "a" dalam daftar \{"a", "B", "a", "a"\} dengan "A".
```powerquery
List.ReplaceValue({"a", "B", "a", "a"}, "a", "A", Replacer.ReplaceText)
```

Result: 
```powerquery
{"A", "B", "A", "A"}
```




## Category
List.Transformation functions
