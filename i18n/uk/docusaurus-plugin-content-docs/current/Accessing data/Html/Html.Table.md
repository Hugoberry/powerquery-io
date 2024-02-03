---
title: Html.Table
---

# Html.Table


## Description

Повертає таблицю з результатами виконання заданих селекторів CSS для вказаного HTML-коду.


## Syntax

```powerquery
Html.Table(
    html as any,
    columnNameSelectorPairs as list,
    optional options as record
) as table
```


## Details

Повертає таблицю з результатами застосування вказаних селекторів CSS до наданого елемента <code>html</code>. Можна надати додатковий параметр запису <code>options</code>, щоб указати додаткові властивості. Запис може містити такі поля:    <ul><li><code>RowSelector</code></li></ul>    


## Examples

### Example #1 
Повертає таблицю з прикладом текстового значення HTML.
```powerquery
Html.Table("<div class=""name"">Джо</div><span>Керівник</span>", {{"Name", ".name"}, {"Title", "span"}}, [RowSelector=".name"])
```

Result: 
```powerquery
#table({"Name", "Title"}, {{"Jo", "Manager"}})
```


### Example #2 
Видобуває всі атрибути href зі зразка текстового значення у форматі HTML.
```powerquery
Html.Table("<a href=""/test.html"">Тест</a>", {{"Link", "a", each [Attributes][href]}})
```

Result: 
```powerquery
#table({"Link"}, {{"/test.html"}})
```




## Category
Отримання доступу до даних
