---
title: Web.BrowserContents
---

# Web.BrowserContents


如網頁瀏覽器所檢視，傳回指定 URL 的 HTML。


## Syntax

```powerquery
Web.BrowserContents(
    url as text,
    optional options as record
) as text
```


## Remarks

傳回指定 <code>url</code> 的 HTML，如網頁瀏覽器的檢視內容。您可提供選擇性記錄參數 <code>options</code> 來指定其他屬性。記錄可以包含下列欄位:     <ul>        <li><code>ApiKeyName</code>: 若目標網站採用 API 金鑰的概念，則可使用此參數來指定 URL 中必須使用的金鑰參數名稱 (而非值)。系統會在認證中提供實際的金鑰值。</li>        <li><code>WaitFor</code>: 指定在下載 HTML 前除了等待頁面載入 (這一律會完成) 以外的等待條件。可以是包含 Timeout 和 (或) Selector 欄位的記錄。如果只指定 Timeout，函式會先等待指定的時間長度，再下載 HTML。如果同時指定 Selector 和 Timeout，而且 Timeout 在 Selector 出現於頁面上之前就已結束，就會擲回錯誤。若指定 Selector 但未指定 Timeout，會套用預設為 30 秒的 Timeout。</li>      </ul>    


## Examples

### Example #1 
傳回 https://microsoft.com 的 HTML。
```powerquery
Web.BrowserContents("https://microsoft.com")
```

Result: 
```powerquery
"<!DOCTYPE html><html xmlns=..."
```


### Example #2 
等待 CSS 選取器出現之後，為 https://microsoft.com 傳回 HTML。
```powerquery
Web.BrowserContents("https://microsoft.com", [WaitFor = [Selector = "div.ready"]])
```

Result: 
```powerquery
"<!DOCTYPE html><html xmlns=..."
```


### Example #3 
在等待十秒後傳回 https://microsoft.com 的 HTML。
```powerquery
Web.BrowserContents("https://microsoft.com", [WaitFor = [Timeout = #duration(0,0,0,10)]])
```

Result: 
```powerquery
"<!DOCTYPE html><html xmlns=..."
```


### Example #4 
等待 CSS 選取器出現 (最長 10 秒) 之後，為 https://microsoft.com 傳回 HTML。
```powerquery
Web.BrowserContents("https://microsoft.com", [WaitFor = [Selector = "div.ready", Timeout = #duration(0,0,0,10)]])
```

Result: 
```powerquery
"<!DOCTYPE html><html xmlns=..."
```




## Category
正在存取資料
