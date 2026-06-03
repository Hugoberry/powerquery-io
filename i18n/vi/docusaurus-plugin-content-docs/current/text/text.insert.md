---
title: Text.Insert
---

# Text.Insert


Chèn một giá trị văn bản vào một giá trị khác tại một vị trí cho sẵn.


## Syntax

```powerquery
Text.Insert(
    text as text,
    offset as number,
    newText as text
) as text
```


## Remarks

Trả về kết quả chèn giá trị văn bản `newText` vào một giá trị văn bản `text` tại vị trí `offset`. Vị trí bắt đầu tại số 0.


## Examples

### Example #1
Chèn "C" giữa "B" và "D" trong "ABD".
```powerquery
Text.Insert("ABD", 2, "C")
```

Result: 
```powerquery
"ABCD"
```




## Category
Text.Modification
