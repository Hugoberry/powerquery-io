---
title: Web.Headers
---

# Web.Headers


## Description

Возвращает заголовки HTTP, скачанные с URL-адреса, в качестве значения записи.


## Syntax

```powerquery
Web.Headers(
    url as text,
    optional options as record
) as record
```


## Details

Возвращает заголовки, скачанные из <code>url</code> как запись. Для указания дополнительных свойств можно задать необязательный параметр записи <code>options</code>. Запись может содержать следующие поля:    <ul><li><code>Query</code> : Добавляйте параметры запросов в URL-адрес программным способом, не беспокоясь об экранировании.</li><li><code>ApiKeyName</code> : Если целевой сайт поддерживает ключ API, этот параметр можно использовать для указания имени (не значения) параметра ключа, который следует использовать в URL-адресе. Фактическое значение ключа указывается в учетных данных.</li><li><code>Headers</code> : При указании этого значения в виде записи в HTTP-запрос будут добавлены дополнительные заголовки.</li><li><code>Timeout</code> : При указании этого значения в виде длительности будет изменено время ожидания HTTP-запроса. Значение по умолчанию&#160;— 100&#160;секунд.</li><li><code>ExcludedFromCacheKey</code> : При указании этого значения в виде списка эти ключи заголовков HTTP будут исключены из вычислений для кэширования данных.</li><li><code>IsRetry</code> : При указании этого логического значения как True все существующие ответы в кэше будут игнорироваться при извлечении данных.</li><li><code>ManualStatusHandling</code> : При указании этого значения в виде списка встроенная обработка HTTP-запросов, ответ которых имеет один из этих кодов состояния, будет невозможна.</li><li><code>RelativePath</code> : Это значение, указанное в виде текста, будет добавлено к базовому URL-адресу перед выполнением запроса.</li></ul>    HTTP-запрос выполняется с помощью метода HEAD. Вне контекста настраиваемого соединителя данных доступно только подмножество заголовков ответов (по соображениям безопасности).    


## Examples

### Example #1 
Получение заголовков HTTP для &lt;code&gt;&#34;https://bing.com/search?q=Power+Query&#34;&lt;/code&gt; с помощью параметров RelativePath и Query.
```powerquery
let
    searchText = "Power Query"
in
    Web.Headers(
        "https://www.bing.com",
        [
            RelativePath = "search",
            Query = [q = searchText]
        ]
    )
```

Result: 
```powerquery
([
    #"Cache-Control" = "private, max-age=0",
    #"Content-Encoding" = "gzip",
    #"Content-Length" = "0",
    #"Content-Type" = "text/html; charset=utf-8",
    Date = "Tue, 14 Dec 2021 16:57:25 GMT",
    Expires = "Tue, 14 Dec 2021 16:56:25 GMT",
    Vary = "Accept-Encoding"
]
meta [
    Response.Status = 200
])
```




## Category
Accessing data
