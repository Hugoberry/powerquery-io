---
title: Html.Table
---

# Html.Table


Zwraca tabelę zawierającą wyniki uruchamiania określonych selektorów CSS względem podanego kodu HTML.


## Syntax

```powerquery
Html.Table(
    html as any,
    columnNameSelectorPairs as list,
    optional options as record
) as table
```


## Remarks

Zwraca tabelę zawierającą wyniki działania określonych selektorów CSS względem dostarczonego elementu <code>html</code>. Parametr opcjonalny rekordu <code>options</code> można podać w celu określenia właściwości dodatkowych. Rekord może zawierać następujące pola:    <ul><li><code>RowSelector</code></li></ul>    


## Examples

### Example #1 
Zwraca tabelę na podstawie przykładowej wartości tekstu html.
```powerquery
Html.Table("<div class=""name"">Jo</div><span>Menedżer</span>", {{"Name", ".name"}, {"Title", "span"}}, [RowSelector=".name"])
```

Result: 
```powerquery
#table({"Name", "Title"}, {{"Jo", "Manager"}})
```


### Example #2 
Wyodrębnia wszystkie elementy HREF z przykładowej wartości tekstowej w formacie HTML.
```powerquery
Html.Table("<a href=""/test.html"">Test</a>", {{"Link", "a", each [Attributes][href]}})
```

Result: 
```powerquery
#table({"Link"}, {{"/test.html"}})
```




## Category
Uzyskiwanie dostępu do danych
