---
title: List.TransformMany
---

# List.TransformMany


## Description

지정된 함수를 사용하여 입력 목록에서 변환된 요소로 구성된 목록을 반환합니다.


## Syntax

```powerquery
List.TransformMany(
    list as list,
    collectionTransform as function,
    resultTransform as function
) as list
```


## Details

입력 목록에서 요소가 투영된 목록을 반환합니다.<br />    <br />    <code>collectionTransform</code> 함수는 각 요소를 중간 목록으로 변환하고 <code>resultTransform</code> 함수는 최종 결과를 구성하기 위해 원래 요소와 중간 목록의 항목을 수신합니다.<br />    <br />    <code>collectionTransform</code> 함수에는 서명 <code>(x as any) as list => ...</code>가 있고 여기서 <code>x</code>는 <code>list</code>의 요소입니다.    <code>resultTransform</code> 함수는 결과의 모양을 투영하고 서명 <code>(x as any, y as any) as any => ...</code>를 포함합니다. 여기서 <code>x</code>는 <code>list</code>의 요소이고 <code>y</code>는 <code>x</code>를 <code>collectionTransform</code>에 전달하여 생성된 목록의 요소입니다.


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
