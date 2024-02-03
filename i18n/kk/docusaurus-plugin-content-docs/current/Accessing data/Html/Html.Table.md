---
title: Html.Table
---

# Html.Table


## Description

Қамтамасыз етілген HTML кодына қатысты көрсетілген CSS селекторларын орындаудың нәтижелерін қамтитын кестені қайтарады.


## Syntax

```powerquery
Html.Table(
    html as any,
    columnNameSelectorPairs as list,
    optional options as record
) as table
```


## Details

Берілген <code>html</code> бойынша көрсетілген CSS селекторларын орындау нәтижелері бар кестені қайтарады. Қосымша сипаттарды көрсету үшін <code>options</code> қосымша жазба параметрін беруге болады. Жазбада келесі өрістер болуы мүмкін:    <ul><li><code>RowSelector</code></li></ul>    


## Examples

### Example #1 
Үлгі html мәтіні мәнінен кестені қайтарады.
```powerquery
Html.Table("<div class=""name"">Jo</div><span>Manager</span>", {{"Name", ".name"}, {"Title", "span"}}, [RowSelector=".name"])
```

Result: 
```powerquery
#table({"Name", "Title"}, {{"Jo", "Manager"}})
```


### Example #2 
Үлгі html мәтіндік мәнінен барлық href шығарып алады.
```powerquery
Html.Table("<a href=""/test.html"">Тексеру</a>", {{"Link", "a", each [Attributes][href]}})
```

Result: 
```powerquery
#table({"Link"}, {{"/test.html"}})
```




## Category
Деректерге қол жеткізу
