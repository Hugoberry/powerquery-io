---
title: Table.ReplaceErrorValues
---

# Table.ReplaceErrorValues


## Description

지정한 열의 오류 값을 해당하는 지정된 값으로 바꿉니다.


## Syntax

```powerquery
Table.ReplaceErrorValues(
    table as table,
    errorReplacement as list
) as table
```


## Details

지정한 <code>table</code> 열의 오류 값을 <code>errorReplacement</code> 목록의 새 값으로 바꿉니다. 목록의 형식은 \{\{column1, value1}, …}입니다. 열당 값을 하나씩만 바꿀 수 있으며, 열을 두 번 이상 지정하면 오류가 발생합니다.


## Examples

### Example #1 
오류 값을 테이블의 텍스트 &#34;world&#34;로 바꿉니다.
```powerquery
Table.ReplaceErrorValues(
    Table.FromRows({{1, "hello"}, {3, ...}}, {"A", "B"}),
    {"B", "world"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [A = 1, B = "hello"],
    [A = 3, B = "world"]
})
```


### Example #2 
A 열 및 B 열의 오류 값을 테이블에 있는 텍스트 &#34;hello&#34; 및 &#34;world&#34;로 각각 바꿉니다.
```powerquery
Table.ReplaceErrorValues(
    Table.FromRows({{..., ...}, {1, 2}}, {"A", "B"}),
    {{"A", "hello"}, {"B", "world"}}
)
```

Result: 
```powerquery
Table.FromRecords({
    [A = "hello", B = "world"],
    [A = 1, B = 2]
})
```




## Category
Table.Transformation
