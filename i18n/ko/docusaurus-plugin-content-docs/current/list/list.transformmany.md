---
title: List.TransformMany
---

# List.TransformMany


지정된 함수를 사용하여 입력 목록에서 변환된 요소로 구성된 목록을 반환합니다.


## Syntax

```powerquery
List.TransformMany(
    list as list,
    collectionTransform as function,
    resultTransform as function
) as list
```


## Remarks

입력 목록에서 요소가 투영된 목록을 반환합니다.  
  
`collectionTransform` 함수는 각 요소를 중간 목록으로 변환하고 `resultTransform` 함수는 최종 결과를 구성하기 위해 원래 요소와 중간 목록의 항목을 수신합니다.  
  
`collectionTransform` 함수에는 서명 `(x as any) as list => ...`가 있고 여기서 `x`는 `list`의 요소입니다. `resultTransform` 함수는 결과의 모양을 투영하고 서명 `(x as any, y as any) as any => ...`를 포함합니다. 여기서 `x`는 `list`의 요소이고 `y`는 `x`를 `collectionTransform`에 전달하여 생성된 목록의 요소입니다.


## Examples

### Example #1
사람과 그들의 애완동물 목록을 평면화합니다.
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
