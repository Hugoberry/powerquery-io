---
title: SparkPost.GetList
---

# SparkPost.GetList



## Syntax

```powerquery
SparkPost.GetList(
    path as text
) as table
```


## Details

Цю функцію можна використовувати для викликання будь-якої кінцевої точки "Списки", яку пропонує інтерфейс SparkPost API версії 1. Викликаючи SparkPost API за допомогою цієї функції, пам’ятайте, що SparkPost API має суворе обмеження на частоту викликів. Якщо сервер SparkPost повертає код стану 429, це означає, що ви досягли обмеження частоти й повинні трохи зачекати, перш ніж здійснювати подальші виклики.


## Examples

### Example #1 
Повертає таблицю з одним стовпцем, заповненим даними однієї з кінцевих точок інтерфейсу SparkPost API версії 1 (докладніші відомості див. в документації SparkPost).
```powerquery
Source = SparkPost.GetList("metrics/campaigns")
```

Result: 
```powerquery
Json.Document
```



