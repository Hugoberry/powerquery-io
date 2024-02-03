---
title: List.Sum
---

# List.Sum


## Description

목록에 있는 항목의 합을 반환합니다.


## Syntax

```powerquery
List.Sum(
    list as list,
    optional precision as Precision.Type
) as any
```


## Details

<code>list</code> 목록에 있는 Null이 아닌 값의 합을 반환합니다. 목록에 Null이 아닌 값이 없으면 Null을 반환합니다.


## Examples

### Example #1 
&lt;code&gt;\{1, 2, 3}&lt;/code&gt; 목록에 있는 숫자의 합을 확인합니다.
```powerquery
List.Sum({1, 2, 3})
```

Result: 
```powerquery
6
```




## Category
List.Addition
