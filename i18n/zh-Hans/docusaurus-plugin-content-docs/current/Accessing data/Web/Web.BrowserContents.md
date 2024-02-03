---
title: Web.BrowserContents
---

# Web.BrowserContents


## Description

返回由 Web 浏览器查看的指定 URL 的 HTML。


## Syntax

```powerquery
Web.BrowserContents(
    url as text,
    optional options as record
) as text
```


## Details

返回指定 <code>url</code> 的 HTML (如 Web 浏览器所查看)。可以提供可选记录参数 <code>options</code> 来指定其他属性。记录可包含以下字段:     <ul>         <li><code>ApiKeyName</code>: 如果目标站点具有 API 密钥的概念，则此参数可用于指定必须在 URL 中使用的密钥参数的名称(而不是值)。凭据中提供了实际的密钥值。</li>         <li><code>WaitFor</code>:指定在下载 HTML 前要等待完成的条件，除了等待页面加载以外(始终等待)。可以是包含 Timeout 和/或 Selector 字段的记录。如果仅指定了 Timeout，函数会在 HTML 下载前等待指定的时间。如果同时指定了 Selector 和 Timeout，且在 Timeout 后 Selector 才出现在页面上，将会抛出错误。如果指定了 Selector 而未指定 Timeout，默认应用 30 秒 Timeout。</li>      </ul>    


## Examples

### Example #1 
返回 https://microsoft.com 的 HTML。
```powerquery
Web.BrowserContents("https://microsoft.com")
```

Result: 
```powerquery
"<!DOCTYPE html><html xmlns=..."
```


### Example #2 
等待 CSS 选择器出现后返回 https://microsoft.com 的 HTML。
```powerquery
Web.BrowserContents("https://microsoft.com", [WaitFor = [Selector = "div.ready"]])
```

Result: 
```powerquery
"<!DOCTYPE html><html xmlns=..."
```


### Example #3 
等待十秒后返回 https://microsoft.com 的 HTML。
```powerquery
Web.BrowserContents("https://microsoft.com", [WaitFor = [Timeout = #duration(0,0,0,10)]])
```

Result: 
```powerquery
"<!DOCTYPE html><html xmlns=..."
```


### Example #4 
等待 CSS 选择器出现(最多十秒)后返回 https://microsoft.com 的 HTML。
```powerquery
Web.BrowserContents("https://microsoft.com", [WaitFor = [Selector = "div.ready", Timeout = #duration(0,0,0,10)]])
```

Result: 
```powerquery
"<!DOCTYPE html><html xmlns=..."
```




## Category
访问数据
