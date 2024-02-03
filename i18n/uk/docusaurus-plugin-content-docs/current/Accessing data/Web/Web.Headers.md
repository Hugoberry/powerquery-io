---
title: Web.Headers
---

# Web.Headers


## Description

Повертає заголовки HTTP, завантажені за URL-адресою, як значення запису.


## Syntax

```powerquery
Web.Headers(
    url as text,
    optional options as record
) as record
```


## Details

Повертає заголовки, завантажені з використанням <code>url</code>, як запис. Щоб указати додаткові властивості, можна задавати додатковий параметр запису <code>options</code>. Запис може містити такі поля:    <ul><li><code>Query</code> : Параметри запиту можна програмно додавати до URL-адреси без необхідності додавати escape-код.</li><li><code>ApiKeyName</code> : Якщо на цільовому сайті має вказуватися ключ API, за допомогою цього параметра можна вказати ім‘я, проте не значення, параметра ключа, який слід використовувати в URL-адресі. Фактичне значення ключа вказується в облікових даних.</li><li><code>Headers</code> : Якщо вказати запис як значення, в HTTP-запиті буде вказано додаткові заголовки.</li><li><code>Timeout</code> : Якщо вказати тривалість як значення, час очікування HTTP-запиту зміниться. Стандартне значення – 100 секунд.</li><li><code>ExcludedFromCacheKey</code> : Якщо вказати список як значення, відповідні ключі заголовків HTTP буде виключено з обчислення для кешування даних.</li><li><code>IsRetry</code> : Якщо вказати логічне значення true, під час отримання даних ігноруватиметься будь-яка наявна відповідь у кеші.</li><li><code>ManualStatusHandling</code> : Якщо вказати список як значення, це запобігатиме використанню передбачених механізмів обробки щодо HTTP-запитів, відповідь на які має один з указаних кодів станів.</li><li><code>RelativePath</code> : Якщо вказати це значення як текст, його буде додано до основної URL-адреси до виконання запиту.</li></ul>    HTTP-запит виконується методом HEAD. Поза контекстом настроюваного з’єднувача даних доступна лише підмножина заголовків відповіді (з міркувань безпеки).    


## Examples

### Example #1 
Отримання заголовків HTTP для &lt;code&gt;&#34;https://bing.com/search?q=Power+Query&#34;&lt;/code&gt; з використанням параметрів RelativePath і Query.
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
