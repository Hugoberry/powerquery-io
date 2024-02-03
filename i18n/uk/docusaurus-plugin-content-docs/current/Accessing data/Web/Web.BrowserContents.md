---
title: Web.BrowserContents
---

# Web.BrowserContents


## Description

Повертає HTML-код за вказаною URL-адресою сторінки, що переглядається в браузері.


## Syntax

```powerquery
Web.BrowserContents(
    url as text,
    optional options as record
) as text
```


## Details

Повертає HTML для вказаної URL-адреси <code>url</code> у форматі веб-браузера. Можна вказати додатковий параметр запису, <code>options</code>, щоб визначити додаткові властивості. Запис може містити описані нижче поля.     <ul>        <li><code>ApiKeyName</code>: якщо на цільовому сайті має вказуватися ключ API, за допомогою цього параметра можна вказати ім’я, проте не значення, параметра ключа, який слід використовувати в URL-адресі. Фактичне значення ключа вказується в облікових даних.</li>        <li><code>WaitFor</code>: визначає умову для очікування перед завантаженням HTML. Ця умова доповнює очікування на завантаження сторінки (що завжди виконується). Як значення можна вказати запис із полями "Timeout" (Час очікування) і/або "Selector" (Селектор). Якщо вказати лише час очікування, перед завантаженням HTML функція очікуватиме вказаний час. Якщо вказати селектор і час очікування, що завершується до того, як селектор з’явиться на сторінці, повернеться помилка. Якщо вказати селектор без часу очікування, застосовуватиметься стандартний час очікування 30 секунд.</li>      </ul>    


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
Отримання доступу до даних
