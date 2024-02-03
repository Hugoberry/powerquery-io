---
title: List.Generate
---

# List.Generate


## Description

生成值列表。


## Syntax

```powerquery
List.Generate(
    initial as function,
    condition as function,
    next as function,
    optional selector as function
) as list
```


## Details

使用提供的函数生成值列表。<code>initial</code> 函数生成一个起始候选值，然后针对 <code>condition</code> 进行测试。    如果候选值获得批准，则会将其作为结果列表的一部分返回，并通过将新批准的值传递给 <code>next</code> 来生成下一个候选值。    候选值无法匹配 <code>condition</code> 后，列表生成进程将停止。    也可以提供可选参数 <code>selector</code>，以转换生成列表中的项。


## Examples

### Example #1 
创建一个列表，方法是从 10 开始，重复递减一个，并确保每项大于零。
```powerquery
List.Generate(() => 10, each _ > 0, each _ - 1)
```

Result: 
```powerquery
{10, 9, 8, 7, 6, 5, 4, 3, 2, 1}
```


### Example #2 
生成包含 x 和 y 的记录的列表，其中 x 是一个值，y 是一个列表。x 应保持小于 10 并表示列表 y 中的项数。在生成列表后，只返回 x 值。
```powerquery
List.Generate(
    () => [x = 1, y = {}],
    each [x] < 10,
    each [x = List.Count([y]), y = [y] & {x}],
    each [x]
)
```

Result: 
```powerquery
{1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9}
```




## Category
List.Generators
