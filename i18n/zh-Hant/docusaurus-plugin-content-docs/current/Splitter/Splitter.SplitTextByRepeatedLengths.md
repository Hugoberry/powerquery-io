---
title: Splitter.SplitTextByRepeatedLengths
---

# Splitter.SplitTextByRepeatedLengths


傳回函數，這個函數會重複地按照指定的長度，將文字分割成文字清單。


## Syntax

```powerquery
Splitter.SplitTextByRepeatedLengths(
    length as number,
    optional startAtEnd as logical
) as function
```


## Remarks

傳回函數，這個函數會重複地按照指定的長度，將文字分割成文字清單。


## Examples

### Example #1 
從輸入的開頭開始，重複將輸入分割為三個字元區塊。
```powerquery
Splitter.SplitTextByRepeatedLengths(3)("12345678")
```

Result: 
```powerquery
{"123", "456", "78"}
```


### Example #2 
從輸入的結尾開始，重複將輸入分割為三個字元區塊。
```powerquery
let
    startAtEnd = true
in
    Splitter.SplitTextByRepeatedLengths(3, startAtEnd)("87654321")
```

Result: 
```powerquery
{"87", "654", "321"}
```




## Category
Splitter
