---
title: Web.BrowserContents
---

# Web.BrowserContents


## Description

Возвращает HTML-код для указанного URL-адреса, просматриваемого веб-браузером.


## Syntax

```powerquery
Web.BrowserContents(
    url as text,
    optional options as record
) as text
```


## Details

Возвращает HTML-код для предоставленного значения <code>url</code> в том виде, как он отображается в браузере. Для указания дополнительных свойств можно указать необязательный параметр записи <code>options</code>. Запись может содержать следующие поля.     <ul>        <li><code>ApiKeyName</code>: если целевой сайт поддерживает ключ API, этот параметр можно использовать для указания имени (не значения) параметра ключа, который следует использовать в URL-адресе. Фактическое значение ключа указывается в учетных данных.</li>        <li><code>WaitFor</code>: указывает условие ожидания перед скачиванием HTML-кода, помимо ожидания загрузки страницы (всегда выполняется). Может быть записью, содержащей поля Timeout (Время ожидания) и Selector (Селектор). Если указано только значение Timeout, функция подождет указанное в нем время перед скачиванием HTML-кода. Если указаны оба поля и время ожидания истекает до начала существования на странице Selector, произойдет ошибка. Если значение Selector указано без Timeout, будет применено время ожидания по умолчанию, равное 30 секундам.</li>      </ul>    


## Examples

### Example #1 
Возвращает HTML-код для https://microsoft.com.
```powerquery
Web.BrowserContents("https://microsoft.com")
```

Result: 
```powerquery
"<!DOCTYPE html><html xmlns=..."
```


### Example #2 
Возвращает HTML-код страницы https://microsoft.com после ожидания появления селектора CSS.
```powerquery
Web.BrowserContents("https://microsoft.com", [WaitFor = [Selector = "div.ready"]])
```

Result: 
```powerquery
"<!DOCTYPE html><html xmlns=..."
```


### Example #3 
Возвращает HTML-код для https://microsoft.com после ожидания в течение десяти секунд.
```powerquery
Web.BrowserContents("https://microsoft.com", [WaitFor = [Timeout = #duration(0,0,0,10)]])
```

Result: 
```powerquery
"<!DOCTYPE html><html xmlns=..."
```


### Example #4 
Возвращает HTML-код страницы https://microsoft.com после ожидания появления селектора CSS в течение десяти секунд.
```powerquery
Web.BrowserContents("https://microsoft.com", [WaitFor = [Selector = "div.ready", Timeout = #duration(0,0,0,10)]])
```

Result: 
```powerquery
"<!DOCTYPE html><html xmlns=..."
```




## Category
Доступ к данным
