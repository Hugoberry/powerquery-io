---
title: Uri.Parts
---

# Uri.Parts


## Description

Возвращает части введенного абсолютного URI в качестве записи.


## Syntax

```powerquery
Uri.Parts(
    absoluteUri as text
) as record
```


## Details

Возвращает (как запись) части введенного <code>absoluteUri</code> с такими значениями, как схема, узел, порт, путь, запрос, фрагмент, имя пользователя и пароль.


## Examples

### Example #1 
Найти части абсолютного URI &#34;www.adventure-works.com&#34;.
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
Декодировать закодированную строку.
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
