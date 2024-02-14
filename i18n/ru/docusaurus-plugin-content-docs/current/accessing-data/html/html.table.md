---
title: Html.Table
---

# Html.Table


Возвращает таблицу, содержащую результаты запуска указанных селекторов каскадных таблиц стилей в указанном HTML-коде.


## Syntax

```powerquery
Html.Table(
    html as any,
    columnNameSelectorPairs as list,
    optional options as record
) as table
```


## Remarks

Возвращает таблицу, содержащую результаты запуска указанных селекторов CSS с предоставленными <code>html</code>. Вы можете указать дополнительные свойства, используя необязательный параметр записи <code>options</code>. Запись может содержать следующие поля:    <ul><li><code>RowSelector</code></li></ul>    


## Examples

### Example #1 
Возвращает таблицу из образца текстового значения HTML.
```powerquery
Html.Table("<div class=""name"">Jo</div><span>Manager</span>", {{"Name", ".name"}, {"Title", "span"}}, [RowSelector=".name"])
```

Result: 
```powerquery
#table({"Name", "Title"}, {{"Jo", "Manager"}})
```


### Example #2 
Извлекает все ссылки href из примера HTML-текста.
```powerquery
Html.Table("<a href=""/test.html"">Тест</a>", {{"Link", "a", each [Attributes][href]}})
```

Result: 
```powerquery
#table({"Link"}, {{"/test.html"}})
```




## Category
Доступ к данным
