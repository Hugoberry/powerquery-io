---
title: Function.ScalarVector
---

# Function.ScalarVector


## Description

在向量函数的基础上创建一个标量函数，批量处理多次调用。


## Syntax

```powerquery
Function.ScalarVector(
    scalarFunctionType as type,
    vectorFunction as function
) as function
```


## Details

返回类型为 <code>scalarFunctionType</code> 的标量函数，该函数使用单行参数调用 <code>vectorFunction</code> 并返回其单个输出。此外，对每行输入表(例如，在 Table.AddColumn 中)重复应用标量函数时，将对所有输入应用 <code>vectorFunction</code> 一次。<br />将向 <code>vectorFunction</code> 传递一个表，该表的列匹配 <code>scalarFunctionType</code> 的参数的名称和位置。此表的每行均包含对标量函数的单个调用的参数，其中列对应于 <code>scalarFunctionType</code> 的参数<br /><code>vectorFunction</code> 必须返回一个与输入表长度相同的列表，其中每个位置的项必须与在对同一位置的输入行上的标量函数进行评估的结果相同。<br />输入表应流式传入，因此，<code>vectorFunction</code> 应在输入传入时流式传出其输出，一次仅处理一个输入区块。尤其要注意，<code>vectorFunction</code> 枚举其输入表的次数不能超过一次。<br />



## Category
Function
