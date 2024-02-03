---
title: Web.Contents
---

# Web.Contents


## Description

Повертає вміст, завантажений з URL-адреси, у двійковому вигляді.


## Syntax

```powerquery
Web.Contents(
    url as text,
    optional options as record
) as binary
```


## Details

Повертає вміст, завантажений із використанням <code>url</code>, як бінарне значення. Щоб указати додаткові властивості, можна задавати додатковий параметр запису <code>options</code>. Запис може містити такі поля:    <ul><li><code>Query</code> : Параметри запиту можна програмно додавати до URL-адреси без необхідності додавати escape-код.</li><li><code>ApiKeyName</code> : Якщо на цільовому сайті має вказуватися ключ API, за допомогою цього параметра можна вказати ім‘я, проте не значення, параметра ключа, який слід використовувати в URL-адресі. Фактичне значення ключа вказується в облікових даних.</li><li><code>Headers</code> : Якщо вказати запис як значення, в HTTP-запиті буде вказано додаткові заголовки.</li><li><code>Timeout</code> : Якщо вказати тривалість як значення, час очікування HTTP-запиту зміниться. Стандартне значення – 100 секунд.</li><li><code>ExcludedFromCacheKey</code> : Якщо вказати список як значення, відповідні ключі заголовків HTTP буде виключено з обчислення для кешування даних.</li><li><code>IsRetry</code> : Якщо вказати логічне значення true, під час отримання даних ігноруватиметься будь-яка наявна відповідь у кеші.</li><li><code>ManualStatusHandling</code> : Якщо вказати список як значення, це запобігатиме використанню передбачених механізмів обробки щодо HTTP-запитів, відповідь на які має один з указаних кодів станів.</li><li><code>RelativePath</code> : Якщо вказати це значення як текст, його буде додано до основної URL-адреси до виконання запиту.</li><li><code>Content</code> : Це значення змінює веб-запит GET на POST, використовуючи значення параметра як вміст для POST.</li></ul>    HTTP-запит виконується методом GET, якщо вміст не вказано, або POST, якщо вміст зазначено. Запити POST можна виконувати лише анонімно.    <br />    Заголовки HTTP-відповіді доступні як метадані бінарного результату. Поза контекстом настроюваного з’єднувача даних доступна лише підмножина заголовків відповіді (з міркувань безпеки).    


## Examples

### Example #1 
Отримайте вміст &lt;code&gt;&#34;https://bing.com/search?q=Power+Query&#34;&lt;/code&gt; за допомогою параметрів RelativePath і Query. Ці параметри можна використовувати для динамічного запиту статичної основної URL-адреси.
```powerquery
let
    searchText = "Power Query"
in
    Web.Contents(
        "https://www.bing.com",
        [
            RelativePath = "search",
            Query = [q = searchText]
        ]
    )
```

Result: 
```powerquery
binary
```


### Example #2 
Виконайте POST-запит відносно URL-адреси, передавши бінарні дані у форматі JSON і проаналізувавши відповідь як JSON.
```powerquery
let
    url = ...,
    headers = [#"Content-Type" = "application/json"],
    postData = Json.FromValue([x = 235.7, y = 41.53]),
    response = Web.Contents(
        url,
        [
            Headers = headers,
            Content = postData
        ]
    ),
    jsonResponse = Json.Document(response)
in
    jsonResponse
```

Result: 
```powerquery
table
```


### Example #3 
Підключайтеся за допомогою захищеної URL-адреси, де ключ автентифікації приймається як частина рядка запиту. Не потрібно жорстко програмувати секретний ключ у коді М, адже це може створювати загрозу безпеці.     Натомість його можна надавати безпечно. Для цього потрібно вказати ім’я ключа, проте не значення, у коді M, вибрати автентифікацію за допомогою веб-інтерфейсу API і ввести значення ключа як облікові дані веб-інтерфейсу API.    Таким чином можна створювати запити на адресу на зразок такої: &lt;code&gt;&#34;https://contoso.com/api/customers/get?api_key=\*\*\*\*\*\*&#34;&lt;/code&gt;.
```powerquery
Web.Contents("https://contoso.com/api/customers/get", [ApiKeyName="api_key"])
```

Result: 
```powerquery
binary
```




## Category
Accessing data
