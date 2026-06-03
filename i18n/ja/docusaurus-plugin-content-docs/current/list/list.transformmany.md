---
title: List.TransformMany
---

# List.TransformMany


指定された関数を使用して入力リストから要素が変換されたリストを返します。


## Syntax

```powerquery
List.TransformMany(
    list as list,
    collectionTransform as function,
    resultTransform as function
) as list
```


## Remarks

入力リストから要素が投影されたリストを返します。  
  
この `collectionTransform` 関数は各要素を中間リストに変換し、 `resultTransform` 関数は最終的な結果を作成するために元の要素と中間リストの項目を受け取ります。  
  
この`collectionTransform` 関数には、シグネチャ `(x as any) as list => ...`で、`x` は `list`の要素です。 この `resultTransform` 関数は結果の形状を投影し、シグネチャ `(x as any, y as any) as any => ...`　`x` は `list` 内の要素であり、`y` は、`x` を `collectionTransform`に渡すことによって生成されるリストの要素です。


## Examples

### Example #1
人とそのペットのリストをフラット化します。
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
