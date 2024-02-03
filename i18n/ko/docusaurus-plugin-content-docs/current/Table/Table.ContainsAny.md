---
title: Table.ContainsAny
---

# Table.ContainsAny


## Description

지정된 레코드가 하나라도 테이블에 행으로 나타나는지 여부를 나타냅니다.


## Syntax

```powerquery
Table.ContainsAny(
    table as table,
    rows as list,
    optional equationCriteria as any
) as logical
```


## Details

레코드 목록 <code>rows</code>에서 지정된 레코드가 하나라도 <code>table</code>에 행으로 나타나는지 여부를 나타냅니다.    선택적 매개 변수 <code>equationCriteria</code>을(를) 지정하여 테이블 행 간의 비교를 제어할 수 있습니다.


## Examples

### Example #1 
&lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt; 테이블에 &lt;code&gt;[a = 1, b = 2]&lt;/code&gt; 또는 &lt;code&gt;[a = 3, b = 5]&lt;/code&gt; 행이 포함되어 있는지 여부를 확인합니다.
```powerquery
Table.ContainsAny(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 3, b = 4]
    }),
    {
        [a = 1, b = 2],
        [a = 3, b = 5]
    }
)
```

Result: 
```powerquery
true
```


### Example #2 
&lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt; 테이블에 &lt;code&gt;[a = 1, b = 3]&lt;/code&gt; 또는 &lt;code&gt;[a = 3, b = 5]&lt;/code&gt; 행이 포함되어 있는지 여부를 확인합니다.
```powerquery
Table.ContainsAny(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 3, b = 4]
    }),
    {
        [a = 1, b = 3],
        [a = 3, b = 5]
    }
)
```

Result: 
```powerquery
false
```


### Example #3 
[a] 열만 비교하여 &lt;code&gt;(Table.FromRecords(\{[a = 1, b = 2], [a = 3, b = 4]}))&lt;/code&gt; 테이블에 &lt;code&gt;[a = 1, b = 3]&lt;/code&gt; 또는 &lt;code&gt;[a = 3, b = 5]&lt;/code&gt; 행이 포함되어 있는지 여부를 확인합니다.
```powerquery
Table.ContainsAny(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 3, b = 4]
    }),
    {
        [a = 1, b = 3],
        [a = 3, b = 5]
    },
    "a"
)
```

Result: 
```powerquery
true
```




## Category
Table.Membership
