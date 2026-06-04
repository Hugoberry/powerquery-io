---
title: Text.BeforeDelimiter
---

# Text.BeforeDelimiter


Text.BeforeDelimiter


## Syntax

```powerquery
Text.BeforeDelimiter(
    text as text,
    delimiter as text,
    optional index as any
) as any
```


## Remarks

傳回 `text` 在指定的 `delimiter` 之前的部分。 選擇性的數字 `index`，表示應考量哪些 `delimiter` 的出現處。 選擇性的清單 `index`，表示應考量哪些 `delimiter` 的出現處，以及編製索引時應從輸入的開頭或結尾開始進行。


## Examples

### Example #1
取得 "111-222-333" 在 (第一個) 連字號之前的部分。
```powerquery
Text.BeforeDelimiter("111-222-333", "-")
```

Result: 
```powerquery
"111"
```


### Example #2
取得 "111-222-333" 在第二個連字號之前的部分。
```powerquery
Text.BeforeDelimiter("111-222-333", "-", 1)
```

Result: 
```powerquery
"111-222"
```


### Example #3
取得 "111-222-333" 從結尾開始，在第二個連字號之前的部分。
```powerquery
Text.BeforeDelimiter("111-222-333", "-", {1, RelativePosition.FromEnd})
```

Result: 
```powerquery
"111"
```




## Category
Text.Transformations
