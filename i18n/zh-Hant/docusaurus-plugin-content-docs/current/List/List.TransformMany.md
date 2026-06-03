---
title: List.TransformMany
---

# List.TransformMany


傳回清單，它的項目是使用指定的函數，從輸入清單轉換而成。


## Syntax

```powerquery
List.TransformMany(
    list as list,
    collectionTransform as function,
    resultTransform as function
) as list
```


## Remarks

傳回從輸入清單投射元素的清單。  
  
`collectionTransform` 函數會將每個元素轉換成中繼清單，而 `resultTransform` 函數會從中繼清單接收原始元素和項目，以建構最終結果。  
  
`collectionTransform` 函數的簽章 `(x 任意) 作為清單 => ...`)， 其中`x` 是 `list` 中的元素。 `resultTransform` 函數會投影結果的圖形，且簽章 `(x 任意，y 任意) 任意 => ...`, 其中 `x` 是 `list` 中的元素，而 `y` 是將 `x` 傳遞至 `collectionTransform` 所產生之清單中的元素 。


## Examples

### Example #1
壓平個人和他們的寵物清單。
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
