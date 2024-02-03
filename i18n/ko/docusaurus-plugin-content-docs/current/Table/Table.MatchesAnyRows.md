---
title: Table.MatchesAnyRows
---

# Table.MatchesAnyRows


## Description

테이블에 지정된 조건을 충족하는 행이 하나라도 있는지 여부를 나타냅니다.


## Syntax

```powerquery
Table.MatchesAnyRows(
    table as table,
    condition as function
) as logical
```


## Details

<code>table</code>에 지정된 <code>condition</code>과(와) 일치하는 행이 하나라도 있는지 여부를 나타냅니다. 일치하는 행이 있으면 <code>true</code>를 반환하고, 그렇지 않으면 <code>false</code>를 반환합니다.


## Examples

### Example #1 
&lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8]})&lt;/code&gt; 테이블의 [a] 열에 값이 짝수인 행이 하나라도 있는지 여부를 확인합니다.
```powerquery
Table.MatchesAnyRows(
    Table.FromRecords({
        [a = 1, b = 4],
        [a = 3, b = 8]
    }),
    each Number.Mod([a], 2) = 0
)
```

Result: 
```powerquery
false
```


### Example #2 
&lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt; 테이블에서 값이 [a = 1, b = 2]인 행이 하나라도 있는지 여부를 확인합니다.
```powerquery
Table.MatchesAnyRows(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = -3, b = 4]
    }),
    each _ = [a = 1, b = 2]
)
```

Result: 
```powerquery
true
```




## Category
Table.Row operations
