---
title: List.TransformMany
---

# List.TransformMany


返回一个列表，其元素是使用指定的函数从输入列表转换而来。


## Syntax

```powerquery
List.TransformMany(
    list as list,
    collectionTransform as function,
    resultTransform as function
) as list
```


## Remarks

返回其元素从输入列表投影的列表。  
  
`collectionTransform` 函数将每个元素转换为中间列表， `resultTransform` 函数接收原始元素以及中间列表中的项，以便构造最终结果。  
  
`collectionTransform` 函数具有签名 `(x as any)作为列表 =>...`，其中 `x` 是 `list` 中的元素。 `resultTransform` 函数将投影结果的形状，并具有签名 `(x as any， y as any) 作为任何 =>...`，其中 `x` 是 `list` 中的元素，`y` 是通过将 `x` 传递给 `collectionTransform` 生成的列表中的元素。


## Examples

### Example #1
平展人员及其宠物的列表。
```powerquery
List.TransformMany(
    {
        [Name = "Alice", Pets = {"Scruffy", "Sam"}],
        [Name = "Bob", Pets = {"Walker"}]
    },
    each [Pets],
    (person, pet) => [Name = person[Name], Pet = pet]
)
```

Result: 
```powerquery
{
    [Name = "Alice", Pet = "Scruffy"],
    [Name = "Alice", Pet = "Sam"],
    [Name = "Bob", Pet = "Walker"]
}
```




## Category
List.Transformation functions
