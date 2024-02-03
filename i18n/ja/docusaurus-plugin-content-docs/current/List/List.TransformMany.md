---
title: List.TransformMany
---

# List.TransformMany


## Description

指定された関数を使用して入力リストから要素が変換されたリストを返します。


## Syntax

```powerquery
List.TransformMany(
    list as list,
    collectionTransform as function,
    resultTransform as function
) as list
```


## Details

入力リストから要素が投影されたリストを返します。<br /> <br /> この <code>collectionTransform</code> 関数は各要素を中間リストに変換し、 <code>resultTransform</code> 関数は最終的な結果を作成するために元の要素と中間リストの項目を受け取ります。<br /> <br /> この<code>collectionTransform</code> 関数には、シグネチャ <code>(x as any) as list => ...</code>で、<code>x</code> は <code>list</code>の要素です。 この <code>resultTransform</code> 関数は結果の形状を投影し、シグネチャ <code>(x as any, y as any) as any => ...</code>　<code>x</code> は <code>list</code> 内の要素であり、<code>y</code> は、<code>x</code> を <code>collectionTransform</code>に渡すことによって生成されるリストの要素です。


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
