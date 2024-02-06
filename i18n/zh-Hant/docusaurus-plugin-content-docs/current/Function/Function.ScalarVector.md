---
title: Function.ScalarVector
---

# Function.ScalarVector


在向量函式之上建立純量函式，來批次處理多個引動過程。


## Syntax

```powerquery
Function.ScalarVector(
    scalarFunctionType as type,
    vectorFunction as function
) as function
```


## Remarks

傳回類型 <code>scalarFunctionType</code> 的純量函式，會以單一引數資料列叫用 <code>vectorFunction</code> 並傳回其單一輸出。此外，當純量函式反覆套用至 Table.AddColumn 等輸入資料表的各資料列時，<code>vectorFunction</code> 會改為只套用至所有輸入一次。<br /><code>vectorFunction</code> 會傳遞至資料行符合 <code>scalarFunctionType</code> 參數名稱與位置的資料表。此資料表的各資料列均包含呼叫一次純量函式的引數，以及與 <code>scalarFunctionType</code> 參數對應的資料行。<br /><code>vectorFunction</code> 必須傳回長度與輸入資料表相同的清單，其在各位置上的項目與在相同位置輸入資料列上的純量函式評估結果必須相同。<br />輸入資料表應為串流輸出位置，因此 <code>vectorFunction</code> 的串流輸出與輸入在同一時間僅應適用於一個區塊。具體來說，<code>vectorFunction</code> 不得多次列舉其輸入資料表。<br />



## Category
Function
