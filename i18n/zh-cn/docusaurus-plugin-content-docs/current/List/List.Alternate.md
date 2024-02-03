---
title: List.Alternate
---

# List.Alternate


## Description

返回由列表中所有奇数编号的偏移量元素组成的列表。


## Syntax

```powerquery
List.Alternate(
    list as list,
    count as number,
    optional repeatInterval as number,
    optional offset as number
) as list
```


## Details

返回由列表中所有奇数编号的偏移量元素组成的列表。根据参数在从列表 <code>list</code> 取值和跳过其值间切换。    <ul>    <li><code>count</code>: 指定每次跳过的值数。</li>    <li><code>repeatInterval</code>: 可选的重复间隔，指示在两个跳过的值之间添加了多少个值。</li>    <li><code>offset</code>: 一个可选偏移量参数，指示在初始偏移量处开始跳过值。</li>    </ul>


## Examples

### Example #1 
从 \{1..10} 创建跳过第一个数的列表。
```powerquery
List.Alternate({1..10}, 1)
```

Result: 
```powerquery
{2, 3, 4, 5, 6, 7, 8, 9, 10}
```


### Example #2 
从 \{1..10} 创建每隔一个数跳过一个数的列表。
```powerquery
List.Alternate({1..10}, 1, 1)
```

Result: 
```powerquery
{2, 4, 6, 8, 10}
```


### Example #3 
从 \{1..10} 创建从 1 开始、每隔一个数跳过数的列表。
```powerquery
List.Alternate({1..10}, 1, 1, 1)
```

Result: 
```powerquery
{1, 3, 5, 7, 9}
```


### Example #4 
从 \{1..10} 创建从 1 开始先跳过一个值、接着保留两个值这样依次进行得到的列表。
```powerquery
List.Alternate({1..10}, 1, 2, 1)
```

Result: 
```powerquery
{1, 3, 4, 6, 7, 9, 10}
```




## Category
List.Selection
