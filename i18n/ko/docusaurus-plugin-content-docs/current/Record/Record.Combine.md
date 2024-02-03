---
title: Record.Combine
---

# Record.Combine


## Description

지정된 목록의 레코드를 결합합니다.


## Syntax

```powerquery
Record.Combine(
    records as list
) as record
```


## Details

지정된 <code>records</code>의 레코드를 결합합니다. <code>records</code>에 레코드가 아닌 값이 포함된 경우 오류가 반환됩니다.


## Examples

### Example #1 
레코드에서 결합된 레코드를 만듭니다.
```powerquery
Record.Combine({
    [CustomerID = 1, Name = "Bob"],
    [Phone = "123-4567"]
})
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```




## Category
Record.Transformations
