---
title: Function.From
---

# Function.From


## Description

除了创建采用单个列表实参的函数之外，还创建一个采用特定形参签名的函数


## Syntax

```powerquery
Function.From(
    functionType as type,
    function as function
) as function
```


## Details

采用一元函数 <code>function</code> 并创建一个类型为 <code>functionType</code> 的新函数，用于构造其参数列表，并将其传递给 <code>function</code>。


## Examples

### Example #1 
将 List.Sum 转换为一个包含两个参数的函数，这两个参数一同添加
```powerquery
Function.From(type function (a as number, b as number) as number, List.Sum)(2, 1)
```

Result: 
```powerquery
3
```


### Example #2 
转换将列表更改为包含两个参数的函数的函数
```powerquery
Function.From(type function (a as text, b as text) as text, (list) => list{0} & list{1})("2", "1")
```

Result: 
```powerquery
"21"
```




## Category
Function
