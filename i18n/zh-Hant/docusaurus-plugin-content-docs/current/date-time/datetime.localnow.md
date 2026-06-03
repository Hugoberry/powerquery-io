---
title: DateTime.LocalNow
---

# DateTime.LocalNow


傳回本地時區的目前日期與時間。


## Syntax

```powerquery
DateTime.LocalNow(

) as datetime
```


## Remarks

傳回 `日期時間` 值設定為系統的目前日期和時間。  
  
此函數傳回的值取決於您是在本機計算機或在線執行查詢。例如，如果您在美國太平洋時區的系統上執行查詢，Power Query 桌面會傳回本機計算機上設定的日期和時間。不過，如果您在雲端上執行查詢，Power Query Online 會傳回 UTC 時間，因為它正在讀取雲端虛擬機上設定的時間，這些時間都設為 UTC。


## Examples

### Example #1
在執行桌面 Power Query 本機計算機上叫用此函式。
```powerquery
DateTime.LocalNow()
```

Result: 
```powerquery
The current local date and time.
```


### Example #2
在執行 Power Query Online 的雲端上叫用此函式。
```powerquery
DateTime.LocalNow()
```

Result: 
```powerquery
The current online (UTC) date and time.
```




## Category
DateTime
