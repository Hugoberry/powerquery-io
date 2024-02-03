---
title: Combiner.CombineTextByLengths
---

# Combiner.CombineTextByLengths


## Description

傳回函式，其會使用指定的長度結合文字清單。


## Syntax

```powerquery
Combiner.CombineTextByLengths(
    lengths as list,
    optional template as text
) as function
```


## Details

傳回函式，其會使用指定的長度結合文字值清單為單一文字值。


## Examples

### Example #1 
從每個輸入值擷取指定的字元數，以結合文字值清單。
```powerquery
Combiner.CombineTextByLengths({1, 2, 3})({"aaa", "bbb", "ccc"})
```

Result: 
```powerquery
"abbccc"
```


### Example #2 
使用範本文字預先填入結果之後，擷取指定的字元數，以結合文字值清單。
```powerquery
Combiner.CombineTextByLengths({1, 2, 3}, "*********")({"aaa", "bbb", "ccc"})
```

Result: 
```powerquery
"abbccc***"
```




## Category
Combiner
