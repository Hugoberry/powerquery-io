---
title: Record.TransformFields
---

# Record.TransformFields


## Description

지정된 변환을 적용한 후 레코드를 반환합니다.


## Syntax

```powerquery
Record.TransformFields(
    record as record,
    transformOperations as list,
    optional missingField as MissingField.Type
) as record
```


## Details

목록 <code>transformOperations</code>에 지정된 변환을 <code>record</code>에 적용한 후 레코드를 반환합니다.    한 번에 하나 이상의 필드가 변환될 수 있습니다.       <div>단일 필드가 변환되는 경우 <code>transformOperations</code>은(는) 두 개의 항목이 있는 목록이어야 합니다. <code>transformOperations</code>의 첫 번째 항목은 필드 이름을 지정하고 <code>transformOperations</code>의 두 번째 항목은 변환에 사용할 함수를 지정합니다. 예: <code>\{"Quantity", Number.FromText}</code></div>      <div>여러 필드가 변환되는 경우 <code>transformOperations</code>은(는) 목록의 목록이어야 합니다. 이때 각 내부 목록은 필드 이름 및 변환 작업의 쌍입니다. 예: <code>\{\{"Quantity",Number.FromText},\{"UnitPrice", Number.FromText}}</code></div>


## Examples

### Example #1 
&#34;Price&#34; 필드를 숫자로 변환합니다.
```powerquery
Record.TransformFields(
    [OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = "100.0"],
    {"Price", Number.FromText}
)
```

Result: 
```powerquery
[OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100]
```


### Example #2 
&#34;OrderID&#34; 및 &#34;Price&#34; 필드를 숫자로 변환합니다.
```powerquery
Record.TransformFields(
    [OrderID = "1", CustomerID = 1, Item = "Fishing rod", Price = "100.0"],
    {{"OrderID", Number.FromText}, {"Price", Number.FromText}}
)
```

Result: 
```powerquery
[OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100]
```




## Category
Record.Transformations
