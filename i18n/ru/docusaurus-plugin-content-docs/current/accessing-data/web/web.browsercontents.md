---
title: Web.BrowserContents
---

# Web.BrowserContents


Возвращает HTML-код для указанного URL-адреса, просматриваемого веб-браузером.


## Syntax

```powerquery
Web.BrowserContents(
    url as text,
    optional options as record
) as text
```


## Remarks

Возвращает HTML-код для предоставленного `url` в том виде, как он будет показан в браузере. Для указания дополнительных свойств можно использовать необязательный параметр записи `options`. Запись может содержать следующие поля:

-   `ApiKeyName`: если целевой сайт имеет понятие о ключе API, этот параметр можно использовать для указания имени (не значения) параметра ключа, который следует использовать в URL-адресе. Фактическое значение ключа предоставляется в учетных данных.
-   `WaitFor`: указывает условие, выполнения которого следует дождаться перед скачиванием HTML-кода, помимо ожидания загрузки страницы (что выполняется всегда). Может быть записью, содержащей поля Timeout (Время ожидания) и Selector (Селектор). Если указано только значение времени ожидания, функция выждет указанное время перед скачиванием HTML-кода. Если указаны оба поля и время ожидания истекает, когда селектор еще не существует на странице, возникнет ошибка. Если указано значение селектора, но не время ожидания, будет использовано время ожидания по умолчанию, равное 30 секундам.


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
Accessing data
