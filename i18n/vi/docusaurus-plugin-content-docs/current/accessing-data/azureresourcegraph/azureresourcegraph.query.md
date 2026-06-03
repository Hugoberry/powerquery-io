---
title: AzureResourceGraph.Query
---

# AzureResourceGraph.Query



## Syntax

```powerquery
AzureResourceGraph.Query(
    query as text,
    optional scope as text,
    optional subscription as text,
    optional managementGroup as text,
    optional options as record
) as table
```


## Remarks

Xem https://learn.microsoft.com/azure/governance/resource-graph/samples/starter?tabs=azure-cli để tham khảo mẫu truy vấn cho người bắt đầu.


## Examples

### Example #1
Trả về bảng chứa kết quả truy vấn của truy vấn người dùng có tên "resources"
```powerquery
AzureResourceGraph.Query("resources")
```



