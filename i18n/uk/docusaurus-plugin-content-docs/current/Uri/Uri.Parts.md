---
title: Uri.Parts
---

# Uri.Parts


## Description

Повертає частини вводу абсолютного URI як запис.


## Syntax

```powerquery
Uri.Parts(
    absoluteUri as text
) as record
```


## Details

Повертає частини вводу <code>absoluteUri</code> як запис, що містить такі значення як Схема, Хост, Порт, Шлях, Запит, Фрагмент, Ім'я користувача та Пароль.


## Examples

### Example #1 
Знайти частини абсолютного URI &#34;www.adventure-works.com&#34;.
```powerquery
Uri.Parts("www.adventure-works.com")
```

Result: 
```powerquery
[
    Scheme = "http",
    Host = "www.adventure-works.com",
    Port = 80,
    Path = "/",
    Query = [],
    Fragment = "",
    UserName = "",
    Password = ""
]
```


### Example #2 
Розшифруйте рядок із процентним кодуванням.
```powerquery
let
    UriUnescapeDataString = (data as text) as text => Uri.Parts("http://contoso?a=" & data)[Query][a]
in
    UriUnescapeDataString("%2Bmoney%24")
```

Result: 
```powerquery
"+money$"
```




## Category
Uri
