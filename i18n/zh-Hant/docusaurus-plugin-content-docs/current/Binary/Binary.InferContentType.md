---
title: Binary.InferContentType
---

# Binary.InferContentType


## Description

讀取二進位串流，並嘗試判斷串流的內容類型與格式資訊。


## Syntax

```powerquery
Binary.InferContentType(
    source as binary
) as record
```


## Details

傳回包含欄位 Content.Type 的記錄，其中包含了推斷的 MIME 類型。    若推斷的內容類型為 text/\*，並偵測到了編碼字碼頁，會額外傳回欄位 Content.Encoding，其中包含資料流的編碼。    若推斷的內容類型為 text/csv 並為分隔格式，會額外傳回欄位 Csv.PotentialDelimiter，其中包含資料表以分析可能的分隔符號。    若推斷的內容類型為 text/csv 並為固定寬度格式，則會額外傳回 Csv.PotentialPositions，其中包含清單以分析可能的固定寬度資料行位置。



## Category
Binary
