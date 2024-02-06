---
title: Function.From
---

# Function.From


在使用單一清單引數的函式上建立具有特定參數簽章的函式


## Syntax

```powerquery
Function.From(
    functionType as type,
    function as function
) as function
```


## Remarks

使用一元函式 <code>function</code>，並建立類型為 <code>functionType</code> 的新函式，利用其引數建構清單，再將該新函式傳遞至 <code>function</code>。


## Examples

### Example #1 
將 List.Sum 轉換為雙引數相加的函式
```powerquery
Function.From(type function (a as number, b as number) as number, List.Sum)(2, 1)
```

Result: 
```powerquery
3
```


### Example #2 
將使用清單的函式轉換為雙引數函式
```powerquery
Function.From(type function (a as text, b as text) as text, (list) => list{0} & list{1})("2", "1")
```

Result: 
```powerquery
"21"
```




## Category
Function
