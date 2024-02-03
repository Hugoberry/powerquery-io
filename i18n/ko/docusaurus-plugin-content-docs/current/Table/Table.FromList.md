---
title: Table.FromList
---

# Table.FromList


## Description

목록의 각 항목에 지정된 분할 함수를 적용하여 목록을 테이블로 변환합니다.


## Syntax

```powerquery
Table.FromList(
    list as list,
    optional splitter as function,
    optional columns as any,
    optional default as any,
    optional extraValues as ExtraValues.Type
) as table
```


## Details

목록의 각 항목에 선택적 분할 함수<code>splitter</code>을(를) 적용하여 목록 <code>list</code>을(를) 테이블로 변환합니다. 기본적으로 목록은 쉼표로 분할된 텍스트 값 목록으로 간주됩니다. 선택적 <code>columns</code>은(는) 열 수, 열 목록 또는 TableType일 수 있습니다. 선택적으로 <code>default</code> 및 <code>extraValues</code>을(를) 지정할 수도 있습니다.


## Examples

### Example #1 
기본 분할자를 사용하여 목록에서 테이블을 만듭니다.
```powerquery
Table.FromList(
    {"a,apple", "b,ball", "c,cookie", "d,door"},
    null,
    {"Letter", "Example Word"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [Letter = "a", #"Example Word" = "apple"],
    [Letter = "b", #"Example Word" = "ball"],
    [Letter = "c", #"Example Word" = "cookie"],
    [Letter = "d", #"Example Word" = "door"]
})
```


### Example #2 
사용자 지정 분할자를 사용하여 목록에서 테이블을 만듭니다.
```powerquery
Table.FromList(
    {"a,apple", "b,ball", "c,cookie", "d,door"},
    Splitter.SplitByNothing(),
    {"Letter and Example Word"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [#"Letter and Example Word" = "a,apple"],
    [#"Letter and Example Word" = "b,ball"],
    [#"Letter and Example Word" = "c,cookie"],
    [#"Letter and Example Word" = "d,door"]
})
```


### Example #3 
Record.FieldValues 분할자를 사용하여 목록에서 테이블을 만듭니다.
```powerquery
Table.FromList(
    {
        [CustomerID = 1, Name = "Bob"],
        [CustomerID = 2, Name = "Jim"]
    },
    Record.FieldValues,
    {"CustomerID", "Name"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = "Bob"],
    [CustomerID = 2, Name = "Jim"]
})
```




## Category
Table.Table construction
