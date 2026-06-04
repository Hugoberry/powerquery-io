---
title: List.ReplaceValue
---

# List.ReplaceValue


Caută o listă pentru valoarea specificată şi o înlocuieşte.


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

Caută o listă de valori, `list`, pentru valoarea `oldValue` şi înlocuieşte fiecare ocurenţă cu valoarea de înlocuire `newValue`.


## Examples

### Example #1
Înlocuiţi toate valorile „a” din lista \{"a", "B", "a", "a"\} cu „A”.
```powerquery
List.ReplaceValue({"a", "B", "a", "a"}, "a", "A", Replacer.ReplaceText)
```

Result: 
```powerquery
{"A", "B", "A", "A"}
```




## Category
List.Transformation functions
