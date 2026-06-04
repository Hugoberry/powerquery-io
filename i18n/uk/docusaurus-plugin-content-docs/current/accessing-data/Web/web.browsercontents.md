---
title: Web.BrowserContents
---

# Web.BrowserContents


Повертає HTML-код за вказаною URL-адресою сторінки, що переглядається в браузері.


## Syntax

```powerquery
Web.BrowserContents(
    url as text,
    optional options as record
) as text
```


## Remarks

Повертає HTML-код за вказаною `url`, що переглядається в браузері. Можна надати додатковий параметр запису (`options`), щоб указати додаткові властивості. Запис може містити такі поля:

-   `ApiKeyName`: якщо на цільовому сайті вказується ключ API, за допомогою цього параметра можна вказати ім’я (але не значення) параметра ключа, який слід використовувати в URL-адресі. Фактичне значення ключа вказано в облікових даних.
-   `WaitFor`: указує умову очікування перед завантаженням HTML додатково до очікування завантаження сторінки (що виконується завжди). Може бути записом, що містить поля часу очікування та/або селектора. Якщо вказано лише час очікування, функція зачекає вказаний проміжок часу, перш ніж завантажувати HTML. Якщо вказано як селектор, так і час очікування і час очікування завершиться до того, як на сторінці з’явиться селектор, станеться помилка. Якщо для селектора не вказано час очікування, застосовується стандартний час очікування 30 секунд.


## Examples

### Example #1
Повертає HTML для https://microsoft.com.
```powerquery
Web.BrowserContents("https://microsoft.com")
```

Result: 
```powerquery
"<!DOCTYPE html><html xmlns=..."
```


### Example #2
Повертає HTML для https://microsoft.com після очікування появи селектора CSS.
```powerquery
Web.BrowserContents("https://microsoft.com", [WaitFor = [Selector = "div.ready"]])
```

Result: 
```powerquery
"<!DOCTYPE html><html xmlns=..."
```


### Example #3
Повертає HTML для https://microsoft.com після очікування протягом десяти секунд.
```powerquery
Web.BrowserContents("https://microsoft.com", [WaitFor = [Timeout = #duration(0,0,0,10)]])
```

Result: 
```powerquery
"<!DOCTYPE html><html xmlns=..."
```


### Example #4
Повертає HTML для https://microsoft.com після очікування появи селектора CSS протягом десяти секунд.
```powerquery
Web.BrowserContents("https://microsoft.com", [WaitFor = [Selector = "div.ready", Timeout = #duration(0,0,0,10)]])
```

Result: 
```powerquery
"<!DOCTYPE html><html xmlns=..."
```




## Category
Accessing data
