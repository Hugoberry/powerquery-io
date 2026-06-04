---
title: Html.Table
---

# Html.Table


Повертає таблицю з результатами виконання заданих селекторів CSS для вказаного HTML-коду.


## Syntax

```powerquery
Html.Table(
    html as any,
    columnNameSelectorPairs as list,
    optional options as record
) as table
```


## Remarks

Повертає таблицю з результатами застосування вказаних селекторів CSS до наданого елемента `html`. Можна надати додатковий параметр запису `options`, щоб указати додаткові властивості. Запис може містити такі поля:

-   `RowSelector`


## Examples

### Example #1
Повертає таблицю з прикладом текстового значення HTML.
```powerquery
Html.Table("<div class=""name"">Jo</div><span>Manager</span>", {{"Name", ".name"}, {"Title", "span"}}, [RowSelector=".name"])
```

Result: 
```powerquery
#table({"Name", "Title"}, {{"Jo", "Manager"}})
```


### Example #2
Видобуває всі атрибути href зі зразка текстового значення у форматі HTML.
```powerquery
Html.Table("<a href=""/test.html"">Test</a>", {{"Link", "a", each [Attributes][href]}})
```

Result: 
```powerquery
#table({"Link"}, {{"/test.html"}})
```




## Category
Accessing data
