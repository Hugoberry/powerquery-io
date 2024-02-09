---
title: WebAction.Request
---

# WebAction.Request


Создает действие, которое при выполнении вернет результаты выполнения HTTP-запроса в виде двоичного значения.


## Syntax

```powerquery
WebAction.Request(
    method as text,
    url as text,
    optional options as record
) as action
```


## Remarks

Создает действие, которое после завершения вернет результаты выполнения запроса <code>method</code> к <code>url</code> с использованием HTTP в качестве двоичного значения.    Для указания дополнительных свойств можно задать необязательный параметр записи <code>options</code>. Запись может содержать следующие поля:    <ul><li><code>Query</code> : Добавляйте параметры запросов в URL-адрес программным способом, не беспокоясь об экранировании.</li><li><code>ApiKeyName</code> : Если целевой сайт поддерживает ключ API, этот параметр можно использовать для указания имени (не значения) параметра ключа, который следует использовать в URL-адресе. Фактическое значение ключа указывается в учетных данных.</li><li><code>Headers</code> : При указании этого значения в виде записи в HTTP-запрос будут добавлены дополнительные заголовки.</li><li><code>Timeout</code> : При указании этого значения в виде длительности будет изменено время ожидания HTTP-запроса. Значение по умолчанию&#160;— 100&#160;секунд.</li><li><code>ExcludedFromCacheKey</code> : При указании этого значения в виде списка эти ключи заголовков HTTP будут исключены из вычислений для кэширования данных.</li><li><code>IsRetry</code> : При указании этого логического значения как True все существующие ответы в кэше будут игнорироваться при извлечении данных.</li><li><code>ManualStatusHandling</code> : При указании этого значения в виде списка встроенная обработка HTTP-запросов, ответ которых имеет один из этих кодов состояния, будет невозможна.</li><li><code>RelativePath</code> : Это значение, указанное в виде текста, будет добавлено к базовому URL-адресу перед выполнением запроса.</li><li><code>Content</code> : Указание этого значения приведет к тому, что его содержимое станет телом HTTP-запроса.</li></ul>    <br />    Обратите внимание, что эта функция отключена в большинстве контекстов. Рассмотрите возможность использования Web.Contents или Web.Headers вместо нее.    


## Examples

### Example #1 
Выполнение запроса GET в Bing.
```powerquery
WebAction.Request(WebMethod.Get, "https://bing.com")
```

Result: 
```powerquery
Action
```




## Category
Action